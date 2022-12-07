import React, { useState } from "react";
import "./ControlButtons.css";

const ControlButtons = (props) => {

    const { numberOfWords, handlePauseResume, active, handleStart, setWords, isPaused } = props

    const [buttonState, setButtonState] = useState(true)

    return (
        <div className='buttons'>
            <h1>Number Of Words Written = { numberOfWords }</h1>
            <div className='button'>{ active ? <div className="btn" onClick={ handlePauseResume }>
                { isPaused ? "Resume" : "Pause" }
            </div> : <div className="btn" onClick={ () => {
                handleStart()
                setButtonState(!buttonState)
            } }>Start</div> }</div>
            <textarea className='input'
                onChange={ event => setWords(event.target.value) }
                disabled={ buttonState || isPaused }
                onPaste={ (e) => {
                    e.preventDefault();
                    alert('Paste Is Not Allowed')
                } }
                type="text"
                placeholder="Type The Text Here"
                rows='11'
            />
        </div>
    );
}

export default ControlButtons