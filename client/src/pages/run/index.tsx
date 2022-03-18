import * as React from "react";
import { useParams } from "react-router-dom";
import { Grid }  from "@mui/material";
import { ChatRunner as UnblockChatRunner } from "../../components/runner/chat";
import { GlueContext } from '@glue42/react-hooks';
import { ENV } from '../../../../src/settings';

export default function ChatRunner ()
{
    let { id } = useParams();

    const glue = React.useContext(GlueContext);

    if (window.location === window.parent.location && ENV !== "development") {
        return (<h1>Not found</h1>);
    }

    return (
        <Grid container>
            <UnblockChatRunner definitionId={id} glue={glue}/>
        </Grid>
    );
};