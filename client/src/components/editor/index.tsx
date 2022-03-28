import * as React from "react";
import { Grid } from "@mui/material";
import { Builder, Debounce, Forms } from 'tripetto';
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { IDefinition, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL } from "../../settings";
import { DEFINITION_KEY, USER_ID_KEY, USER_TENANT_ID_KEY, DEFAULT_NAME, RUNNER_PREVIEW_APP, RUNNER_RUN_APP } from '../../global';
import API  from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash, faPlay, faSave, faSpinner, faEye, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import DefinitionsModal from "./definitions-modal";
import Loader from "../loader";
import { parseDefinition, saveDefinition, loadDefinitionById, exportDefinitionAsJsonFile } from "../../services/definition";
import { mergeProperties } from "../../services/builder";
import { popup, error as errorPopup, apiError, confirm as confirmPopup} from "./dialog";

import "./blocks";

import "./style.scss";
import { Glue42Web } from "@glue42/web";

class Editor extends React.Component<IEditorProps, IEditorState>
{
    private editor?: Builder;
    private timer?;
    private _isMounted: boolean = false;

    public set isMounted(status: boolean) {
        this._isMounted = status;
    }

    public get isMounted() {
        return this._isMounted;
    }

    constructor(props) {
        super(props);

        this.isMounted = false;

        this.state = {
            tripettoDefinition: undefined,
            definition: { name: DEFAULT_NAME } as IDefinition,
            isLoading: true,
            isSaving: false,
            showModal: false,
            glueWorkspace: undefined,
            glueContext: undefined,
        };

        this.onResize = this.onResize.bind(this);
        this.beforeUnload = this.beforeUnload.bind(this);
        this.openWorkflow = this.openWorkflow.bind(this);
        this.deleteWorkflow = this.deleteWorkflow.bind(this);
        this.bulkDeleteWorkflows = this.bulkDeleteWorkflows.bind(this);
        this.bulkExportWorkflows = this.bulkExportWorkflows.bind(this);
    }

    render()
    {
        return (
            <Grid container>
                <Loader isLoading={this.state.isLoading}/>
                <Grid item md={12} id={this.props.element}>
                    <div className="editor-menu">
                        <button onClick={() => this.showDefinitionsModal()} title="Home page">
                            <img src={`${PUBLIC_URL}/logo.png`} />
                        </button>
                        <button onClick={() => this.editProps()} title="Edit properties">
                            <FontAwesomeIcon icon={faPen}/>
                        </button>
                        {
                            this.state.isSaving && (this.props.manualSaving === true)
                            ? (
                                <button onClick={() => {}} title="Please wait...">
                                    <FontAwesomeIcon icon={faSpinner} spin={true}/>
                                </button>
                            )
                            : 
                            this.props.manualSaving === true 
                            ? (
                                <button onClick={() => this.save()} title="Save workflow">
                                    <FontAwesomeIcon icon={faSave}/>
                                </button>
                            )
                            : (undefined)
                        }
                        {
                            this.state.definition && this.state.definition._id
                            ? (
                                <button onClick={() => this.preview()} title="Preview workflow">
                                    <FontAwesomeIcon icon={faEye}/>
                                </button>
                            )
                            : undefined
                        }
                        {
                            this.state.definition && this.state.definition._id
                            ? (
                                <button onClick={() => this.run()} title="Run workflow">
                                    <FontAwesomeIcon icon={faPlay}/>
                                </button>
                            )
                            : undefined
                        }
                        {
                            this.state.definition && this.state.definition._id
                            ? (
                                <button onClick={() => this.share()} title="Share workflow runner">
                                    <FontAwesomeIcon icon={faShareAlt}/>
                                </button>
                            )
                            : undefined
                        }
                        <button onClick={async() => this.deleteWorkflow()} title="Delete workflow">
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                        <button onClick={() => this.openTutorial()} title="Open tutorial">
                            <FontAwesomeIcon icon={faQuestion}/>
                        </button>
                    </div>
                    <DefinitionsModal currentOpenedDefinition={this.state.definition?._id}
                        show={this.state.showModal} 
                        onHide={() => this.toggleModal()}
                        createNewWorkflow={() => this.createNewWorkflow()}
                        deleteWorkflow={this.deleteWorkflow}
                        openWorkflow={this.openWorkflow}
                        bulkDeleteWorkflows={async(definitionIds) => this.bulkDeleteWorkflows(definitionIds)}
                        allowExport={this.props.allowExport}
                        bulkExportWorkflows={this.bulkExportWorkflows}
                        user={this.props.user}
                        loadWorkflows={() => this.loadWorkflows()}/>
                </Grid>
            </Grid>
        );
    }

