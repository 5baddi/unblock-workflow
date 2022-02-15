import * as React from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { IDefinition, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL } from "../../settings";
import { DEFINITION_KEY } from '../../global';
import { getDefinition } from "../../store/actions/definition";
import API  from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash, faPlay } from "@fortawesome/free-solid-svg-icons";
import DefinitionsModal from "./definitions-modal";
import AlertModal from "./alert-modal";
import Loader from "../loader";

import { parseDefinition, saveDefinition, loadDefinitionById } from "../../services/definition";
import { mergeProperties } from "../../services/builder";

import "./blocks";

import "./style.scss";

class Editor extends React.Component<IEditorProps, IEditorState>
{
    private editor?: Builder;
    private timer?;

    constructor(props) {
        super(props);

        this.state = {
            definition: {
                name: "Unnamed"
            } as IDefinition,
            isLoading: true,
            showModal: false,
            showAlertModal: false
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
                        <AlertModal show={this.state.showAlertModal}
                                    onHide={() => { this.setState({ showAlertModal: false }) }}/>
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
        if (definition && typeof definition._id === "string") {
            definition.is_opened = false;

            await saveDefinition(definition);
        }

        setTimeout(async () => {
            if (! definition) {
                return;
            }

            definition.is_opened = true;

            await saveDefinition(definition)
                .then((definition) => this.setDefinition(definition));
        }, 2000);

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

        return this.initBuilder(definition);
    }

    async initBuilder(definition?: IDefinition): Promise<Builder | void>
    {
        if (typeof definition !== "undefined" && definition.is_opened === true) {
            this.setState({ showAlertModal: true, isLoading: false });

            return Promise.resolve();
        }

        this.editor?.close();

        this.clearTimer();

        if (typeof definition !== "undefined" && typeof definition._id === "string") {
            definition.is_opened = true;

            await saveDefinition(definition);

            let oldOpenedDefinition: IDefinition | undefined = this.getDefinition();

            if (oldOpenedDefinition && oldOpenedDefinition._id !== definition._id) {
                oldOpenedDefinition.is_opened = false;

                await saveDefinition(oldOpenedDefinition);
            }
        }

        this.setDefinition(definition);

        let properties = mergeProperties(this.props.element);

        this.editor = new Builder(properties);
        this.editor.open(definition || this.props.definition);
        this.editor.onReady = () => this.ready();

        this.setState({ isLoading: false });

        return this.editor;
    }

    private ready()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.editor.onChange = (definition: TripettoDefinition) => this.onChange(definition);
        this.editor.onClose = () => this.onClose();
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

        if (this.state.definition && typeof this.state.definition?._id === "string") {
            definition._id = this.state.definition._id;
            definition.is_opened = this.state.definition.is_opened;
        }

        this.setDefinition(definition);

        if (typeof definition.clusters === "undefined") {
            return Promise.resolve();
        }

        await saveDefinition(definition)
            .then((definition) => {
                this.setDefinition(definition);
            })
            .catch((error) => {
                definition.is_saved = false;

                window.sessionStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

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

        let oldOpenedDefinition: IDefinition | undefined = this.getDefinition();
        if (oldOpenedDefinition && oldOpenedDefinition._id) {
            oldOpenedDefinition.is_opened = false;

            await saveDefinition(oldOpenedDefinition);
        }

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
}

const mapStateToProps = (state) => ({
    definition: state.definition
});
const dispatchToProps = (dispatch) => ({
    getDefinition: () => dispatch(getDefinition())
});

export default connect(mapStateToProps, dispatchToProps)(Editor);