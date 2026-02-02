function Step4({lines, currentStep, breakLines}) {
    if(currentStep != 4) return <></>;

    const removeWords = (line) => {
      let words = line.split(' ');
      if(words.length < 2) return line;
      return words[0] + '...'
    }

    const editLines = (arr) => {
      return arr.map(line => removeWords(line));
    }

    return (
      <div className="step step-4">
        <h2 className="step__title">Say it with the first words of each line!</h2>
        <pre className="step__text">{breakLines(editLines(lines))}</pre>
      </div>
    )
}

export default Step4