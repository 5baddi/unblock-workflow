import * as React from "react";
import { Grid } from "@mui/material";
import Editor from "../../components/editor";
import { EDITOR_CONTAINER_ID } from "../../global";
import { useParams } from "react-router-dom";
import { GlueContext } from '@glue42/react-hooks';
import { ENV } from '../../../../src/settings';
import {useAuthUser} from "@frontegg/react";

export default function Studio ()
{
    const { id } = useParams();
    const glue = React.useContext(GlueContext);
    const user = useAuthUser();

    if (window.location === window.parent.location && ENV !== "development") {
        return (<h1>Not found</h1>);
    }

    return (
        <Grid container>
            <Editor element={ EDITOR_CONTAINER_ID } 
                definitionId={id}
                glue={glue}
                user={user}
                manualSaving={true}/>
        </Grid>
    );
};