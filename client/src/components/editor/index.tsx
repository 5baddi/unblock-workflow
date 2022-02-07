import * as React from "react";
import { connect } from "react-redux";
import { getDefinition } from "../../store/actions/definition";
import { Grid } from "@mui/material";
import { Builder } from "tripetto";
import { IDefinition, IEditorProperties, IEditorProps, IEditorState } from "../../interfaces";
import { ENV } from "../../../../src/settings";
import { DEFAULT_EDITOR_PROPERTIES, DEFINITION_KEY } from "../../global";
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

        let properties = this.mergeProperties(this.props.properties || DEFAULT_EDITOR_PROPERTIES);

        this.editor = Builder.open(this.props.definition, properties);

        this.editor.onChange = (definition: IDefinition) => this.onChange(definition);
        this.editor.onSave = (definition: IDefinition) => this.onChange(definition);

        return this.editor;
    }

    private updateEditorDefinition(definition: IDefinition): Builder | undefined
    {
        if (ENV === "development") {
            console.log("updating the editor definition");
        }

        if (this.editor) {
            this.editor.definition = definition;
            this.setState({ definition });
        }

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

        await API.post("definition", { definition })
            .then(response => {
                if (! response.data.definition) {
                    return;
                }

                localStorage.setItem(DEFINITION_KEY, JSON.stringify(response.data.definition));

                this.updateEditorDefinition(response.data.definition);
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