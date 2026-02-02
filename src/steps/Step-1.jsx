import React, { useRef } from 'react'
import './Step-1.css';

function Step1({lines, setLines, currentStep, breakLines}) {
    const textArea = useRef(null)
    if(currentStep != 1) return <></>;

    const saveLines = () => {
        setLines(textArea.current.value.split("\n"))
    }

    return (
        <div className="step step-1">
        <h2 className="step__title">What would you like to memorize?</h2>
        <textarea
            ref={textArea}
            className="step-1__text"
            type="text"
            placeholder="Enter your lines here"
            value={breakLines(lines)}
            onChange={saveLines}
        />
        </div>
    )
}

export default Step1;