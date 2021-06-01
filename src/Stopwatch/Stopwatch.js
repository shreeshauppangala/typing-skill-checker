import React, { useState, useEffect } from "react";
import moment from "moment";
import Timer from "./Timer/Timer";
import ControlButtons from "./ControlButtons/ControlButtons"
import "./StopWatch.css";

const Stopwatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

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
        moment('')
        console.log(moment())
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
        moment('')
        console.log(moment())
    };

    return (
        <div className="stop-watch">
            <Timer time={time} />
             <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
            />
        </div>
    );
}

export default Stopwatch;
