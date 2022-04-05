import * as React from "react";
import { Navigate } from "react-router-dom";
import { IChatRunnerProps, IChatRunnerState } from "../../interfaces";
import { run } from "../../runners/chat";
import { Export } from "tripetto-runner-foundation";
import { IDefinition } from "../../interfaces";
import { Instance } from "tripetto-collector";
import API from "../../api";
import { PUBLIC_URL } from "../../../../src/settings";
import { IChatStyles } from "../../runners/chat/interfaces/styles";
import Loader from "../loader";
import { ENV } from "../../settings";
import { APPS_GROUP_ID } from '../../global';
import { Glue42Workspaces } from "@glue42/workspaces-api";

import "./style.scss";

export class ChatRunner extends React.Component<IChatRunnerProps, IChatRunnerState>
{
    private style?: IChatStyles;

    private exportables?: Export.IExportables; 

    private _isMounted: boolean = false;

    public set isMounted(status: boolean) {
        this._isMounted = status;
    }

    public get isMounted() {
        return this._isMounted;
    }

    constructor(props)
    {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onAction = this.onAction.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.saveResult = this.saveResult.bind(this);

        this.state = {
            definition: undefined,
            isLoading: true,
            isFailed: false,
            glueWorkspace: undefined,
            glueContext: undefined
        };
    }

    render()
    {
        if (! this.props.definitionId) {
            return (<Navigate to="/404"/>);
        }

        return (
            <div style={{ width: "100%" }}>
                <Loader isLoading={this.state.isLoading} mode="inline"/>
                <div id="chat-runner" style={ { display: this.state.isLoading ? "none" : "" } }></div>
            </div>
        );
    }

    componentDidMount()
    {
        this.isMounted = true;
        this.isMounted && this.open();
    }

    componentWillUnmount()
    {
        this.isMounted = false;
        this.closeAppsGroup();
    }

    async open()
    {
        await this.getGlueWorkspace();
        await this.loadDefinitionById(this.props.definitionId);

        this.applyStyle();
        run({
            element: document.getElementById("chat-runner"),
            styles: this.style,
            display: "inline",
            definition: this.state.definition,
            onSubmit: this.onSubmit,
            onChange: this.onChange,
            onAction: this.onAction,
            onComplete: this.onComplete,
            user: this.props.user,
            glue: this.props.glue,
        });
    }

    async getGlueWorkspace()
    {
        if (! this.props.glue) {
            return;
        }

        let glueWorkspace: Glue42Workspaces.Workspace | undefined = await this.props.glue.workspaces?.getMyWorkspace();
        let glueContext: any = await glueWorkspace?.getContext();

        this.setState({ glueWorkspace, glueContext });

        window.sessionStorage.removeItem(APPS_GROUP_ID);
    }

    private async closeAppsGroup(): Promise<void>
    {
        try {
            let groupId = window.sessionStorage.getItem(APPS_GROUP_ID);

            if (typeof groupId === "string" && groupId !== "" && typeof this.props.glue !== "undefined") {
                let glueWorkspace: Glue42Workspaces.Workspace | undefined = await this.props.glue.workspaces?.getMyWorkspace();

                if (typeof glueWorkspace !== "undefined") {
                    let groups: Glue42Workspaces.Group[] = glueWorkspace.getAllGroups();

                    let group: Glue42Workspaces.Group | undefined = groups.find((group) => group.id === groupId);
        
                    if (typeof group !== "undefined") {
                        await Promise.all(
                            await group.children.map(async(child: any) => {
                                await child.close();
                            })
                        );
                    }
                }
            }
        } catch (e) {
            if (ENV === "development") {
                console.log(e);
            }
        }

        window.sessionStorage.removeItem(APPS_GROUP_ID);
    }

    private getTenantId(): string
    {
        if (typeof this.props.tenantId === "string") {
            return this.props.tenantId;
        }

        if (! this.props.user || ! this.props.user.tenantId) {
            return "";
        }

        return this.props.user.tenantId.replace(/[^\w]/g, "");
    }

