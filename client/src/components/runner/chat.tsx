import * as React from "react";
import { Navigate } from "react-router-dom";
import { IRunnerProps } from "../../interfaces";
import { ChatRunner as TripettoChatRunner } from "tripetto-runner-chat";
import { Export } from "tripetto-runner-foundation";
import { IDefinition } from "../../interfaces";
import { Instance } from "tripetto-collector";
import { loadDefaultDefinition } from "../../helpers";
import API from "../../api";
import {PUBLIC_URL} from "../../../../src/settings";
import {DEFINITION_ID_KEY, DEFINITION_NAME_KEY, USER_ID_KEY} from "../../global";

export class ChatRunner extends React.Component<IRunnerProps, { definition?: IDefinition, isLoading: boolean }>
{
    constructor(props)
    {
        super(props);

        this.state = {
            definition: undefined,
            isLoading: true
        };

        this.loadDefinitionById(this.props.definitionId);
    }

    render()
    {
        if (! this.props.definitionId) {
            return (<Navigate to="/404"/>);
        }

        return (
            this.state.isLoading
                ? <h4>Loading...</h4>
                : (
                    this.state.definition
                        ? <TripettoChatRunner
                            definition={this.state.definition}
                            onSubmit={this.onSubmit}
                        />
                        : <Navigate to="/404"/>
                )
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

    private loadDefinitionById(definitionId?: string): void
    {
        if (! definitionId) {
            return;
        }

        API.get(`${PUBLIC_URL}/api/definition/${definitionId}`)
            .then(response => {
                if (! response.data.definition) {
                    return;
                }

                let definition = Object.assign({} as IDefinition, response.data.definition);

                this.setState({ definition, isLoading: false });
            })
            .catch(error => {
                console.log(error);
            });
    }
}