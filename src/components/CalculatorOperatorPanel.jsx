import React from 'react'
import CalculatorButton from './CalculatorButton'

function CalculatorOperatorPanel({setValue,value}) {
  return (
    <div className="panel">
        <p>{value}</p>
        <div className="numbers">
            <CalculatorButton setValue={setValue} value={'+'}>+</CalculatorButton>
            <CalculatorButton setValue={setValue} value={'-'}>-</CalculatorButton>
            <CalculatorButton setValue={setValue} value={'*'}>*</CalculatorButton>
            <CalculatorButton setValue={setValue} value={'÷'}>÷</CalculatorButton>
        </div>
      </div>
  )
}

export default CalculatorOperatorPanel