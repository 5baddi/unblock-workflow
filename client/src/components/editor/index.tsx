import * as React from "react";
import { connect } from "react-redux";
import { getDefinition } from "../../store/actions/definition";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition, IEditorProperties, IEditorProps, IEditorState } from "../../interfaces";
import { ENV } from "../../../../src/settings";
import { DEFAULT_EDITOR_PROPERTIES, DEFINITION_ID_KEY, USER_ID_KEY, DEFINITION_NAME_KEY } from "../../global";
import API  from "../../api";

import "./blocks";

import "./style.scss";

class Editor extends React.Component<IEditorProps, IEditorState>
{
    private editor?: Builder;

    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <Grid item md={12} id={this.props.element}></Grid>
        );
    }

    componentDidMount()
    {
        this.open()
            .resize();

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

    private open(): Builder
    {
        if (ENV === "development") {
            console.log("opening the editor");
        }

        localStorage.removeItem(DEFINITION_ID_KEY);
        localStorage.removeItem(DEFINITION_NAME_KEY);
        localStorage.removeItem(USER_ID_KEY);

        let properties = this.mergeProperties(this.props.properties || DEFAULT_EDITOR_PROPERTIES);

        this.editor = Builder.open(this.props.definition, properties);

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

    private async onChange(definition: IDefinition)
    {
        if (ENV === "development") {
            console.log("saving form definition");
        }

        let definitionId = localStorage.getItem(DEFINITION_ID_KEY);
        let userId = localStorage.getItem(USER_ID_KEY);

        if (definitionId && userId) {
            definition._id = definitionId;
            definition.userId = userId;
        }

        await API.post("definition", { definition })
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
}


const mapStateToProps = (state) => ({
    definition: state.definition
});

const dispatchToProps = (dispatch) => ({
    getDefinition: () => dispatch(getDefinition())
});

export default connect(mapStateToProps, dispatchToProps)(Editor);