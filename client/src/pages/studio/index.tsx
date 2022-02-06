import * as React from "react";
import { Grid } from "@mui/material";
import Editor from "../../components/editor";
import { EDITOR_CONTAINER_ID } from "../../global";

export default function Studio () {
    return (
        <Grid container>
            {/*<Header/>*/}
            <Editor element={ EDITOR_CONTAINER_ID }/>
        </Grid>
    );
};