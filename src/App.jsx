import "./App.css"
import { useState } from "react"
import NumberComponent from "./components/NumberComponent"
import OperatorComponent from "./components/OperatorComponent"
function App() {
  const [firstValue, setFirstValue] = useState(0)
  const [operator, setOperator] = useState('+')
  const [secondValue, setSecondValue] = useState(0)
  const [resultValue, setResultValue] = useState(0)

  const[storedValue, setStored] = useState(0)

  const calculatedResult = () => {
    const value1 = parseFloat(firstValue)
    const value2 = parseFloat(secondValue)
    switch(operator){
      case '+':
        setResultValue(value1 + value2)
        break
      case '-':
        setResultValue(value1 - value2)
        break
        case '*':
        setResultValue(value1 * value2)
        break
        case '÷':
        setResultValue(value1 / value2)
        break
        
    }
  }
  return (
    <div className="calculator">
      <NumberComponent setValue={setFirstValue} value={firstValue} stored ={storedValue}/>

      <OperatorComponent setValue={setOperator} value={operator}/>

      <NumberComponent setValue={setSecondValue} value={secondValue} stored ={storedValue}/>
      <div className="panel answer">
        <p>{resultValue}</p>
        <div>
          <button onClick={() => calculatedResult()}>=</button>
          <button onClick={() => {
            setStored(resultValue)}}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
