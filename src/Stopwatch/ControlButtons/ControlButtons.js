import React, { useState } from "react";
import "./ControlButtons.css";

const ControlButtons = (props) => {

    const [buttonState, setButtonState] = useState(true)

    return (
        <div className='buttons'>
            <h1>Number Of Words Written = { props.numberOfWords }</h1>
            <div className='button'>{ props.active ? <div className="btn" onClick={ props.handlePauseResume }>
                { props.isPaused ? "Resume" : "Pause" }
            </div> : <div className="btn" onClick={ () => {
                props.handleStart()
                setButtonState(!buttonState)
            } }>Start</div> }</div>
            <textarea className='input'
                onChange={ event => props.setWords(event.target.value) }
                disabled={ buttonState || props.isPaused }
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