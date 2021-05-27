import React from "react";
import "./Timer.css";

const Timer = (props) => {
    return (
        <div className='time'>
            <span className="digits hour">{("0" + Math.floor((props.time / 3600000) % 60)).slice(-2)}:</span>
            <span className="digits minute">{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
            <span className="digits second">{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
            <span className="digits milSec">{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
        </div>
    );
}

export default Timer