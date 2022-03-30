import * as React from "react";
import { IExternalAppField } from "../../../../components/editor/blocks/external-app/interfaces";

export default function App (props: { app: IExternalAppField, onSubmit?: (() => void) | undefined, onCancel?: (() => void) | undefined })
{
    // if (glue) {
    //     return (<h1>demo</h1>);
    // }

    return (
        <h4>Error - please visit <a href="https://app.unblock.io">Unblock app</a></h4>
    );
};