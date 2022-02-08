import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profiler } from "react";
import { Provider } from "react-redux";
import { CssBaseline, withStyles } from "@material-ui/core";
import store from "../../store";
import Studio from "../../pages/studio";
import ChatRunner from "../../pages/run";
import Home from "../../pages/home";

import "./style.scss";
import {ENV} from "../../../../src/settings";

const styles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

const logProfile = (
    id: string,
    phase: "mount" | "update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: Set<any>
) => {
    if (ENV !== "production") {
        return;
    }

    console.log("Profiling ID", id);
    console.log("Profiling phase", phase);
    console.log("Profiling actualDuration", actualDuration);
    console.log("Profiling baseDuration", baseDuration);
    console.log("Profiling startTime", startTime);
    console.log("Profiling commitTime", commitTime);
    console.log("Profiling interactions", interactions);
};

const App = ({ classes }) => {
    return (
        <Profiler id="application" onRender={logProfile}>
            <Provider store={ store }>
                <React.Fragment>
                    <CssBaseline/>
                    <main className={classes.main}>
                        <BrowserRouter basename={process.env.BASE_NAME}>
                            <Routes>
                                <Route path="/run/:id" element={<ChatRunner />} />
                                <Route path="/edit/:id" element={<Studio />}/>
                                <Route path="/new" element={<Studio />}/>
                                <Route path="/" element={<Home />}/>
                            </Routes>
                        </BrowserRouter>
                    </main>
                </React.Fragment>
            </Provider>
        </Profiler>
    );
};

export default withStyles(styles)(App);