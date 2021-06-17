import React, { useState, useEffect } from "react";
import moment from "moment";
import Timer from "./Timer/Timer";
import ControlButtons from "./ControlButtons/ControlButtons"
import "./StopWatch.css";

const Stopwatch = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(moment());
    const [endTime, setEndTime] = useState(moment())
    const [timeTaken, setTimeTaken] = useState(moment())

    useEffect(() => {
        let interval = null;
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        setStartTime(moment())
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused)
        setEndTime(moment())
        setTimeTaken(moment.duration(endTime.diff(startTime)).asMinutes())
        console.log(setTimeTaken)
    };

        let wordsPerMinute =props.numberOfWords/timeTaken
        console.log(wordsPerMinute)

    return (
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                // onChange={onChange}
            />
        </div>
    );
}

export default Stopwatch;
