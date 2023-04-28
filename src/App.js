import "./App.css"
import { useState } from 'react'
import { Panel1 } from './components/Panel1.js'
import OperatorPanel from './components/OperatorPanel.js'

function App() { 

  const [firstDigit, setFirstDigit] = useState(0)
  const [operator, setOperator] = useState('+')
  const [secondDigit, setSecondDigit] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <div className="calculator">
        <Panel1 value={firstDigit} setValue={setFirstDigit}/>

        <OperatorPanel value={operator} setValue={setOperator}/>
        <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>0</p>
          <div>
            <button>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
