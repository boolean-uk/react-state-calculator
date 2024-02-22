import "./App.css"
import { useState } from 'react'
import ResultsPanel from "./Components/ResultsPanel"
import OperatorPanel from "./Components/OperatorPanel"
import InputPanel from "./Components/InputPanel"

function App() {
  const [firstNumber, setFirstNumber] = useState("0")
  const [firstNumberDecimal, setFirstNumberDecimal] = useState(false)
  const [secondNumber, setSecondNumber] = useState("0")
  const [secondNumberDecimal, setSecondNumberDecimal] = useState(false)
  const [operator, setOperator] = useState("+")
  const [storedResult, setStoredResult] = useState(-1)

  return (
    <div className="calculator">
      <InputPanel 
        panelId="firstPanel" 
        number={firstNumber} 
        setNumber={setFirstNumber} 
        numberDecimal={firstNumberDecimal}
        setNumberDecimal={setFirstNumberDecimal} 
        storedNumber={storedResult}
      />      

      <OperatorPanel operator={operator} setOperator={setOperator}/>

      <InputPanel 
        panelId="secondPanel" 
        number={secondNumber} 
        setNumber={setSecondNumber} 
        numberDecimal={secondNumberDecimal}
        setNumberDecimal={setSecondNumberDecimal}
        storedNumber={storedResult}
      /> 
      <ResultsPanel 
        setStoredResult={setStoredResult} 
        firstNumber={firstNumber} 
        secondNumber={secondNumber} 
        operator={operator}
      />
    </div>
  )
}

export default App
