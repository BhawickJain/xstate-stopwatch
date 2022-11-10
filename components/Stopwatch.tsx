import { CSSProperties, StyleHTMLAttributes } from "react";
import { clss } from "../utils/classnames";
import { formatMillisecondsToReadable } from "../utils/formatMilliseconds";
import { useStopwatch } from "../utils/useStopwatch";

export function Stopwatch(): JSX.Element {
  const [send, time] = useStopwatch();

  return (
    <div id='stopwatch' className={clss("stopwatch", "mt-1")}>
      <div className={clss("display", "flex-col", "justify-center")} style={displayStyle}>{formatMillisecondsToReadable(time)}</div>
      <div className={clss("control", "flex-row", "flex-gap-1")}>
        <button style={buttonStyle} onClick={() => send("START")}>start</button>
        <button style={buttonStyle} onClick={() => send("PAUSE")}>stop</button>
        <button style={buttonStyle} onClick={() => send("RESET")}>reset</button>
      </div>
    </div>
  );
}

const displayStyle: CSSProperties = {
	fontFamily: "monospace"
}

const buttonStyle: CSSProperties = {
	background: "var(--background)",
	color: "var(--text)",
	fontSize: "1rem",
	fontWeight: "bold",
	padding: "0.5rem 1rem",
	borderRadius: "0.5rem",
	border: "solid 1px var(--border)"
}
