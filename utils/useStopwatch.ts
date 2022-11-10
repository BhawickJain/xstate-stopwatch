import { useMachine } from "@xstate/react";
import { useRef, useState } from "react";
import { createStopwatchMachine } from "./createStopwatchMachine";

export function useStopwatch(): [(action: string) => void, number] {
  const [time, setTime] = useState(0);

  const intervalRef = useRef<number>();
  const handleStart = () => {
    intervalRef.current = window.setInterval(
      () => setTime((prev) => prev + 10),
      10
    );
  };

  const handleStop = () => {
    window.clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    window.clearInterval(intervalRef.current);
    setTime(0);
  };

  const [stopwatchMachine] = useState(
    createStopwatchMachine(handleStart, handleStop, handleReset)
  );
  const [_, send] = useMachine(stopwatchMachine);

  return [send, time];
}
