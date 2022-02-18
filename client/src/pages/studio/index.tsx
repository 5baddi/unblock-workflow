import * as React from "react";
import { Grid } from "@mui/material";
import Editor from "../../components/editor";
import { EDITOR_CONTAINER_ID } from "../../global";
import { useParams } from "react-router-dom";
import { GlueContext } from "@glue42/react-hooks";
import { useAuthUser } from "@frontegg/react";

export default function Studio ()
{
    const [user, setUser] = React.useState<{}>({});

    const { id } = useParams();
    const glue = React.useContext(GlueContext);

    if (glue) {
        setUser(useAuthUser());
    }

    return (
        <Grid container>
            <Editor element={ EDITOR_CONTAINER_ID } 
                definitionId={id}
                glue={glue}
                user={user}/>
        </Grid>
    );
};