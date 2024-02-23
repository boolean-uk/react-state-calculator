import { useState } from "react"
import "./App.css"
import Button from './Button'

function App() {

  const numbers1To9AndZero = ['1','2','3','4','5','6','7','8','9','0']
  const operators = ['+', '-', '*', '/']
  const [num1, setNum1] = useState('0')
  const [num2, setNum2] = useState('0')
  const [operator, setOperator] = useState('+')
  const [calculation, setCalculation] = useState(0)
  const [stored, setStored] = useState({num1: num1, num2: num2, calc: calculation})

  const handleButtonClickNum1 = (val) => {
    if (num1 === '0'){
      setNum1(val)
    } else {
      setNum1(num1 + val);
    }
  }

  const handleButtonClickNum2 = (val) => {
    if (num2 === '0'){
      setNum2(val)
    } else {
      setNum2(num2 + val);
    }
  }

  const handleButtonClickOperator = (op) => {
    setOperator(op)
  }

  const doCalculation = () => {
    let first = parseInt(num1)
    let second = parseInt(num2)
    if (operator === '+'){
      setCalculation(first+second)
    } else if (operator === '-'){
      setCalculation(first-second)
    } else if (operator === '*'){
      setCalculation(first*second)
    } else if (operator === '/'){
      setCalculation(first/second)
    }
  }

  const storeValues = () => {
    setStored({num1: num1, num2: num2, calc: calculation})
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          {numbers1To9AndZero.map(num => (
            <Button onClick={() => handleButtonClickNum1(num)} key={num} value={num} /> 
          ))}
          <Button onClick={() => {setNum1('0')}} value={'Clear'} />
          <Button onClick={() => {setNum1(stored.num1)}} value={'Recall'} />
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
            {operators.map(o => (
              <Button onClick={() => handleButtonClickOperator(o)} key={o} value={o} /> 
            ))}
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          {numbers1To9AndZero.map(num => (
            <Button onClick={() => handleButtonClickNum2(num)} key={num} value={num} /> 
          ))}
          <Button onClick={() => {setNum2('0')}} value={'Clear'} />
          <Button onClick={() => {setNum2(stored.num2)}} value={'Recall'} />
        </div>
      </div>
      <div className="panel answer">
        <p>{calculation}</p>
        <div>
          <Button onClick={() => {doCalculation()}} value={'='} />
          <Button onClick={() => {storeValues()}} value={'Store'} />
        </div>
      </div>
    </div>
  )
}

export default App
