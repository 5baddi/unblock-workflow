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
import { faPen, faQuestion } from "@fortawesome/free-solid-svg-icons";

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
            } as IDefinition
        };

        this.onChange = this.onChange.bind(this);
        this.editDefinitionProps = this.editDefinitionProps.bind(this);
        this.openTutorial = this.openTutorial.bind(this);
    }

    render()
    {
        return (
            <Grid container>
                <Grid item md={12} id={this.props.element}>
                    <div className="editor-menu">
                        <button onClick={this.editDefinitionProps}>
                            <FontAwesomeIcon icon={faPen}/>
                        </button>
                        <button onClick={this.openTutorial}>
                            <FontAwesomeIcon icon={faQuestion}/>
                        </button>
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

        let properties = this.mergeProperties(DEFAULT_EDITOR_PROPERTIES);
        let definition = await this.loadDefinitionById(this.props.definitionId);

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
            console.log("saving form definition");
        }

        let oldDefinition = localStorage.getItem(DEFINITION_KEY)
            ? JSON.parse(localStorage.getItem(DEFINITION_KEY) || "undefined")
            : Object.assign({} as IDefinition, {});

        if (typeof oldDefinition._id === "string") {
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
                console.log(error);
            });
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
                localStorage.setItem(DEFINITION_KEY, definition);

                this.setState({ definition });

                return Promise.resolve(definition);
            })
            .catch(error => {
                console.log(error);
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