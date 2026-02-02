function Step3({lines, currentStep, breakLines}) {
    if(currentStep != 3) return <></>;

    const isAlpha = (letter) => {
      return letter >= "a" && letter <= "z" || letter >= "A" && letter <= "Z"
    }

    const removeLetters = (word) => {
      let newWord = ''

      for(let i = 0; i < word.length; i++) {
        if(i != 0 && isAlpha(word[i])) {
          newWord += '_'
        }
        else {
          newWord += word[i]
        }
      }

      return newWord
    }

    const editLine = (line) => {
      return line.split(' ').map(word => removeLetters(word)).join(' ');
    }

    const editLines = (arr) => {
      return arr.map(line => editLine(line))
    }

    return (
      <div className="step step-3">
        <h2 className="step__title">Say it with the first letters of each word!</h2>
        <pre className="step__text">{breakLines(editLines(lines))}</pre>
      </div>
    )
}

export default Step3