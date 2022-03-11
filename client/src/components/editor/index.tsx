import * as React from "react";
import { Grid } from "@mui/material";
import { Builder, Debounce } from "tripetto";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { IDefinition, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL } from "../../settings";
import { DEFINITION_KEY, USER_ID_KEY, USER_TENANT_ID_KEY } from '../../global';
import API  from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash, faPlay, faSave, faSpinner, faEye } from "@fortawesome/free-solid-svg-icons";
import DefinitionsModal from "./definitions-modal";
import Loader from "../loader";
import { parseDefinition, saveDefinition, loadDefinitionById, exportDefinitionAsJsonFile } from "../../services/definition";
import { mergeProperties } from "../../services/builder";

import "./blocks";

import "./style.scss";

const DEFAULT_NAME = "Unnamed";

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
            definition: { name: DEFAULT_NAME } as IDefinition,
            isLoading: true,
            isSaving: false,
            showModal: false,
            glueWorkspace: undefined,
            glueContext: undefined,
            user: undefined,
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
                        <button onClick={() => this.deleteWorkflow()} title="Delete workflow">
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
                        bulkDeleteWorkflows={this.bulkDeleteWorkflows}
                        allowExport={this.props.allowExport}
                        bulkExportWorkflows={this.bulkExportWorkflows}
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

    save(): void
    {
        this.editor?.save();
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

            saveDefinition(definition)
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
        let user = await this.props.glue.contexts.get("frontegg-user");

        this.setState({ glueWorkspace, glueContext, user });
    }

    async open(): Promise<Builder | void>
    {
        if (ENV === "development") {
            console.log("opening the editor");
        }

        await this.getGlueWorkspace();

        this.setState({ isLoading: true });

        if (typeof this.state.user !== "undefined") {
            window.sessionStorage.setItem(USER_ID_KEY, this.state.user.id);
            window.sessionStorage.setItem(USER_TENANT_ID_KEY, this.state.user.tenantId);
        }

        let definition = await loadDefinitionById(this.props.definitionId);

        if (definition && this.state.glueWorkspace && this.state.glueContext) {
            await this.state.glueWorkspace.updateContext({
                ...this.state.glueContext,
                workflow: {
                    id: definition._id,
                    action: "open"
                } 
            });
        }

        return this.initBuilder(definition);
    }

    async initBuilder(definition?: IDefinition): Promise<Builder | void>
    {
        this.editor?.close();

        this.clearTimer();

        this.setDefinition(definition);

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

    ready()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.editor.onChange = (definition: TripettoDefinition) => (! this.props.manualSaving ? this.onChange(definition) : {});
        this.editor.onSave = (definition: TripettoDefinition) => (this.props.manualSaving === true ? this.onChange(definition) : {});
        this.editor.onClose = () => this.onClose();

        this.setState({ isLoading: false });
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
        if (ENV === "development") {
            console.log("definition has been changed", submittedDefinition);
        }

        if (typeof this.props.manualSaving === "boolean" && this.props.manualSaving === true) {
            this.setState({ isSaving: true });
        }

        let currentDefinition = this.getDefinition();
        let definition = parseDefinition(submittedDefinition, currentDefinition, this.state.user);

        this.setDefinition(definition);

        if (definition && typeof definition?._id === "string") {
            if (this.state.glueWorkspace && this.state.glueContext) {
                await this.state.glueWorkspace.updateContext({
                    ...this.state.glueContext,
                    workflow: {
                        id: definition._id,
                        action: "change"
                    } 
                });
            }
        }

        if (typeof this.props.manualSaving === "boolean" && this.props.manualSaving === true) {
            saveDefinition(definition)
                .then(definition => this.onSuccessfulSaving(definition))
                .catch(error => this.onFailedSaving(error, definition));

            return Promise.resolve();
        }
        
        this.mutateDefinition.cancel();
        this.mutateDefinition.invoke(definition);

        return Promise.resolve();
    }

    mutateDefinition = new Debounce((definition: IDefinition) => {
        saveDefinition(definition)
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

        if (typeof error.response !== "undefined" && error.response.status === 409) {
            alert("The form you're currently editing is not the latest version. Please refresh your page to access it.");

            return;
        }
        
        if (typeof error.response !== "undefined" && error.response.status === 505) {
            alert("A new update has been released. Please refresh your page to continue editing your form.");

            return;
        }

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

    private bulkDeleteWorkflows(definitionsIds?: string[]): Promise<boolean>
    {
        if (typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
            return Promise.resolve(false);
        }

        if (! confirm("Are you sure you want to delete this workflow?")) {
            return Promise.resolve(false);
        }

        return API.delete(`${PUBLIC_URL}/api/definitions`, { data: { definitionsIds } })
            .then(response => {
                if (! response.data.success) {
                    return false;
                }

                let definition = this.getDefinition();
                if (definition && definition._id && Object.values(definitionsIds).includes(definition._id)) {
                    this.initBuilder();
                }

                return true;
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                return false;
            });
    }

    private bulkExportWorkflows(definitionsIds?: string[]): Promise<boolean>
    {
        if (! this.props.allowExport || typeof definitionsIds === "undefined" || definitionsIds.length === 0) {
            return Promise.resolve(false);
        }

        return API.post(`${PUBLIC_URL}/api/definitions/export`, { definitionsIds })
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

        window.open(`${PUBLIC_URL}/preview/${this.state.definition._id}`, "_blank")?.focus();
    }
    
    private run()
    {
        if (! this.state.definition || ! this.state.definition._id) {
            return;
        }

        window.open(`${PUBLIC_URL}/run/${this.state.definition._id}`, "_blank")?.focus();
    }

    private deleteWorkflow(definitionId?: string): Promise<boolean>
    {
        let oldDefinition = this.getDefinition();
        let oldDefinitionId = oldDefinition ? oldDefinition._id : undefined;

        if (! confirm("Are you sure you want to delete this workflow?")) {
            return Promise.resolve(false);
        }

        if (! definitionId && ! oldDefinitionId) {
            this.initBuilder();

            return Promise.resolve(false);
        }

        this.setState({ isLoading: true });

        return API.delete(`${PUBLIC_URL}/api/definition/${definitionId || oldDefinitionId}`)
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

        loadDefinitionById(definitionId)
            .then(definition => {
                this.initBuilder(definition);
            });
    }

    private loadWorkflows(): Promise<IDefinition[] | undefined>
    {
        let endpoint = `${PUBLIC_URL}/api/definitions`;
        let user = this.state.user;

        if (user && typeof user.tenantId === "string" && typeof user.id === "string") {
            endpoint = endpoint.concat(`/${user.tenantId}/${user.id}`);
        }

        return API.get(endpoint)
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

                return [undefined];
            });
    }
}

export default Editor;