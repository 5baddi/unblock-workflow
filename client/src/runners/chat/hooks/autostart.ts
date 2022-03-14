import { useRef } from "react";
import { TRunnerViews } from "tripetto-runner-react-hook";
import { TChatDisplay } from "../interfaces/props";

/** This hook will check if the runner needs to be started. */
export const useAutoStart = (
    runner: {
        readonly view: TRunnerViews;
        readonly kickOff: () => void;
    },
    display: TChatDisplay,
    isVisible: boolean | undefined
) => {
    const autoStart = useRef(runner.view !== "live" || display !== "button");

    /** When the button mode is enabled, we wait with kicking off the runner until the chat is made visible. */
    if (!autoStart.current && (runner.view !== "live" || display !== "button" || isVisible)) {
        runner.kickOff();

        autoStart.current = true;
    }
};
