import React, { useState } from "react";
import "./ControlButtons.css";

const ControlButtons = (props) => {

    const [buttonState, setButtonState] = useState(true)
    const [words, setWords] = useState('')

    const numberOfWords = words.split(/[ .:;?!~,`"&|]+/).length;

    const onChange = (word) => {
        setWords(word)
        // props.onChange(word)

    }

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
            <h1>Number Of Words Written = {numberOfWords}</h1>
            <div className='button'>{props.active ? PauseButton : StartButton}</div>
            <textarea className='input'
                onChange={event => /*setWords*/onChange(event.target.value)}
                disabled={buttonState || props.isPaused}
                onPaste={handleChange}
                // {...numberOfWords}
                type="text"
                placeholder="Type The Text Here"
                rows='11'
            />
        </div>
    );
}

export default ControlButtons