    componentDidMount()
    {
        this.isMounted = true;
        this.isMounted && this.open();

        window.addEventListener("resize", this.onResize);
        window.addEventListener("orientationchange",  this.onResize);
        window.addEventListener("beforeunload", this.beforeUnload);

        // init run notification handler
        if(this.props.glue) {
            const handler = async (args: any) => {
                this.state.glueWorkspace 
                    .addGroup({type: "group", children: [{type: "window", appName: RUNNER_RUN_APP}]});
            }

            this.props.glue.interop.register("runWorkflow", handler);
        }
    }

    componentWillUnmount()
    {
        this.isMounted = false;

        this.mutateDefinition.cancel();
        
        this.clearTimer();
        
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener("orientationchange", this.onResize);
        window.removeEventListener("beforeunload", this.beforeUnload);
    }

    onResize() 
    {
        this.editor?.resize();
    }

    openTutorial()
    {
        this.editor?.tutorial();
    }

    editProps()
    {
        this.editor?.edit("properties");
    }

    showDefinitionsModal()
    {
        this.setState({
            showModal: ! this.state.showModal
        })
    }

    async save(): Promise<void>
    {
        if (typeof this.state.tripettoDefinition === "undefined") {
            return Promise.resolve();
        }

        let definition: TripettoDefinition = Object.assign({} as TripettoDefinition, this.state.tripettoDefinition);

        await this.onChange(definition);

        await this.initWorkflowApps(this.getDefinition());
    }

    toggleModal()
    {
        this.setState({
            showModal: ! this.state.showModal
        })
    }

    async beforeUnload(event)
    {
        let e = event || window.event;
        if (! e) {
            return;
        }

        let definition = this.getDefinition();
        if (typeof definition === "undefined") {
            return;
        }
        
        if (typeof definition !== "undefined" && definition.is_saved) {
            return;
        }

        e.preventDefault();
       
        return e.returnValue = "Are you sure you want to close?";
    }

    clearTimer()
    {
        if (typeof this.timer !== "undefined") {
            clearInterval(this.timer);

            this.timer = undefined;
        }
    }

    startTimer()
    {
        if (this.props.manualSaving === true) {
            return;
        }

        this.timer = setInterval(() => {
            this.setState({ isSaving: true });

            let definition: IDefinition | undefined = this.getDefinition();

            if (! definition || definition.is_saved === true) {
                this.clearTimer();
                this.setState({ isSaving: false });

                return;
            }
            
            if (ENV === "development") {
                console.log("re-send unsaved definition", definition);
            }

            saveDefinition(definition, this.getTenantId())
                .then(definition => this.onSuccessfulSaving(definition))
                .catch(error => this.onFailedSaving(error, definition));
        }, 15000);
    }

    async getGlueWorkspace()
    {
        if (! this.props.glue) {
            return;
        }

        let glueWorkspace = await this.props.glue.workspaces?.getMyWorkspace();
        let glueContext = await glueWorkspace?.getContext();

        this.setState({ glueWorkspace, glueContext });
    }

