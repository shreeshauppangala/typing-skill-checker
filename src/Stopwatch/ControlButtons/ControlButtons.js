import React, { useState } from "react";
import "./ControlButtons.css";

const ControlButtons = (props) => {

    const [buttonState, setButtonState] = useState(true)
    const [words, setWords] = useState('')

    const numberOfWords = words.split(' ').length;

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

    const handleChange = (e) => {
        e.preventDefault();
        alert('Paste Is Not Allowed')
    };

    return (
        <div className='buttons'>
            <h1>{numberOfWords}</h1>
            <div className='button'>{props.active ? PauseButton : StartButton}</div>
            <textarea className='input'
                onChange={event => setWords(event.target.value)}
                disabled={buttonState || props.isPaused}
                onPaste={handleChange}
                type="text"
                placeholder="Type The Text Here"
                rows='16'
            />
        </div>
    );
}

export default ControlButtons