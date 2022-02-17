import * as React from "react";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { IDefinition, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL } from "../../settings";
import { DEFINITION_KEY } from '../../global';
import API  from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash, faPlay } from "@fortawesome/free-solid-svg-icons";
import DefinitionsModal from "./definitions-modal";
import Loader from "../loader";
import { parseDefinition, saveDefinition, loadDefinitionById, metaFieldsHasChanged } from "../../services/definition";
import { mergeProperties } from "../../services/builder";
import { sleep } from "../../helpers";

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
            showModal: false,
            workspace: undefined
        };

        this.onChange = this.onChange.bind(this);
        this.setDefinition = this.setDefinition.bind(this);
        this.editDefinitionProps = this.editDefinitionProps.bind(this);
        this.openTutorial = this.openTutorial.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.showDefinitionsModal = this.showDefinitionsModal.bind(this);
        this.createNewWorkflow = this.createNewWorkflow.bind(this);
        this.deleteWorkflow = this.deleteWorkflow.bind(this);
        this.openWorkflow = this.openWorkflow.bind(this);
        this.initBuilder = this.initBuilder.bind(this);
        this.beforeUnload = this.beforeUnload.bind(this);
        this.onResize = this.onResize.bind(this);
        this.bulkDeleteWorkflows = this.bulkDeleteWorkflows.bind(this);
        this.runDefinition = this.runDefinition.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);

        console.log(this.props.user);
    }

    render()
    {
        return (
            <Grid container>
                <Loader isLoading={this.state.isLoading}/>
                <Grid item md={12} id={this.props.element}>
                    <div className="editor-menu">
                        <button onClick={this.showDefinitionsModal}>
                            <img src={`${PUBLIC_URL}/logo.png`} />
                        </button>
                        <button onClick={this.editDefinitionProps}>
                            <FontAwesomeIcon icon={faPen}/>
                        </button>
                        {
                            this.state.definition && this.state.definition._id
                            ? (
                                <button onClick={this.runDefinition}>
                                    <FontAwesomeIcon icon={faPlay}/>
                                </button>
                            )
                            : undefined
                        }
                        <button onClick={() => this.deleteWorkflow()}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                        <button onClick={this.openTutorial}>
                            <FontAwesomeIcon icon={faQuestion}/>
                        </button>
                        <DefinitionsModal currentOpenedDefinition={this.state.definition?._id}
                                          show={this.state.showModal} 
                                          onHide={this.toggleModal}
                                          createNewWorkflow={this.createNewWorkflow}
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
        this.open();

        window.addEventListener("resize", this.onResize);
        window.addEventListener("orientationchange",  this.onResize);
        window.addEventListener("beforeunload", this.beforeUnload);
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

    editDefinitionProps()
    {
        this.editor?.edit("properties");
    }

    showDefinitionsModal()
    {
        this.setState({
            showModal: ! this.state.showModal
        })
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
        }
    }

    startTimer()
    {
        this.timer = setInterval(() => {
            let definition: IDefinition | undefined = this.getDefinition();

            if (! definition || definition.is_saved) {
                return;
            }
            
            if (ENV === "development") {
                console.log("re-send unsaved definition", definition);
            }

            saveDefinition(definition);
        }, 15000);
    }

    async open(): Promise<Builder | void>
    {
        if (ENV === "development") {
            console.log("opening the editor");
        }

        this.setState({ isLoading: true });

        let definition = await loadDefinitionById(this.props.definitionId);

        if (this.props.glue) {
            this.setState({
                workspace: await this.props.glue.workspaces?.getMyWorkspace()
            });

            if (definition) {
                const currentContext = await this.state.workspace?.getContext();
                await this.state.workspace?.updateContext({
                    ...currentContext,
                    workflow: {
                        id: definition._id,
                        action: "open"
                    } 
                });
            }
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

        // Prevent dispatch on change hook
        this.editor.onChange = () => {};

        this.editor.open(definition);
        this.editor.onReady = () => this.ready();

        return this.editor;
    }

    ready()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.editor.onChange = (definition: TripettoDefinition) => this.onChange(definition);
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
        let definition = parseDefinition(submittedDefinition);

        if (ENV === "development") {
            console.log("definition has been changed", definition);
        }

        let currentDefinition = this.getDefinition();
        if (currentDefinition && typeof currentDefinition?._id === "string") {
            definition._id = currentDefinition._id;

            const currentContext = await this.state.workspace?.getContext();
            await this.state.workspace?.updateContext({
                ...currentContext,
                workflow: {
                    id: definition._id,
                    action: "change"
                } 
            });
        }

        if (currentDefinition && typeof currentDefinition?.hash === "string") {
            definition.hash = currentDefinition.hash;
        }

        if (typeof definition.clusters === "undefined" || metaFieldsHasChanged(definition, currentDefinition)) {
            this.setDefinition(definition);

            await sleep(5000);

            return Promise.resolve();
        }

        await saveDefinition(definition)
            .then((definition) => {
                this.setDefinition(definition);
            })
            .catch((error) => {
                definition.is_saved = false;

                this.setDefinition(definition);
                window.sessionStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

                if (typeof error.response !== "undefined" && error.response.status === 409) {
                    alert("Form mis-match with our records! please make sure to reload the page");

                    return;
                }

                if (typeof this.timer === "undefined") {
                    this.startTimer();
                }
            });

        return Promise.resolve();
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

    private runDefinition()
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