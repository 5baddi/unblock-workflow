import * as React from "react";
import { useParams } from "react-router-dom";
import { Grid }  from "@mui/material";
import { ChatRunner as UnblockChatRunner } from "../../components/runner/chat";

export default function ChatPreview ()
{
    let { id } = useParams();

    return (
        <Grid container>
            <UnblockChatRunner definitionId={id} previewMode={true}/>
        </Grid>
    );
};