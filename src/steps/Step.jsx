import React, { useState } from 'react'
import Step1 from './Step-1';
import Step2 from './Step-2';
import Step3 from './Step-3';
import Step4 from './Step-4';
import Step5 from './Step-5';
import './Step.css';

function Step({currentStep}) {
  const [lines, setLines] = useState(['']);

  const breakLines = (arr) => {
    return arr.join('\n');
  }

  return (
    <>
      <Step1
        lines={lines}
        setLines={setLines}
        currentStep={currentStep}
        breakLines={breakLines}
      />

      <Step2
        lines={lines}
        currentStep={currentStep}
        breakLines={breakLines}
      />

      <Step3
        lines={lines}
        currentStep={currentStep}
        breakLines={breakLines}
      />

      <Step4
        lines={lines}
        currentStep={currentStep}
        breakLines={breakLines}
      />

      <Step5
        lines={lines}
        currentStep={currentStep}
        breakLines={breakLines}
      />
    </>
  )
}

export default Step