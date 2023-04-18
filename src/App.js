import { useState } from "react"
import "./App.css"
import { NumberPanel } from "./components/NumberPanel"
import { OperatorPanel } from "./components/OperatorPanel"
import { ResultPanel } from "./components/ResultPanel"


function App() {

  const [value1, setValue1] = useState(0)
  const [operator, setOperator] = useState('+')
  const [value2, setValue2] = useState(0)
  const [result, setResult] = useState()

  const calculateResult = () => {
    if (operator === '+') {
      setResult(value1 + value2)
    } else if (operator === '-') {
      setResult(value1 - value2)
    } else if (operator === '*') {
      setResult(value1 * value2)
    } else if (operator === '/') {
      setResult(value1 / value2)
    }
  }

  return (
    <div className='calculator'>
      <NumberPanel value={value1} setValue={setValue1}/>

      <OperatorPanel operator={operator} setOperator={setOperator} />

      <NumberPanel value={value2} setValue={setValue2} />

      <ResultPanel result={result} calculateResult={calculateResult}/>

    </div>
  )
}

export default App
