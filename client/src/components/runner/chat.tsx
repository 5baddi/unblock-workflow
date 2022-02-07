import * as React from "react";
import { Navigate } from "react-router-dom";
import { IRunnerProps } from "../../interfaces";
import { ChatRunner as TripettoChatRunner } from "tripetto-runner-chat";
import { Export } from "tripetto-runner-foundation";
import { IDefinition } from "../../interfaces";
import { Instance } from "tripetto-collector";
import { loadDefaultDefinition } from "../../helpers";

export class ChatRunner extends React.Component<IRunnerProps>
{
    readonly definition: IDefinition;

    constructor(props)
    {
        super(props);

        this.definition = loadDefaultDefinition();
    }

    render()
    {
        if (! this.props.definitionId || ! this.definition) {
            return (<Navigate to="/404"/>);
        }

        return (
            <TripettoChatRunner
                definition={this.definition}
                onSubmit={this.onSubmit}
            />
        );
    }

    private onSubmit(instance: Instance): void
    {
        // Implement your response handler here.

        // For this example we output all exportable fields to the browser console
        console.dir(Export.exportables(instance));

        // Or output the data in CSV-format
        console.dir(Export.CSV(instance));
    }
}