import * as React from "react";
import { Provider } from "react-redux";
import { CssBaseline, withStyles } from "@material-ui/core";
import store from "../../store";
import Editor from "../editor";

import "./style.scss";

const styles = theme => ({
    main: {
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(2),
        },
    },
});

const App = ({ classes }) => {
    return (
        <Provider store={ store }>
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.main}>
                    <Editor/>
                </main>
            </React.Fragment>
        </Provider>
    );
};

export default withStyles(styles)(App);