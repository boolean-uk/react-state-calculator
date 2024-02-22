import React from 'react'
import CalculatorButton from './CalculatorButton'

function CalculatorValuePanel({value,setValue}) {

  const buttons = []
  for (let i = 0; i <= 9; i++) {
    buttons.push(
      <CalculatorButton setValue={setValue} value={i}>
        {i}
      </CalculatorButton>
    );
  }
  //put first element last (move 0 to the back)
  buttons.push(buttons.shift());

  return (
    <div className="panel">
        <p>{value}</p>
        <div className="numbers">
          {buttons}
          <button onClick={() => setValue(0)}>Clear</button>
        </div>
      </div>
  )
}

export default CalculatorValuePanel