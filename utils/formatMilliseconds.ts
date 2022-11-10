import {
  millisecondsToMinutes,
  millisecondsToSeconds,
  minutesToMilliseconds,
  secondsToMilliseconds,
} from "date-fns";

export function formatMillisecondsToReadable(timeInMillseconds: number) {
  const minutes = Math.floor(millisecondsToMinutes(timeInMillseconds));
  const seconds = millisecondsToSeconds(
    timeInMillseconds - minutesToMilliseconds(minutes)
  );
  const milliseconds =
    (timeInMillseconds -
      minutesToMilliseconds(minutes) -
      secondsToMilliseconds(seconds)) /
    10;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
}
