import * as React from "react";
import { IProcessTaskField } from "../../../../components/editor/blocks/process-task/interfaces";
import { Glue42 } from "@glue42/desktop";
import { Glue42Web } from "@glue42/web";
import { User } from "@frontegg/redux-store";
import { Glue42Workspaces } from "@glue42/workspaces-api";
import { ENV, PUBLIC_URL } from "../../../../settings";
import API from '../../../../api';
import { IChatController } from "../../hooks/controller";
import { Export } from "tripetto-runner-foundation";
import { APPS_GROUP_ID, PROCESS_TASK_RUNNER_APP_NAME } from "../../../../global";
import { getDefinitionNodeHelper, getFieldAliasHelper } from "../../../../helpers";

export default function App (props: { process: IProcessTaskField, onSubmit?: (() => void) | undefined, onCancel?: (() => void) | undefined, controller?: [IChatController | undefined], readonly user?: User, readonly glue?: Glue42Web.API | Glue42.Glue })
{
    React.useEffect(() => {
        try {
            initProcessTaskNotification();
        } catch (e) {
            if (ENV === "development") {
                console.log(e);
            }

            if (props.onCancel) {
                props.onCancel();
            }
        }
    }, []);

    const getTenantId = () => {
        if (! props.user || ! props.user.tenantId) {
            return "";
        }

        return props.user.tenantId.replace(/[^\w]/g, "");
    }

    const initProcessTaskNotification = async () => {
        if (! props.glue || typeof props.process.definitionId !== "string" || props.process.definitionId === "-1") {
            if (props.onCancel) {
                props.onCancel();
            }

            return;
        }

        if (props.process.sendable === false) {
            if (props.onSubmit) {
                props.onSubmit();
            }

            return;
        }

        let glueWorkspace: Glue42Workspaces.Workspace | undefined = await props.glue.workspaces?.getMyWorkspace();
        if (! glueWorkspace) {
            if (props.onCancel) {
                props.onCancel();
            }

            return;
        }

        if (props.controller && props.controller[0]) {
            let definitionName = undefined;
            if (typeof props.user?.tenantId !== "undefined") {
                let response = await API.get(`${PUBLIC_URL}/api/definition/${props.process.definitionId}/${getTenantId()}`);
                
                if (typeof response.data !== "undefined" && typeof response.data.definition !== "undefined") {
                    definitionName = response.data.definition.name;
                }
            }

            let definition = Object.assign({}, JSON.parse(JSON.stringify(props.controller[0].definition)));
            let instance = props.controller[0].instance;

            if (typeof definition !== "undefined" && typeof instance !== "undefined") {
                let exportables = Export.exportables(instance);
                let fields = exportables.fields;

                fields = fields.filter((field) => typeof field.value !== "undefined" && field.value !== "" && typeof field.time === "number" );

                let data = { fields, unblockerId: props.user?.id, unblockerTenantId: props.user?.tenantId };

                await API.post(`${PUBLIC_URL}/api/webhooks/runner/${definition._id}/${getTenantId()}`, { fields });
                let result = await API.post(`${PUBLIC_URL}/api/result/${definition._id}/${getTenantId()}`, data);
                if (result && typeof result.data !== "undefined" && typeof result.data.fields !== "undefined") {
                    fields = result.data.fields;
                }

                let query = "?";
                (fields ?? []).forEach((field) => {
                    let node = getDefinitionNodeHelper(definition, field.node.id);

                    if (typeof node !== "undefined") {
                        let alias = getFieldAliasHelper(node, field);
                        if (typeof alias === "string" && typeof field.value !== "undefined") {
                            if (query !== "?") {
                                query = query.concat("&");
                            }

                            query = query.concat(`${alias}=${field.value}`);
                        }
                    }
                });

                let importResult = await props.glue.appManager.inMemory.import(
                    [
                        {
                            name: `${PROCESS_TASK_RUNNER_APP_NAME}${props.process.definitionId}`,
                            type: "window",
                            title: "Unblock - Workflow runner",
                            details: {
                                url: `${PUBLIC_URL}/run/${props.process.definitionId}${query}`,
                            }
                        }
                    ], 
                    "merge"
                );

                let importedApps = importResult.imported;
                let errors = importResult.errors;

                if (ENV === "development") {
                    importedApps.forEach(console.log);
                    errors.forEach(e => console.log(`App: ${e.app}, Error: ${e.error}`));
                }

                const handler = async (args: any) => {
                    if (! glueWorkspace) {
                        return;
                    }

                    await glueWorkspace 
                        .addGroup({type: "group", children: [{type: "window", appName: `${PROCESS_TASK_RUNNER_APP_NAME}${props.process.definitionId}`}]});
                }

                await props.glue.interop.register(`${PROCESS_TASK_RUNNER_APP_NAME}${props.process.definitionId}`, handler);
    
                const options: Glue42Web.Notifications.RaiseOptions = {
                    title: "You've got a new request!",
                    body: definitionName || `New request`,
                    focusPlatformOnDefaultClick: true,
                    actions: [
                        {
                            action: "acceptRequest",
                            interop: {
                                method: `${PROCESS_TASK_RUNNER_APP_NAME}${props.process.definitionId}`,
                                // arguments:
                                },
                            title: "Accept Request",
                        },
                        {
                            action: "declineRequest",
                            title: "Decline Request",
                        },
                    ],
                };
    
                let notification = await props.glue.notifications.raise(options);
                notification.onclick = async() => {
                    if (! props.glue) {
                        return;
                    }
    
                    await props.glue.windows.my().close();
                }
            }

            return;
        }

        try {
            let groupId = window.sessionStorage.getItem(APPS_GROUP_ID);

            if (typeof groupId === "string" && groupId !== "" && typeof props.glue !== "undefined") {
                let glueWorkspace: Glue42Workspaces.Workspace | undefined = await props.glue.workspaces?.getMyWorkspace();

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
    };

    return (<></>);
}