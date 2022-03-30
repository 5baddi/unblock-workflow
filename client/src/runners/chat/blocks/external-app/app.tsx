import * as React from "react";
import { IExternalAppField } from "../../../../components/editor/blocks/external-app/interfaces";
import { GlueContext } from "@glue42/react-hooks";
import AppContext from '../../../../helpers/context';

export default function App (props: { app: IExternalAppField, onSubmit?: (() => void) | undefined, onCancel?: (() => void) | undefined })
{
    const glue = React.useContext(AppContext);

    console.log(props, glue);

    if (glue) {
        return (<h1>demo</h1>);
    }

    return (
        <h4>Error - please visit <a href="https://app.unblock.io">Unblock app</a></h4>
    );
};