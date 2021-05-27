import React, { useState } from "react";
import "./ControlButtons.css";

const ControlButtons = (props) => {

    const [buttonState, setButtonState] = useState(true)

    const handleStart = () => {
        props.handleStart()
        setButtonState(!buttonState)
    }

    const StartButton = (
        <div className="btn" onClick={handleStart}>Start</div>
    );

    const PauseButton = (
        <div className="btn" onClick={props.handlePauseResume}>
            {props.isPaused ? "Resume" : "Pause"}
        </div>
    )

    return (
        <div>
            <div className="btnParent">{props.active ? PauseButton : StartButton}</div>
            <input className='input' disabled={buttonState || props.isPaused} type="text" placeholder="Type The Text Here" />
        </div>
    );
}

export default ControlButtons