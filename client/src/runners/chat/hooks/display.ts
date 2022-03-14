import { useState } from "react";
import { TRunnerViews } from "tripetto-runner-react-hook";
import { IChatStyles } from "../interfaces/styles";
import { TChatDisplay } from "../interfaces/props";

function verifyDisplay(display: string | undefined): TChatDisplay {
    if (display === "page" || display === "button") {
        return display;
    }

    return "inline";
}

export const useDisplay = (props: { readonly view?: TRunnerViews; readonly display?: TChatDisplay; readonly styles?: IChatStyles }) => {
    const isLive = props.view !== "test" && props.view !== "preview";
    const [display, setDisplay] = useState(verifyDisplay((isLive && props.display) || props.styles?.display));

    return [
        display === "page" ? "page" : display === "button" ? "button" : "inline",
        (s: IChatStyles) => {
            if (!isLive) {
                const d = verifyDisplay(s.display);

                setDisplay(d);

                return d;
            }

            return display;
        },
    ] as [TChatDisplay, (styles: IChatStyles) => TChatDisplay];
};
