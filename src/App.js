import "./App.css"
import { useState } from 'react'
import { Panel1 } from './components/Panel1.js'
import OperatorPanel from './components/OperatorPanel.js'
import SecondDigitPanel from "./components/SecondDigitPanel.js"
import FinalPanel from "./components/FinalPanel.js"
function App() { 

  const [firstDigit, setFirstDigit] = useState('0')
  const [operator, setOperator] = useState('+')
  const [secondDigit, setSecondDigit] = useState('0')
  const [result, setResult] = useState(0)
  const [stored, setStored] = useState('0')

  return (
    <div className="calculator">
        <Panel1 stored={stored} value={firstDigit} setValue={setFirstDigit}/>

        <OperatorPanel value={operator} setValue={setOperator}/>
        {console.log(stored)}

        <SecondDigitPanel stored={stored} value={secondDigit} setValue={setSecondDigit} />

        <FinalPanel result={result} setStored={setStored} num={firstDigit} num2={secondDigit} value={result} operator={operator} setValue={setResult}/>
    </div>
  )
}

export default App
