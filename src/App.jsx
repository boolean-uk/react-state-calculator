import "./App.css"

import { useState } from 'react'





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
          <button onClick={() => appendValueTo(operand1, setOperand1, '1')}>1</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '2')}>2</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '3')}>3</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '4')}>4</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '5')}>5</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '6')}>6</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '7')}>7</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '8')}>8</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '9')}>9</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '0')}>0</button>
          <button onClick={() => appendValueTo(operand1, setOperand1, '.')}>.</button>

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
          <button onClick={() => appendValueTo(operand2, setOperand2, '1')}>1</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '2')}>2</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '3')}>3</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '4')}>4</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '5')}>5</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '6')}>6</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '7')}>7</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '8')}>8</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '9')}>9</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '0')}>0</button>
          <button onClick={() => appendValueTo(operand2, setOperand2, '.')}>.</button>
          <button onClick={() => clearField(setOperand2)}>Clear</button> 
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
