import * as React from "react";
import { useParams } from "react-router-dom";
import { Grid }  from "@mui/material";
import { ChatRunner as UnblockChatRunner } from "../../components/runner/chat";
import { GlueContext } from '@glue42/react-hooks';

export default function ChatRunner ()
{
    let { id } = useParams();

    const glue = React.useContext(GlueContext);

    return (
        <Grid container>
            <UnblockChatRunner definitionId={id} glue={glue}/>
        </Grid>
    );
};