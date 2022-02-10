import * as React from "react";
import { connect } from "react-redux";
import { getDefinition } from "../../store/actions/definition";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition, IEditorProperties, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL } from "../../../../src/settings";
import { DEFAULT_EDITOR_PROPERTIES, DEFINITION_KEY } from "../../global";
import API  from "../../api";
import { loadDefaultDefinition } from "../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQuestion, faTrash } from "@fortawesome/free-solid-svg-icons";
import DefinitionsModal from "./definitions-modal";

import "./blocks";

import "./style.scss";

class Editor extends React.Component<IEditorProps, IEditorState>
{
    private editor?: Builder;

    constructor(props) {
        super(props);

        this.state = {
            definition: {
                name: "Unnamed"
            } as IDefinition,
            showModal: false
        };

        this.onChange = this.onChange.bind(this);
        this.editDefinitionProps = this.editDefinitionProps.bind(this);
        this.openTutorial = this.openTutorial.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.showDefinitionsModal = this.showDefinitionsModal.bind(this);
        this.createNewWorkflow = this.createNewWorkflow.bind(this);
        this.deleteWorkflow = this.deleteWorkflow.bind(this);
        this.openWorkflow = this.openWorkflow.bind(this);
        this.initBuilder = this.initBuilder.bind(this);
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
                        <button onClick={() => this.deleteWorkflow()}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                        <button onClick={this.openTutorial}>
                            <FontAwesomeIcon icon={faQuestion}/>
                        </button>
                        <DefinitionsModal show={this.state.showModal} 
                                          onHide={this.toggleModal}
                                          createNewWorkflow={this.createNewWorkflow}
                                          deleteWorkflow={this.deleteWorkflow}
                                          openWorkflow={this.openWorkflow}/>
                    </div>
                </Grid>

            </Grid>
        );
    }

    componentDidMount()
    {
        this.open()
            .catch((error) => console.log(error));

        if (typeof this.editor === "undefined") {
            return;
        }

        window.addEventListener("resize", this.onResize);
        window.addEventListener("orientationchange",  this.onResize);
    }

    componentWillUnmount()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        window.removeEventListener("resize", this.onResize);
        window.removeEventListener("orientationchange", this.onResize);
    }

    private async open(): Promise<Builder>
    {
        if (ENV === "development") {
            console.log("opening the editor");
        }

        let definition = await this.loadDefinitionById(this.props.definitionId);

        return this.initBuilder(definition);
    }

    private initBuilder(definition?: IDefinition): Builder
    {
        let properties = this.mergeProperties(DEFAULT_EDITOR_PROPERTIES);

        this.editor = Builder.open(definition || this.props.definition, properties);
        this.editor.onChange = (definition: IDefinition) => this.onChange(definition);

        return this.editor;
    }

    private mergeProperties(config: IEditorProperties): IEditorProperties
    {
        let properties = Object.assign({}, JSON.parse(JSON.stringify(config)));
        properties.element = document.getElementById(this.props.element);

        return properties as IEditorProperties;
    }

    private async onChange(definition: IDefinition)
    {
        if (ENV === "development") {
            console.log("saving workflow definition");
        }

        let oldDefinition = localStorage.getItem(DEFINITION_KEY)
            ? JSON.parse(localStorage.getItem(DEFINITION_KEY) || "undefined")
            : undefined;

        if (typeof definition.clusters === "undefined" && (typeof oldDefinition === "undefined" || typeof oldDefinition.clusters === "undefined")) {
            localStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

            return;
        }

        if (oldDefinition && typeof oldDefinition._id === "string") {
            definition._id = oldDefinition._id;
        }

        await API.post(`${PUBLIC_URL}/api/definition`, { definition })
            .then(response => {
                if (! response.data.definition) {
                    return;
                }

                localStorage.setItem(DEFINITION_KEY, JSON.stringify(response.data.definition));

                this.setState({ definition: response.data.definition });
            })
            .catch(error => {
                localStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

                console.log(error);
            });
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
            return loadDefaultDefinition();
        }

        return await API.get(`${PUBLIC_URL}/api/definition/${definitionId}`)
            .then(response => {
                if (! response.data.definition) {
                    return Promise.resolve(undefined);
                }

                let definition = Object.assign({} as IDefinition, response.data.definition);
                localStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

                this.setState({ definition });

                return Promise.resolve(definition);
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    private createNewWorkflow()
    {
        if (typeof this.editor === "undefined") {
            return;
        }

        localStorage.removeItem(DEFINITION_KEY)
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

    private deleteWorkflow(definitionId?: string): Promise<boolean>
    {
        let oldDefinition = localStorage.getItem(DEFINITION_KEY)
            ? JSON.parse(localStorage.getItem(DEFINITION_KEY) || "undefined")
            : undefined;

        if (! definitionId && (! oldDefinition || typeof oldDefinition._id !== "string")) {
            return Promise.resolve(false);
        }

        if (! confirm("Are you sure you want to delete this workflow?")) {
            return Promise.resolve(false);
        }

        return API.delete(`${PUBLIC_URL}/api/definition/${definitionId || oldDefinition._id}`)
            .then(response => {
                if (! response.data.success) {
                    return false;
                }

                if (oldDefinition && oldDefinition._id === definitionId) {
                    this.toggleModal();
                }

                localStorage.removeItem(DEFINITION_KEY);
                this.initBuilder();

                return true;
            })
            .catch(error => {
                console.log(error);

                return false;
            });
    }

    private openWorkflow(definition?: IDefinition)
    {
        if (! definition || typeof this.editor === "undefined") {
            return;
        }

        localStorage.setItem(DEFINITION_KEY, JSON.stringify(definition));

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