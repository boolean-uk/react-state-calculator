import { useState } from "react"
import "./App.css"
import { NumberPanel } from "./components/NumberPanel"
import { OperatorPanel } from "./components/OperatorPanel"
import { ResultPanel } from "./components/ResultPanel"


function App() {

  const [value1, setValue1] = useState('0')
  const [operator, setOperator] = useState('+')
  const [value2, setValue2] = useState('0')
  const [result, setResult] = useState(0)
  const [savedNumber, setSavedNumber] = useState(0)


  return (
    <div className='calculator'>
      <NumberPanel value={value1} setValue={setValue1} savedNumber={savedNumber}/>

      <OperatorPanel operator={operator} setOperator={setOperator} />

      <NumberPanel value={value2} setValue={setValue2} savedNumber={savedNumber}/>

      <ResultPanel
        result={result}
        setResult={setResult}
        value1={value1}
        setValue1={setValue1}
        setValue2={setValue2}
        value2={value2}
        operator={operator}
        setSavedNumber={setSavedNumber}/>

    </div>
  )
}

export default App