    async open(): Promise<Builder | void>
    {
        if (ENV === "development") {
            console.log("opening the editor");
        }

        await this.getGlueWorkspace();

        this.setState({ isLoading: true });

        if (typeof this.props.user !== "undefined") {
            window.sessionStorage.setItem(USER_ID_KEY, this.props.user.id);
            window.sessionStorage.setItem(USER_TENANT_ID_KEY, this.getTenantId());
        }

        let definition = await loadDefinitionById(this.props.definitionId, this.getTenantId());

        return this.initBuilder(definition);
    }

    async initBuilder(definition?: IDefinition): Promise<Builder | void>
    {
        this.editor?.close();

        this.clearTimer();

        this.setState({ tripettoDefinition: undefined });

        this.setDefinition(definition);

        if (this.props.glue) {
            await this.props.glue.contexts.set(
                'workflow', 
                {
                    id: definition?._id || undefined,
                    name: definition?.name || undefined,
                    action: "open"
                } 
            );

            await this.initWorkflowApps(definition);
        }

        let properties = mergeProperties(this.props.element);

        if (typeof this.editor === "undefined") {
            this.editor = new Builder(properties);
        }

        // Prevent dispatch on change & save hook
        this.editor.onChange = () => {};
        this.editor.onSave = () => {};

        this.editor.open(definition);
        this.editor.onReady = () => this.ready();

        window.sessionStorage.removeItem(DEFINITION_KEY);

        if (typeof this.props.manualSaving === "boolean" && this.props.manualSaving === true) {
            this.setState({ isSaving: false });
        }

        return this.editor;
    }

    private async initWorkflowApps(definition?: IDefinition): Promise<void>
    {
        if (this.props.glue) {
            await this.props.glue.contexts.set(
                'workflow', 
                {
                    id: definition?._id || undefined,
                    name: definition?.name || undefined,
                    action: "open"
                } 
            );

            await this.props.glue.appManager.inMemory.remove(RUNNER_PREVIEW_APP);
            await this.props.glue.appManager.inMemory.remove(RUNNER_RUN_APP);

            if (definition) {
                let importResult = await this.props.glue.appManager.inMemory.import(
                    [
                        {
                            name: RUNNER_PREVIEW_APP,
                            type: "window",
                            title: "Unblock - Workflow preview",
                            details: {
                                url: `${PUBLIC_URL}/preview/${definition._id}`,
                            }
                        }, 
                        {
                            name: RUNNER_RUN_APP,
                            type: "window",
                            title: "Unblock - Workflow runner",
                            details: {
                                url: `${PUBLIC_URL}/run/${definition._id}`,
                            }
                        }
                    ], 
                    "merge"
                );

                let importedApps = importResult.imported;
                let errors = importResult.errors;

                if (ENV === "development") {
                    importedApps.forEach(console.log);
                    errors.forEach(e => console.log(`App: ${e.app}, Error: ${e.error}`));
                }
            }
        }
    }

    ready()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.editor.onChange = (definition: TripettoDefinition) => (! this.props.manualSaving ? this.onChange(definition) : this.onChangeSnapshot(definition));
        this.editor.onClose = () => this.onClose();

