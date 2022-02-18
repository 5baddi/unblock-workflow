import * as React from "react";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { IDefinition, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL } from "../../settings";
import { DEFINITION_KEY } from '../../global';
import API  from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash, faPlay, faSave, faSpinner } from "@fortawesome/free-solid-svg-icons";
import DefinitionsModal from "./definitions-modal";
import Loader from "../loader";
import { parseDefinition, saveDefinition, loadDefinitionById, metaFieldsHasChanged, exportDefinitionAsJsonFile } from "../../services/definition";
import { mergeProperties } from "../../services/builder";
import { loadDefaultDefinition, sleep } from "../../helpers";
import { Modal } from "../modal";

import "./blocks";

import "./style.scss";

const DEFAULT_NAME = "Unnamed";

class Editor extends React.Component<IEditorProps, IEditorState>
{
    private editor?: Builder;
    private timer?;

    constructor(props) {
        super(props);

        this.state = {
            definition: { name: DEFAULT_NAME } as IDefinition,
            isLoading: true,
            isSaving: false,
            definitionChanged: false,
            showModal: false,
            workspace: undefined,
            user: undefined,
        };

        this.onResize = this.onResize.bind(this);
        this.beforeUnload = this.beforeUnload.bind(this);
        this.openWorkflow = this.openWorkflow.bind(this);
        this.deleteWorkflow = this.deleteWorkflow.bind(this);
        this.bulkDeleteWorkflows = this.bulkDeleteWorkflows.bind(this);
    }

    render()
    {
        return (
            <Grid container>
                <Loader isLoading={this.state.isLoading}/>
                <Modal show={this.state.showModal} onHide={() => this.toggleModal()}/>
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
                        <DefinitionsModal currentOpenedDefinition={this.state.definition?._id}
                                          show={this.state.showModal} 
                                          onHide={() => this.toggleModal()}
                                          createNewWorkflow={() => this.createNewWorkflow()}
                                          deleteWorkflow={this.deleteWorkflow}
                                          openWorkflow={this.openWorkflow}
                                          bulkDeleteWorkflows={this.bulkDeleteWorkflows}/>
                    </div>
                </Grid>

            </Grid>
        );
    }

    componentDidMount()
    {
        this.getGlueWorkspace();
        this.getAuthenticatedUser();

        this.open();

        console.log(this.state.user);

        window.addEventListener("resize", this.onResize);
        window.addEventListener("orientationchange",  this.onResize);
        window.addEventListener("beforeunload", this.beforeUnload);
    }

    componentDidUpdate()
    {
        this.getGlueWorkspace();
        this.getAuthenticatedUser();
    }

    componentWillUnmount()
    {
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
        
        if (typeof definition !== "undefined" && definition.is_saved && typeof definition.name === "string" && definition.name !== "Unnamed") {
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

        this.setState({
            workspace: await this.props.glue.workspaces?.getMyWorkspace()
        });
    }
    
    async getAuthenticatedUser()
    {
        if (! this.props.glue) {
            return;
        }

        const currentContext = await this.state.workspace.getContext();
        this.setState({ user: currentContext.user || undefined });
    }

    async open(): Promise<Builder | void>
    {
        if (ENV === "development") {
            console.log("opening the editor");
        }

        this.setState({ isLoading: true });

        let definition = await loadDefinitionById(this.props.definitionId);
        if (typeof definition === "undefined") {
            definition = loadDefaultDefinition();
        }


        if (definition && this.state.workspace) {
            const currentContext = await this.state.workspace.getContext();

            await this.state.workspace.updateContext({
                ...currentContext,
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

        window.sessionStorage.removeItem(DEFINITION_KEY);

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
        let definition = parseDefinition(submittedDefinition, this.state.user);
        this.setDefinition(definition);

        if (this.state.definitionChanged) {
            return Promise.resolve();
        }

        this.setState({ isSaving: true, definitionChanged: true });

        if (ENV === "development") {
            console.log("definition has been changed", definition);
        }

        let currentDefinition = this.getDefinition();
        if (currentDefinition && typeof currentDefinition?._id === "string") {
            definition._id = currentDefinition._id;

            if (this.state.workspace) {
                const currentContext = await this.state.workspace.getContext();
    
                await this.state.workspace.updateContext({
                    ...currentContext,
                    workflow: {
                        id: definition._id,
                        action: "change"
                    } 
                });
            }
        }

        if (currentDefinition && typeof currentDefinition?.hash === "string") {
            definition.hash = currentDefinition.hash;
        }

        if (typeof definition.clusters === "undefined" || metaFieldsHasChanged(definition, currentDefinition)) {
            await sleep(5000);
        }

        await sleep(5000);

        if (typeof this.timer === "undefined") {
            this.startTimer();
        }

        this.setState({ isSaving: false });

        return Promise.resolve();
    }

    private onSuccessfulSaving(definition?: IDefinition): void
    {
        this.setDefinition(definition);
        this.setState({ isSaving: false, definitionChanged: false });

        if (typeof this.timer !== "undefined") {
            this.clearTimer();
        }
    }

    private onFailedSaving(error: any, definition?: IDefinition): void
    {
        if (typeof definition !== "undefined") {
            definition.is_saved = false;
        }

        this.setDefinition(definition);
        this.setState({ isSaving: false, definitionChanged: false });
        window.sessionStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

        if (typeof error.response !== "undefined" && error.response.status === 409) {
            alert("The form you're currently editing is not the latest version. Please refresh your page to access it.");

            return;
        }
        
        if (typeof error.response !== "undefined" && error.response.status === 505) {
            alert("A new update has been released. Please refresh your page to continue editing your form.");

            return;
        }

        if (typeof this.timer === "undefined") {
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

        return API.delete(`${PUBLIC_URL}/api/definitions/${definitionId || oldDefinitionId}`)
            .then(response => {
                if (! response.data.success) {
                    return false;
                }

                if (oldDefinitionId && oldDefinitionId === definitionId) {
                    this.toggleModal();
                }

                if (oldDefinitionId && ! definitionId) {
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
}

export default Editor;