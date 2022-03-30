import * as React from "react";
import { useParams } from "react-router-dom";
import { Grid }  from "@mui/material";
import { ChatRunner as UnblockChatRunner } from "../../components/runner/chat";
import { GlueContext } from "@glue42/react-hooks";
import { useAuthUser } from "@frontegg/react";
import AppContext from '../../helpers/context';

export default function ChatPreview ()
{
    const { id, tenantId } = useParams();

    const glue = React.useContext(GlueContext);
    const user = useAuthUser();

    const appContext = { glue, user };

    return (
        <Grid container>
            <AppContext.Provider value={appContext}>
                <UnblockChatRunner definitionId={id} tenantId={tenantId} previewMode={true} glue={glue} user={user}/>
            </AppContext.Provider>
        </Grid>
    );
};