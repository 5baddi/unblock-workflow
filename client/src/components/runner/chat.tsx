import * as React from "react";
import { Navigate } from "react-router-dom";
import { IRunnerProps } from "../../interfaces";
import { ChatRunner as TripettoChatRunner } from "tripetto-runner-chat";
import { Export } from "tripetto-runner-foundation";
import { IDefinition } from "../../interfaces";
import { Instance } from "tripetto-collector";
import { loadDefaultDefinition } from "../../helpers";
import API from "../../api";

export class ChatRunner extends React.Component<IRunnerProps, { definition: undefined }>
{
    readonly definition: IDefinition;

    constructor(props)
    {
        super(props);

        this.state = {
            definition: undefined
        };

        this.definition = loadDefaultDefinition();
    }

    componentDidMount()
    {
        this.fetchDefinition();
    }

    render()
    {
        if (! this.props.definitionId || ! this.state.definition) {
            return (<Navigate to="/404"/>);
        }

        return (
            <TripettoChatRunner
                definition={this.state.definition}
                onSubmit={this.onSubmit}
            />
        );
    }

    private onSubmit(instance: Instance): void
    {
        console.log(this.state.definition);
        // Implement your response handler here.

        // For this example we output all exportable fields to the browser console
        console.dir(Export.exportables(instance));

        // Or output the data in CSV-format
        console.dir(Export.CSV(instance));
    }

    private fetchDefinition()
    {
        API.get(`definition/${this.props.definitionId}`)
            .then(response => {
                if (! response.data.definition) {
                    return;
                }

                this.setState({
                    definition: response.data.definition
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
}