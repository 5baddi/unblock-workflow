import * as React from "react";
import { Navigate } from "react-router-dom";
import { IRunnerProps } from "../../interfaces";
import { ChatRunner as TripettoChatRunner } from "tripetto-runner-chat";
import { Export } from "tripetto-runner-foundation";
import { IDefinition } from "../../interfaces";
import { Instance } from "tripetto-collector";
import API from "../../api";
import { PUBLIC_URL } from "../../../../src/settings";
import { IChatStyles } from "tripetto-runner-chat/interfaces/styles";

import "./style.scss";

export class ChatRunner extends React.Component<IRunnerProps, { definition?: IDefinition, isLoading: boolean }>
{
    private style?: IChatStyles;

    constructor(props)
    {
        super(props);

        this.state = {
            definition: undefined,
            isLoading: true
        };

        this.applyStyle();
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
                            display="inline"
                            definition={this.state.definition}
                            onSubmit={this.onSubmit}
                            styles={this.style}
                        />
                        : <Navigate to="/404"/>
                )
        );
    }

    private applyStyle(): void
    {
        this.style = {
            display: "inline",
            autoFocus: true,
            noBranding: true,
            fonts: {
                family: "inter",
                size : 16,
                sizeSmall : 14,
            },
            background: {
                color: "white"
            },
            avatar: {
                type: "image",
                image: `${PUBLIC_URL}/logo.jpg`,
            },
            questions: {
                alignment: "left",
                roundness: 8,
                backgroundColor: "#F9FAFB",
                textColor: "#101828",
            },
            answers: {
                alignment: "right",
                roundness: 8,
                backgroundColor: "#4B5565",
                textColor: "white",
            },
            inputs: {
                backgroundColor: "white",
                borderColor: "#D0D5DD",
                borderSize: 1,
                roundness: 8,
                textColor: "#667085",
                errorColor: "#F04438",
                selectionColor: "#667085",
                agreeColor: "#12B76A",
                declineColor: "#F04438",
            },
            buttons: {
                textColor: "white",
                baseColor: "#4B5565",
                mode: "fill",
                roundness: 8,
            }
        } as IChatStyles;
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