        this.setState({ isLoading: false });
    }

    private onChangeSnapshot(tripettoDefinition: TripettoDefinition): void
    {
        this.setState({ tripettoDefinition });
    }

    private onClose()
    {
        this.setDefinition();
        this.mutateDefinition.flush();
    }

    private setDefinition(definition?: IDefinition): void
    {
        this.setState({ definition });
    }

    private getDefinition(): IDefinition | undefined
    {
        return this.state.definition || undefined;
    }

    private async onChange(submittedDefinition: TripettoDefinition): Promise<void>
    {
        try {
            if (ENV === "development") {
                console.log("definition has been changed", submittedDefinition);
            }
    
            if (typeof this.props.manualSaving === "boolean" && this.props.manualSaving === true) {
                this.setState({ isSaving: true });
            }
    
            let currentDefinition = this.getDefinition();
            let definition = parseDefinition(submittedDefinition, currentDefinition, this.props.user);

            this.setDefinition(definition);

            if (this.props.glue) {
                await this.props.glue.contexts.set(
                    'workflow', 
                    {
                        id: definition?._id || undefined,
                        name: definition?.name || undefined,
                        action: "change"
                    } 
                );
            }
    
            if (typeof this.props.manualSaving === "boolean" && this.props.manualSaving === true) {
                return saveDefinition(definition, this.getTenantId())
                    .then(definition => this.onSuccessfulSaving(definition))
                    .catch(error => this.onFailedSaving(error, definition));
            }
            
            this.mutateDefinition.cancel();
            this.mutateDefinition.invoke(definition);
    
            return Promise.resolve();
        } catch (error) {
            if (ENV === "development") {
                console.log(error);
            }

            if (typeof this.props.manualSaving === "boolean" && this.props.manualSaving === true) {
                this.setState({ isSaving: false });
            }

            return Promise.reject(error);
        }
    }

    mutateDefinition = new Debounce((definition: IDefinition) => {
        saveDefinition(definition, this.getTenantId())
            .then(definition => this.onSuccessfulSaving(definition))
            .catch(error => this.onFailedSaving(error, definition));
    }, 500);

    private onSuccessfulSaving(definition?: IDefinition): void
    {
        this.setDefinition(definition);
        this.setState({ isSaving: false });

        if (typeof this.timer !== "undefined") {
            this.clearTimer();
        }
    }

    private onFailedSaving(error: any, definition?: IDefinition): void
    {
        if (typeof definition !== "undefined") {
            definition.is_saved = false;
        }

        window.sessionStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

        this.setDefinition(definition);
        
        if (typeof this.props.manualSaving === "boolean" && this.props.manualSaving === true) {
            this.setState({ isSaving: false });
        }

        if (typeof error.response !== "undefined" && error.response.status === 409 && typeof error.response.data.key !== "undefined" && error.response.data.key === "duplicate-name") {
            errorPopup("Workflow name already exists in your tenant! Please make sure to choose another name.");

            return;
        }

        if (typeof error.response !== "undefined" && error.response.status === 409) {
            errorPopup("The form you're currently editing is not the latest version. Please refresh your page to access it.");

            return;
        }
        
        if (typeof error.response !== "undefined" && error.response.status === 505) {
            errorPopup("A new update has been released. Please refresh your page to continue editing your form.");

            return;
        }

        apiError();

        if (typeof this.timer === "undefined" && typeof this.props.manualSaving === "boolean" && this.props.manualSaving === false) {
            this.startTimer();
        }
    }
    
    private async createNewWorkflow()
    {
        this.toggleModal();

        this.setState({ isLoading: true });

        this.initBuilder();
    }

    private async bulkDeleteWorkflows(definitionsIds?: string[]): Promise<boolean>
    {
        if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
            return Promise.resolve(false);
        }

        this.toggleModal();
        this.setState({ isLoading: true });

        if (! await confirmPopup("Are you sure you want to delete this workflow?")) {
            return Promise.resolve(false);
        }

        return API.delete(`${PUBLIC_URL}/api/definitions/${this.getTenantId()}`, { data: { definitionsIds } })
            .then(response => {
                if (! response.data.success) {
                    this.setState({ isLoading: false });
                    this.toggleModal();

                    return false;
                }

                let definition = this.getDefinition();
                if (definition && definition._id && Object.values(definitionsIds).includes(definition._id)) {
                    this.initBuilder();
                }

                this.setState({ isLoading: false });
                this.toggleModal();

                return true;
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                this.setState({ isLoading: false });
                this.toggleModal();

                return false;
            });
    }

    private getTenantId(): string
    {
        if (! this.props.user || ! this.props.user.tenantId) {
            return '';
        }

        return this.props.user.tenantId.replace(/[^\w]/g, '');
    }

    private bulkExportWorkflows(definitionsIds?: string[]): Promise<boolean>
    {
        if (! this.props.allowExport || typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
            return Promise.resolve(false);
        }

        return API.post(`${PUBLIC_URL}/api/definitions/export/${this.getTenantId()}`, { definitionsIds })
            .then(response => {
                if (! response.data.success || ! response.data.definitions) {
                    return false;
                }

                exportDefinitionAsJsonFile(response.data.definitions);

                return true;
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                return false;
            });
    }

    private preview()
    {
        if (! this.state.definition || ! this.state.definition._id) {
            return;
        }

        if (! this.state.glueWorkspace || ! this.state.glueWorkspace.getAllGroups()[0]) {
            window.open(`${PUBLIC_URL}/preview/${this.state.definition._id}/${this.state.definition.tenant_id}`)?.focus();

            return;
        }

        this.state.glueWorkspace 
            .addGroup({type: "group", children: [{type: "window", appName: RUNNER_PREVIEW_APP}]});
    }
    
    private run()
    {
        if (! this.state.definition || ! this.state.definition._id) {
            return;
        }

        if (! this.state.glueWorkspace || ! this.state.glueWorkspace.getAllGroups()[0]) {
            window.open(`${PUBLIC_URL}/run/${this.state.definition._id}/${this.state.definition.tenant_id}`)?.focus();

            return;
        }

        const options: Glue42Web.Notifications.RaiseOptions = {
            title: "You've got a new request!",
            body: "New request",
            focusPlatformOnDefaultClick: true,
            actions: [
                {
                    action: "acceptRequest",
                    interop: {
                    method: "runWorkflow",
                    // arguments:
                    },
                    title: "Accept Request",
                },
                {
                    action: "declineRequest",
                    title: "Decline Request",
                },
            ],
        };

        
        this.props.glue.notifications.raise(options);
    }

    private share(): void
    {
        if (typeof this.state.definition === "undefined" || typeof this.state.definition._id === "undefined" || typeof this.state.definition.tenant_id === "undefined") {
            return;
        }

        let link = `${PUBLIC_URL}/run/${this.state.definition._id}/${this.state.definition.tenant_id}`;

        let urlText = new Forms.Text("singleline", link).readonly();
        urlText.copyToClipboard();

        popup("Copied!");
    }

    private async deleteWorkflow(definitionId?: string): Promise<boolean>
    {
        let oldDefinition = this.getDefinition();
        let oldDefinitionId = oldDefinition ? oldDefinition._id : undefined;

        if (! await confirmPopup("Are you sure you want to delete this workflow?")) {
            return Promise.resolve(false);
        }

        if (! definitionId && ! oldDefinitionId) {
            this.initBuilder();

            return Promise.resolve(false);
        }

        this.setState({ isLoading: true });

        return API.delete(`${PUBLIC_URL}/api/definition/${definitionId || oldDefinitionId}/${this.getTenantId()}`)
            .then(response => {
                if (! response.data.success) {
                    return false;
                }

                if (oldDefinitionId && oldDefinitionId === definitionId) {
                    this.toggleModal();
                    this.initBuilder();
                }

                if (! definitionId && oldDefinitionId) {
                    this.initBuilder();
                }

                this.setState({ isLoading: false });

                return true;
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                this.setState({ isLoading: false });

                return false;
            });
    }

    private openWorkflow(definitionId?: string)
    {
        if (! definitionId || typeof this.editor === "undefined") {
            return;
        }

        this.setState({ isLoading: true, showModal: false });

        loadDefinitionById(definitionId, this.getTenantId())
            .then(definition => {
                this.initBuilder(definition);
            });
    }

    private loadWorkflows(): Promise<IDefinition[] | undefined>
    {
        return this.save()
            .then(() => {
                let endpoint = `${PUBLIC_URL}/api/definitions`;
                let user = this.props.user;
        
                if (user && typeof user.tenantId === "string" && typeof user.id === "string") {
                    endpoint = endpoint.concat(`/${this.getTenantId()}/${user.id}`);
                }
        
                return API.get(endpoint);
            })
            .then(response => {
                if (! response.data.definitions) {
                    return undefined;
                }

                return response.data.definitions;
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                return Promise.reject(undefined);
            });
    }
}

export default Editor;