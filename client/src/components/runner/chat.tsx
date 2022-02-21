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
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import { ENV } from "../../settings";

import "./style.scss";

const override = css`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export class ChatRunner extends React.Component<IRunnerProps, { definition?: IDefinition, isLoading: boolean, isFailed: boolean }>
{
    private style?: IChatStyles;

    constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.saveResult = this.saveResult.bind(this);

        this.state = {
            definition: undefined,
            isLoading: true,
            isFailed: false,
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
            <div style={{ width: "100%" }}>
                <PulseLoader color="#4B5565" css={override} size={15} margin={2} loading={this.state.isLoading}/>
                {
                    this.state.isLoading
                    ? undefined
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
                }
            </div>
        );
    }

    private applyStyle(): void
    {
        this.style = {
            display: "inline",
            autoFocus: true,
            noBranding: true,
            fonts: {
                family: "Inter",
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
        if (this.props.previewMode === true) {
            return;
        }

        let exportables = Export.exportables(instance);

        this.saveResult(exportables);
    }

    private async saveResult(exportables?: Export.IExportables): Promise<boolean>
    {
        let definitionId = this.state.definition?._id;
        if (! exportables || ! definitionId) {
            return Promise.resolve(false);
        }

        // this.setState({ isFailed: false, isLoading: true });
        this.setState({ isFailed: false });

        return API.post(`${PUBLIC_URL}/api/result/${definitionId}`, { fields: exportables.fields })
            .then(response => {
                if (! response.data.success) {
                    this.setState({ isFailed: true, isLoading: false });

                    return Promise.resolve(response.data.success);
                }

                this.setState({ isLoading: false });

                return Promise.resolve(response.data.success);
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                this.setState({ isFailed: true, isLoading: false });
            });
    }

    private loadDefinitionById(definitionId?: string): void
    {
        if (! definitionId) {
            return;
        }

        API.get(`${PUBLIC_URL}/api/definition/${definitionId}`)
            .then(response => {
                if (! response.data.definition) {
                    this.setState({ isLoading: false, isFailed: true });

                    return;
                }

                let definition = Object.assign({} as IDefinition, response.data.definition);

                this.setState({ definition, isLoading: false });
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                this.setState({ isLoading: false, isFailed: true });
            });
    }
}