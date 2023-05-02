import "./App.css"
import { useState } from 'react'
import NumberPanel from './components/NumberPanel'
import OperatorPanel from './components/OperatorPanel'
import AnswerPanel from "./components/AnswerPanel"

function App() { 
  const [num1, setNum1] = useState('0')
  const [op, setOp] = useState('+')
  const [num2, setNum2] = useState('0')
  const [answer, setAnswer] = useState('0')
  const answerArray = [num1, op, num2]
  
  return (
    <div className="calculator">  
      <NumberPanel state={num1} setState={setNum1}></NumberPanel>
      <OperatorPanel state={op} setState={setOp}></OperatorPanel>
      <NumberPanel state={num2} setState={setNum2}></NumberPanel>
      <AnswerPanel state={answer} setState={setAnswer} answerArray={answerArray}></AnswerPanel>
      

    </div>
  )
}


export default App
