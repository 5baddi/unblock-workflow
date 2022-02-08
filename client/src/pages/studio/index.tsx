import * as React from "react";
import { Grid } from "@mui/material";
import Editor from "../../components/editor";
import { EDITOR_CONTAINER_ID } from "../../global";
import { useParams } from "react-router-dom";

export default function Studio ()
{
    let { id } = useParams();

    return (
        <Grid container>
            <Editor element={ EDITOR_CONTAINER_ID } definitionId={id}/>
        </Grid>
    );
};