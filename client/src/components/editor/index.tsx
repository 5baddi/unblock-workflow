import * as React from "react";
import { connect } from "react-redux";
import { getDefinition } from "../../store/actions/definition";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition, IEditorProperties, IEditorProps, IEditorState } from "../../interfaces";
import { ENV, PUBLIC_URL } from "../../../../src/settings";
import {DEFAULT_EDITOR_PROPERTIES, DEFINITION_ID_KEY, USER_ID_KEY, DEFINITION_NAME_KEY} from "../../global";
import API  from "../../api";

import "./blocks";

import "./style.scss";
import {TextField} from "@material-ui/core";

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
        this.updateDefinitionName = this.updateDefinitionName.bind(this);
    }

    render()
    {
        return (
            <Grid container>
                <Grid container className="header">
                    <Grid item md={7} container justifyContent="start" alignItems="center">
                        <Grid item md={4}>
                            <TextField
                                variant="standard"
                                defaultValue={this.state.definition?.name}
                                onBlur={this.updateDefinitionName}
                                onChange={() => {}}
                            />
                        </Grid>
                    </Grid>
                    <Grid item md={5} container justifyContent="end" alignItems="center" className="header-actions">
                        {/*<HeaderButton label="Customize" hoverClassName="blue" children={<FiSliders/>}/>*/}
                        {/*<HeaderButton label="Share" hoverClassName="yellow" children={<FiShare/>}/>*/}
                        {/*<HeaderButton label="Automate" hoverClassName="green" children={<FiShare2/>}/>*/}
                        {/*<HeaderButton label="Results" hoverClassName="pink" children={<FiDownload/>}/>*/}
                    </Grid>
                </Grid>
                <Grid item md={12} id={this.props.element}></Grid>
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

        localStorage.removeItem(DEFINITION_ID_KEY);
        localStorage.removeItem(DEFINITION_NAME_KEY);
        localStorage.removeItem(USER_ID_KEY);

        let properties = this.mergeProperties(this.props.properties || DEFAULT_EDITOR_PROPERTIES);
        let definition = await this.loadDefinitionById(this.props.definitionId);

        this.editor = Builder.open(definition || this.props.definition, properties);

        this.editor.onSave = (definition: IDefinition) => this.onChange(definition);

        return this.editor;
    }

    private mergeProperties(config: IEditorProperties): IEditorProperties
    {
        let properties = Object.assign({}, JSON.parse(JSON.stringify(config)));
        properties.element = document.getElementById(this.props.element);

        // Force shows save button
        properties.disableSaveButton = false;

        return properties as IEditorProperties;
    }

    private async updateDefinitionName(e)
    {
        let oldName = localStorage.getItem(DEFINITION_NAME_KEY);
        let name = e.target.value;
        if (oldName === name) {
            return;
        }

        let definition = Object.assign({} as IDefinition, this.state.definition);
        definition.name = name;

        await API.post(`${PUBLIC_URL}/api/definition`, { definition })
            .then(response => {
                if (! response.data.definition) {
                    return;
                }

                localStorage.setItem(DEFINITION_ID_KEY, response.data.definition._id);
                localStorage.setItem(DEFINITION_NAME_KEY, response.data.definition.name);
                localStorage.setItem(USER_ID_KEY, response.data.definition.userId);

                this.setState({ definition: response.data.definition });
            })
            .catch(error => {
                console.log(error);
            });
    }

    private async onChange(definition: IDefinition)
    {
        if (ENV === "development") {
            console.log("saving form definition");
        }

        let definitionId = localStorage.getItem(DEFINITION_ID_KEY);
        let name = localStorage.getItem(DEFINITION_NAME_KEY) || "Unnamed";
        let userId = localStorage.getItem(USER_ID_KEY);

        if (definitionId && userId) {
            definition._id = definitionId;
            definition.userId = userId;
        }

        definition.name = name;

        await API.post(`${PUBLIC_URL}/api/definition`, { definition })
            .then(response => {
                if (! response.data.definition) {
                    return;
                }

                localStorage.setItem(DEFINITION_ID_KEY, response.data.definition._id);
                localStorage.setItem(USER_ID_KEY, response.data.definition.userId);

                this.setState({ definition: response.data.definition });
            })
            .catch(error => {
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
            return undefined;
        }

        return await API.get(`${PUBLIC_URL}/api/definition/${definitionId}`)
            .then(response => {
                if (! response.data.definition) {
                    return Promise.resolve(undefined);
                }

                let definition = Object.assign({} as IDefinition, response.data.definition);
                localStorage.setItem(DEFINITION_ID_KEY, definition._id);
                localStorage.setItem(DEFINITION_NAME_KEY, definition.name);
                localStorage.setItem(USER_ID_KEY, definition.userId);

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