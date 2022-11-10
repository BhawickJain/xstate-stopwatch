import { createMachine } from "xstate";

export function createStopwatchMachine(
  handleStart: () => void,
  handleStop: () => void,
  handleReset: () => void
) {
  const stopwatchMachine = createMachine({
    predictableActionArguments: true,
    id: "stopwatch",
    initial: "idle",
    states: {
      idle: {
        on: {
          START: "running",
        },
        entry: handleReset,
      },
      running: {
        on: {
          PAUSE: "paused",
          RESET: "idle",
        },
        entry: handleStart,
      },
      paused: {
        on: {
          RESET: "idle",
          START: "running",
        },
        entry: handleStop,
      },
    },
  });

  return stopwatchMachine;
}