    private applyStyle(): void
    {
        this.style = {
            color: "#101828",
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
            },
            radiobuttons: {
                backgroundColor: "#F9FAFB",
                textColor: "#101828",
            },
            checkboxes: {
                backgroundColor: "#F9FAFB",
                textColor: "#101828",
            },
            matrix: {
                backgroundColor: "#F9FAFB",
                textColor: "#101828",
            }
        } as IChatStyles;
    }

    private async onSubmit(instance: Instance, language: string, locale: string, namespace?: string): Promise<undefined>
    {
        if (this.props.previewMode === true) {
            return undefined;
        }

        let exportables = Export.exportables(instance);

        if (ENV === "development") {
            console.log(exportables);

            return;
        }

        await this.saveResult(exportables);

        await this.closeAppsGroup();

        return undefined;
    }

    private onChange(instance: Instance): void
    {
        this.exportables = Export.exportables(instance);
    }
    
    private async onComplete(instance, id?: string): Promise<void>
    {
        await this.closeAppsGroup();
    }

    private async onAction(type, definition, block?: { readonly id: string; readonly name: string; }): Promise<void>
    {
        if (type !== "unstage") {
            return;
        }

        if (this.props.previewMode === true) {
            return;
        }

        if (ENV === "development") {
            console.log(this.exportables);

            return;
        }

        this.sendDataToWebhooks(this.exportables);
    }

    private async sendDataToWebhooks(exportables?: Export.IExportables): Promise<boolean>
    {
        let definitionId = this.state.definition?._id;
        if (! exportables || ! definitionId) {
            return Promise.resolve(false);
        }

        if (! exportables.fields || exportables.fields.length === 0) {
            return Promise.resolve(false);
        }

        return API.post(`${PUBLIC_URL}/api/webhooks/runner/${definitionId}/${this.getTenantId()}`, { fields: exportables.fields });
    }
    
    private async saveResult(exportables?: Export.IExportables): Promise<boolean>
    {
        let definitionId = this.state.definition?._id;
        if (! exportables || ! definitionId) {
            return Promise.resolve(false);
        }

        if (! exportables.fields || exportables.fields.length === 0) {
            return Promise.resolve(false);
        }

        this.sendDataToWebhooks(exportables);

        this.setState({ isFailed: false, isLoading: true });

        let data = { fields: exportables.fields, unblockerId: this.props.user?.id, unblockerTenantId: this.props.user?.tenantId };

        return API.post(`${PUBLIC_URL}/api/result/${definitionId}/${this.getTenantId()}`, data)
            .then(response => {
                if (! response.data.success) {
                    this.setState({ isFailed: true, isLoading: false });

                    return Promise.resolve(response.data.success);
                }

                this.setState({ isLoading: false });

                return Promise.resolve(response.data.success);
            })
            .then(success => {
                if (success && this.props.glue) {
                    return Promise.resolve([
                        success,
                        this.props.glue.contexts.set(
                            "workflow", 
                            {
                                id: this.state.definition?._id || undefined,
                                name: this.state.definition?.name || undefined,
                                table: `results-${this.state.definition?.slug || this.state.definition?._id || undefined}`,
                                action: "results",
                                updatedAt: Date.now().toString()
                            } 
                        )
                    ]);
                }

                return Promise.resolve(success);
            })
            .then(([success, glueSetVoid]) => {
                return Promise.resolve(success);
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                this.setState({ isFailed: true, isLoading: false });
            });
    }

    private loadDefinitionById(definitionId?: string): Promise<void>
    {
        if (! definitionId) {
            return Promise.resolve();
        }

        return API.get(`${PUBLIC_URL}/api/runner/${definitionId}/${this.getTenantId()}`)
            .then(response => {
                if (! response.data.definition) {
                    this.setState({ isLoading: false, isFailed: true });

                    return;
                }

                let definition = Object.assign({} as IDefinition, response.data.definition);

                this.setState({ definition, isLoading: false });

                return;
            })
            .catch(error => {
                if (ENV === "development") {
                    console.log(error);
                }

                this.setState({ isLoading: false, isFailed: true });

                return error;
            });
    }
}