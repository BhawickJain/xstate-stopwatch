import { useMachine } from "@xstate/react"
import { millisecondsToMinutes, millisecondsToSeconds, minutesToMilliseconds, secondsToMilliseconds } from "date-fns"
import { useRef, useState } from "react"
import { Machine } from "xstate"

interface StopwatchProps {

}

export function Stopwatch({}: StopwatchProps): JSX.Element {
	const [time, setTime] = useState(0)
	const intervalRef = useRef<number>()

	const handleStart = () => {
		intervalRef.current = window.setInterval(() => setTime((prev) => prev + 10), 10)
	}
	const handleStop = () => {
		window.clearInterval(intervalRef.current)
	}
	const handleReset = () => {
		window.clearInterval(intervalRef.current)
		setTime(0)
	}

	const [stopwatchMachine, send]= useMachine(
		Machine({
			initial: "idle",
			states: {
				idle: {
					on: {
						START: "running"
					},
					entry: handleReset
				},
				running: {
					on: {
						PAUSE: "paused"
					},
					entry: handleStart
				},
				paused: {
					on: {
						RESET: "idle",
						START: "running"
					},
					entry: handleStop
				}
			}
		})
	)

	const formatTime = (time: number) => {
		const minutes = Math.floor(millisecondsToMinutes(time))
		const seconds = millisecondsToSeconds(time - minutesToMilliseconds(minutes))
		const milliseconds =  (time - minutesToMilliseconds(minutes) - secondsToMilliseconds(seconds))/10

		return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`
	}


	return (
        <section className="stopwatch">
          <div className="display">{formatTime(time)}</div>
          <div className="control">
            <button onClick={() => send("START")}>start</button>
            <button onClick={() => send("PAUSE")}>stop</button>
            <button onClick={() => send("RESET")}>reset</button>
          </div>
        </section>
	)
}