import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, withStyles } from "@material-ui/core";
import Studio from "../../pages/studio";
import ChatRunner from "../../pages/run";
import ChatPreview from "../../pages/preview";
import { BASE_NAME } from "../../settings";
import GlueWeb from '@glue42/web';
import GlueWorkspaces from "@glue42/workspaces-api";
import { GlueProvider } from '@glue42/react-hooks';

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
    return window.location !== window.parent.location
    ? (
        <GlueProvider settings={settings}>
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.main}>
                    <BrowserRouter basename={ BASE_NAME }>
                        <Routes>
                            <Route path="/run/:id" element={<ChatRunner />} />
                            <Route path="/preview/:id" element={<ChatPreview />} />
                            <Route path="/:id" element={<Studio />}/>
                            <Route path="/" element={<Studio />}/>
                        </Routes>
                    </BrowserRouter>
                </main>
            </React.Fragment>
        </GlueProvider>
    )
    : (
        <React.Fragment>
            <CssBaseline/>
            <main className={classes.main}>
                <BrowserRouter basename={ BASE_NAME }>
                    <Routes>
                        <Route path="/run/:id" element={<ChatRunner />} />
                        <Route path="/preview/:id" element={<ChatPreview />} />
                        <Route path="/:id" element={<Studio />}/>
                        <Route path="/" element={<Studio />}/>
                    </Routes>
                </BrowserRouter>
            </main>
        </React.Fragment>
    );
};

export default withStyles(styles)(App);