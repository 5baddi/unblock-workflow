import styled from "styled-components";
import * as React from "react";
import { cancelUITimeout, isBoolean, scheduleUITimeout } from "tripetto-runner-foundation";
import { TRunnerViews } from "tripetto-runner-react-hook";
import { SIZE } from "../../const";

const getYouTubeId = (url: string) => {
    const videoID = url.match(/youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/);

    return (videoID && videoID.length === 2 && videoID[1]) || "";
};

const getVimeoId = (url: string) => {
    const videoID = url.match(/\/\/(?:www\.)?vimeo\.com\/(?:channels\/staffpicks\/)?([-\w]+)/i);

    return (videoID && videoID.length === 2 && videoID[1]) || "";
};

export const ParagraphVideoElement = styled.div`
    position: relative;
    margin: ${16 / SIZE}em;
    padding: 0 0 56.25% 0;
    border: none;
    width: calc(100% - ${32 / SIZE}em);
    height: 0;
    min-width: calc(240px - ${32 / SIZE}em);

    &:only-child {
        margin: 0;
        width: 100%;
        min-width: 240px;
    }

    > iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
`;

export const ParagraphVideo = (props: { readonly src: string; readonly view: TRunnerViews; readonly play?: boolean }) => {
    const youTubeId = getYouTubeId(props.src);
    const vimeoId = getVimeoId(props.src);
    // tslint:disable-next-line: no-null-keyword
    const videoRef = React.useRef<HTMLIFrameElement>(null);
    const playbackRef = React.useRef<boolean | undefined>();

    React.useEffect(() => {
        const play = props.view !== "preview" && props.play;
        let handle = 0;

        if ((youTubeId || vimeoId) && isBoolean(play) && (isBoolean(playbackRef.current) ? play !== playbackRef.current : play)) {
            const fnCommand = (start: boolean) => {
                videoRef.current?.contentWindow?.postMessage(
                    JSON.stringify(
                        vimeoId
                            ? {
                                  method: start ? "play" : "pause",
                              }
                            : {
                                  event: "command",
                                  func: start ? "playVideo" : "pauseVideo",
                              }
                    ),
                    youTubeId ? "https://www.youtube-nocookie.com" : "https://player.vimeo.com"
                );

                handle = 0;
                playbackRef.current = start;
            };

            if (playbackRef.current === undefined) {
                if (props.play) {
                    handle = scheduleUITimeout(() => fnCommand(true), 1000);
                }
            } else {
                fnCommand(play);
            }
        }

        return () => {
            if (handle !== 0) {
                cancelUITimeout(handle);
            }
        };
    });

    return youTubeId || vimeoId ? (
        <ParagraphVideoElement>
            <iframe
                ref={videoRef}
                src={
                    youTubeId
                        ? `https://www.youtube-nocookie.com/embed/${youTubeId}?controls=0&enablejsapi=1`
                        : `https://player.vimeo.com/video/${vimeoId}?api=1&dnt=1`
                }
                allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
        </ParagraphVideoElement>
    ) : (
        <></>
    );
};
