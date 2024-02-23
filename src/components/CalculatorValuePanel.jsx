import {useState} from 'react'
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
  
  buttons.push(buttons.shift());

  const addDot = () => {
    setValue((prevValue) => {
      
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