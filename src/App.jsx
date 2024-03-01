import { useState } from "react"
import "./App.css"
import Numpad from "./Components/Numpad"



function App() {

  const [firstNum, setFirstNum] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [result, setResult] = useState('')
  const [resultSave, setResultSave] = useState('')

  const handleEqualsClick = () => {
    setResult(eval(`${firstNum} ${operator} ${secondNum}`))
  }
  const handleResetClick = () => {
    setFirstNum('')
    setOperator('')
    setSecondNum('')
    setResult('')
    setResultSave(0)
  }
  const saveAndReset = () => {
    setResultSave(result)
    setFirstNum('')
    setOperator('')
    setSecondNum('')
    setResult('')
  }
 

  return (
    <div className="calculator">
      <Numpad number={firstNum} setFirstNum={setFirstNum} operator={operator} />
      <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={() => setOperator('+')}>+</button>
            <button onClick={() => setOperator('-')}>-</button>
            <button onClick={() => setOperator('*')}>*</button>
            <button onClick={() => setOperator('/')}>÷</button>
          </div>
      </div>
      <Numpad number={secondNum} setSecondNum={setSecondNum} operator={operator} />
      <div className="panel answer">
        <p>{result || resultSave}</p>
        <div>
          <button onClick={handleEqualsClick}>=</button>
          <button onClick={handleResetClick}>Reset</button>
          <button onClick={saveAndReset}>Save</button>

        </div>
      </div>
    </div>
    )
}

export default App
