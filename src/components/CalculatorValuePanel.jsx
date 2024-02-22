import React from 'react'
import CalculatorButton from './CalculatorButton'

function CalculatorValuePanel({value,setValue,savedValue}) {

  const buttons = []
  for (let i = 0; i <= 9; i++) {
    buttons.push(
      <CalculatorButton setValue={setValue} value={i} key={i}>
        {i}
      </CalculatorButton>
    );
  }
  //put first element last (move 0 to the back)
  buttons.push(buttons.shift());

  const addDot = () => {
    setValue((prevValue) => {
      // Check if the current value already contains a dot
      return prevValue.toString().includes('.') ? prevValue : prevValue + '.';
    });
  };
  return (
    <div className="panel">
        <p>{value}</p>
        <div className="numbers">
          {buttons}
          <button onClick={() => addDot()}> . </button>
          <button onClick={() => setValue(0)}>Clear</button>
          <button onClick={() => setValue(savedValue)}>Recall</button>
        </div>
      </div>
  )
}

export default CalculatorValuePanel