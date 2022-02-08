import * as React from "react";
import { Grid } from "@mui/material";
import Editor from "../../components/editor";
import { EDITOR_CONTAINER_ID } from "../../global";
import Header from "../../components/header";
import {useParams} from "react-router-dom";

export default function Studio (props)
{
    let { id } = useParams();

    return (
        <Grid container>
            <Header/>
            <Editor element={ EDITOR_CONTAINER_ID } definitionId={id}/>
        </Grid>
    );
};