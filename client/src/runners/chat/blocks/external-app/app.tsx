import * as React from "react";
import { IExternalAppField } from "../../../../components/editor/blocks/external-app/interfaces";
import { Glue42 } from "@glue42/desktop";
import { Glue42Web } from "@glue42/web";
import { User } from "@frontegg/redux-store";
import { Glue42Workspaces } from "@glue42/workspaces-api";
import { APPS_GROUP_ID } from "../../../../global";
import { ENV } from "../../../../settings";

export default function App (props: { app: IExternalAppField, onSubmit?: (() => void) | undefined, onCancel?: (() => void) | undefined, readonly user?: User, readonly glue?: Glue42Web.API | Glue42.Glue })
{
    React.useEffect(() => {
        try {
            initAppsGroup();
        } catch (e) {
            if (ENV === "development") {
                console.log(e);
            }
        }
    }, []);

    const initAppsGroup = async () => {
        if (! props.glue) {
            if (props.onCancel) {
                props.onCancel();
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

        let groupId = window.sessionStorage.getItem(APPS_GROUP_ID);
        if (typeof groupId === "string" && groupId !== "") {
            return await appendAppToAppsGroup(groupId);
        }

        let group: Glue42Workspaces.Group = await glueWorkspace.addGroup({type: "group", children: [{type: "window", appName: props.app.appName}]});
        window.sessionStorage.setItem(APPS_GROUP_ID, group.id);

        if (! group) {
            if (props.onCancel) {
                props.onCancel();
            }

            return;
        }

        if (props.onSubmit) {
            props.onSubmit();
        }
    };
    
    const appendAppToAppsGroup = async (groupId: string) => {
        if (! props.glue) {
            if (props.onCancel) {
                props.onCancel();
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

        let groups: Glue42Workspaces.Group[] = await glueWorkspace.getAllGroups();
        if (groups.length === 0) {
            return await initAppsGroup();
        }

        let group: Glue42Workspaces.Group | undefined = groups.find((group) => group.id === groupId);
        if (! group) {
            if (props.onCancel) {
                props.onCancel();
            }

            return;
        }

        if (props.app.customAction === "removeSelectedApp") {
            await Promise.all(
                await group.children.map(async(child: any) => {
                    if (typeof child.appName === "string" && child.appName === props.app.appName) {
                        await child.close();
                    }
                })
            );

            if (props.onSubmit) {
                props.onSubmit();
            }

            return;
        }

        if (props.app.customAction !== "removeSelectedApp" && props.app.customAction !== "closeOpenedApps") {
            await group.addWindow({type: "window", appName: props.app.appName});
        }
        
        if (props.app.customAction === "replaceOpenedApps") {
            await Promise.all(
                await group.children.map(async(child, index) => {
                    if (group && index !== (group.children.length - 1)) {
                        await child.close();
                    }
                })
            );

            if (props.onSubmit) {
                props.onSubmit();
            }

            return;
        }
        
        if (props.app.customAction === "closeOpenedApps") {
            await Promise.all(
                await group.children.map(async(child) => {
                    await child.close();
                })
            );

            if (props.onSubmit) {
                props.onSubmit();
            }

            return;
        }

        if (props.onSubmit) {
            props.onSubmit();
        }
    };

    return (<h4>Error - You can skip</h4>);
}