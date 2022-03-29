import * as React from "react";
import { Glue42 } from "@glue42/desktop";
import { Glue42Web } from "@glue42/web";
import { User } from "@frontegg/redux-store";

export interface IAppContext 
{
    readonly glue?: Glue42.Glue | Glue42Web.API;
    readonly user?: User;
}

const AppContext = React.createContext({
    glue: undefined,
    user: undefined
} as IAppContext);

export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer

export default AppContext;