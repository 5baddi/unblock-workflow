import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, withStyles } from "@material-ui/core";
import Studio from "../../pages/studio";
import ChatRunner from "../../pages/run";
import ChatPreview from "../../pages/preview";
import { BASE_NAME } from "../../settings";
import GlueWeb from "@glue42/web";
import GlueWorkspaces from "@glue42/workspaces-api";
import { GlueProvider } from "@glue42/react-hooks";
import { useAuth, useAuthUser } from "@frontegg/react";
import API from "../../api";

import "./style.scss";

const styles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

const settings = {
    web: {
        config: { libraries: [GlueWorkspaces] },
        factory: GlueWeb,
    },
};

const App = ({ classes }) => {
    const { isAuthenticated }: { isAuthenticated: boolean } = useAuth();
    const user = useAuthUser();

    if (isAuthenticated) {
        API.interceptors.request.use(function (config) {
            const token = user.accessToken;
            config.headers =  {'Authorization': `Bearer ${token}`};

            return config;
        });
    }

    let defaultApp = (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.main}>
                {isAuthenticated && (
                        <Routes>
                            <Route path="/run/:id/:tenantId" element={<ChatRunner />} />
                            <Route path="/preview/:id/:tenantId" element={<ChatPreview />} />
                            <Route path="/:id" element={<Studio />}/>
                            <Route path="/" element={<Studio />}/>
                        </Routes>
                )}
            </main>
        </React.Fragment>
    );

    return (
        <GlueProvider settings={settings} fallback={defaultApp}>
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.main}>
                    {isAuthenticated && (
                        <Routes>
                            <Route path="/run/:id" element={<ChatRunner />} />
                            <Route path="/preview/:id" element={<ChatPreview />} />
                            <Route path="/:id" element={<Studio />}/>
                            <Route path="/" element={<Studio />}/>
                        </Routes>
                    )}
                </main>
            </React.Fragment>
        </GlueProvider>
    );
};

export default withStyles(styles)(App);