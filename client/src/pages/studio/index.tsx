import * as React from "react";
import { Grid } from "@mui/material";
import Editor from "../../components/editor";
import { EDITOR_CONTAINER_ID } from "../../global";
import { useParams } from "react-router-dom";
import { GlueContext } from '@glue42/react-hooks';

export default function Studio ()
{
    const { id } = useParams();
    const glue = React.useContext(GlueContext);

    return (
        <Grid container>
            <Editor element={ EDITOR_CONTAINER_ID } 
                definitionId={id}
                glue={glue}/>
        </Grid>
    );
};