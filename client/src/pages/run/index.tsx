import * as React from "react";
import { useParams } from "react-router-dom";
import { Grid }  from "@mui/material";
import { ChatRunner as UnblockChatRunner } from "../../components/runner/chat";
import { GlueContext } from "@glue42/react-hooks";
import { useAuthUser } from "@frontegg/react";

export default function ChatRunner ()
{
    const { id, tenantId } = useParams();
    const glue = React.useContext(GlueContext);
    const user = useAuthUser();

    return (
        <Grid container>
            <UnblockChatRunner definitionId={id} tenantId={tenantId} glue={glue} user={user}/>
        </Grid>
    );
};