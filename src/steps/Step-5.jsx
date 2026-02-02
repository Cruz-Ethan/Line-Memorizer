function Step5({lines, currentStep, breakLines}) {
    if(currentStep != 5) return <></>;
    return (
      <div className="step step-5">
        <h2 className="step__title">Finished!</h2>
        <pre className="step__text">{breakLines(lines)}</pre>
      </div>
    )
}

export default Step5