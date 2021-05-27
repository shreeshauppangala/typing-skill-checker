import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import "./Text.css";

const Text = () => {
    return <div className="text-wrapper">
            <LoremIpsum p={3} />
        </div>
}
export default Text
