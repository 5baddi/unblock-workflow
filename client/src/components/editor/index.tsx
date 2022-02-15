import * as React from "react";
import { connect } from "react-redux";
import { getDefinition } from "../../store/actions/definition";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition as TripettoDefinition } from "@tripetto/map";
import { IDefinition, IEditorProperties, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL, VERSION } from "../../settings";
import { DEFAULT_EDITOR_PROPERTIES, DEFINITION_KEY } from '../../global';
import API  from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash, faPlay } from "@fortawesome/free-solid-svg-icons";
import DefinitionsModal from "./definitions-modal";
import AlertModal from "./alert-modal";

import "./blocks";

import "./style.scss";

const BUILDER_VERSION = {
    "name": "unblock",
    "version": VERSION
};

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
        this.reSaveDefinition = this.reSaveDefinition.bind(this);
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
        this.open()
            .catch((error) => {
                if (ENV === "development") {
                    console.log(error);
                }
            });

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

    private beforeUnload(event)
    {
        let e = event || window.event;
        if (! e) {
            return;
        }

        let definition = this.getDefinition();
        if (definition && typeof definition._id === "string") {
            this.closeOpenedDefinition(definition);
        }

        setTimeout(() => {
            if (! definition) {
                return;
            }

            this.setDefinitionIsOpened(definition);
        }, 1000);

        if (typeof definition === "undefined") {
            return;
        }
        
        if (typeof definition !== "undefined" && definition.is_saved && typeof definition.name === "string" && definition.name !== "Unnamed") {
            return;
        }

        e.preventDefault();
       
        return e.returnValue = "Are you sure you want to close?";
    }

    private async open(): Promise<Builder | void>
    {
        if (ENV === "development") {
            console.log("opening the editor");
        }

        let definition = await this.loadDefinitionById(this.props.definitionId);

        return this.initBuilder(definition);
    }

    private initBuilder(definition?: IDefinition): Builder | void
    {
        if (typeof definition !== "undefined" && definition.is_opened === true) {
            this.setState({ showAlertModal: true });

            return this.editor;
        }

        this.clearTimer();

        if (typeof definition !== "undefined" && typeof definition._id === "string") {
            definition.is_opened = true;

            this.setDefinitionIsOpened(definition);
        }

        this.setDefinition(definition);

        let properties = this.mergeProperties(DEFAULT_EDITOR_PROPERTIES);

        this.editor = Builder.open(definition || this.props.definition, properties);
        this.editor.onChange = (definition: TripettoDefinition) => this.onChange(definition);

        this.startTimer();

        return this.editor;
    }

    private setDefinitionIsOpened(definition: IDefinition): void
    {
        API.post(`${PUBLIC_URL}/api/definitions`, { definition });

        let oldOpenedDefinition: IDefinition | undefined = this.getDefinition();
        if (oldOpenedDefinition && oldOpenedDefinition._id !== definition._id) {
            oldOpenedDefinition.is_opened = false;

            API.post(`${PUBLIC_URL}/api/definitions`, { definition: oldOpenedDefinition });
        }
    }
    
    private closeOpenedDefinition(definition: IDefinition): void
    {
        definition.is_opened = false;

        API.post(`${PUBLIC_URL}/api/definitions`, { definition });
    }

    private mergeProperties(config: IEditorProperties): IEditorProperties
    {
        let properties = Object.assign({}, JSON.parse(JSON.stringify(config)));
        properties.element = document.getElementById(this.props.element);

        return properties as IEditorProperties;
    }

    private async onChange(submitedDefinition: TripettoDefinition): Promise<void>
    {
        let definition = Object.assign({} as IDefinition, JSON.parse(JSON.stringify(submitedDefinition)));
        if (this.state.definition && typeof this.state.definition?._id === "string") {
            definition._id = this.state.definition._id;
        }

        definition.builder = BUILDER_VERSION;

        this.setDefinition(definition);

        if (typeof definition.clusters === "undefined") {
            return Promise.resolve();
        }

        if (ENV === "development") {
            console.log("saving workflow definition", definition);
        }

        await this.saveDefinition(definition)
            .catch((error) => {
                if (ENV === "development") {
                    console.log(error);
                }

                definition.is_saved = false;

                window.sessionStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));
            });
    }

    private async saveDefinition(definition: IDefinition): Promise<IDefinition | undefined>
    {
        return API.post(`${PUBLIC_URL}/api/definitions`, { definition })
            .then(response => {
                if (! response.data.definition) {
                    return Promise.resolve(undefined);
                }

                let definition = Object.assign({} as IDefinition, response.data.definition);

                this.setDefinition(definition);

                return Promise.resolve(definition);
            })
            .catch(error => {
                if (typeof this.timer === "undefined") {
                    this.startTimer();
                }
                
                Promise.reject(error);
            });
    }

    private setDefinition(definition?: IDefinition): void
    {
        this.setState({ definition });
    }

    private clearTimer()
    {
        if (typeof this.timer !== "undefined") {
            clearInterval(this.timer);
        }
    }
    
    private startTimer()
    {
        this.timer = setInterval(this.reSaveDefinition, 15000);
    }

    private getDefinition(): IDefinition | undefined
    {
        return this.state.definition || undefined;
    }

    private reSaveDefinition()
    {
        let definition = this.getDefinition();
        if (! definition || definition.is_saved) {
            return;
        }

        if (typeof definition.name === "undefined" && typeof definition.clusters === "undefined") {
            return;
        }

        if (definition.is_saved) {
            return;
        }

        if (ENV === "development") {
            console.log("re-send unsaved definition", definition);
        }

        this.saveDefinition(definition);
    }

    private onResize()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        if (ENV === "development") {
            console.log("resizing the editor");
        }

        this.editor.resize();
    }

    private async loadDefinitionById(definitionId?: string): Promise<IDefinition | undefined>
    {
        if (! definitionId) {
            return undefined;
        }

        return await API.get(`${PUBLIC_URL}/api/definitions/${definitionId}`)
            .then(response => {
                if (! response.data.definition) {
                    return Promise.resolve(undefined);
                }

                let definition: IDefinition = Object.assign({} as IDefinition, response.data.definition);

                return Promise.resolve(definition);
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                return Promise.reject(error);
            });
    }
    
    private createNewWorkflow()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.initBuilder();
        this.toggleModal();
    }

    private toggleModal()
    {
        this.setState({
            showModal: ! this.state.showModal
        })
    }

    private showDefinitionsModal()
    {
        this.setState({
            showModal: ! this.state.showModal
        })
    }

    private editDefinitionProps()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.editor?.edit("properties");
    }

    private openTutorial()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        this.editor?.tutorial();
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
        let oldDefinition = this.state.definition;
        let oldDefinitionId = oldDefinition ? oldDefinition._id : undefined;

        if (! confirm("Are you sure you want to delete this workflow?")) {
            return Promise.resolve(false);
        }

        if (! definitionId && ! oldDefinitionId) {
            this.initBuilder();

            return Promise.resolve(false);
        }

        return API.delete(`${PUBLIC_URL}/api/definitions/${definitionId || oldDefinitionId}`)
            .then(response => {
                if (! response.data.success) {
                    return false;
                }

                if (oldDefinitionId && oldDefinitionId === definitionId) {
                    this.toggleModal();
                }

                this.initBuilder();

                return true;
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                return false;
            });
    }

    private openWorkflow(definition?: IDefinition)
    {
        if (! definition || typeof this.editor === "undefined") {
            return;
        }

        this.initBuilder(definition);
        this.toggleModal();
    }
}


const mapStateToProps = (state) => ({
    definition: state.definition
});

const dispatchToProps = (dispatch) => ({
    getDefinition: () => dispatch(getDefinition())
});

export default connect(mapStateToProps, dispatchToProps)(Editor);