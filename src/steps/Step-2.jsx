function Step2({lines, currentStep, breakLines}) {
    if(currentStep != 2) return <></>;
    return (
        <div className="step step-2">
            <h2 className="step__title">Repeat your lines a few times!</h2>
            <pre className="step__text">{breakLines(lines)}</pre>
        </div>
    )
}

export default Step2