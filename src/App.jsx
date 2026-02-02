import React, { useState } from 'react'
import './App.css';
import Step from './steps/Step';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const prev = () => {
    if(currentStep != 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const next = () => {
    if(currentStep != 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <>
      <Step currentStep={currentStep} />

      <div className="buttons">
        <button className="previous button" onClick={prev}>Previous</button>
        <button className="next button" onClick={next}>Next</button>
      </div>
    </>
  )
}

export default App
