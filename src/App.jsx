import "./App.css"

import { useState } from 'react'


const buttons = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']


function App() {
  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operator, setOperator] = useState('+')
  const [answer, setAnswer] = useState(0)

  
  function calculateTo(setMethod ,operand1, operand2, operator) {
    switch(operator) {
      case '+':
        setMethod(parseFloat(operand1) + parseFloat(operand2))
        break;
      case '-':
        setMethod(parseFloat(operand1) - parseFloat(operand2))
        break;
      case '*':
        setMethod(parseFloat(operand1) * parseFloat(operand2))
        break;
      case '÷':
        setMethod(parseFloat(operand1) / parseFloat(operand2))
        break;
    }

  }

  function appendValueTo(operand, setOperand, value) {
    if(operand.includes('.') && (value === '.')) {
      return
    }
    setOperand(operand + "" + value)
  }

  function clearField(setField) {
    setField("")
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{operand1}</p>
        <div className="numbers">
          {buttons.map(btn => 
              <button onClick={() => appendValueTo(operand1, setOperand1, btn)}> {btn}</button>
            )}
          <button onClick={() => clearField(setOperand1)}>Clear</button> 
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{operand2}</p>
        <div className="numbers">
          {buttons.map(btn => 
              <button onClick={() => appendValueTo(operand2, setOperand2, btn)}> {btn}</button>
            )}
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculateTo(setAnswer, operand1, operand2, operator)}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
