import "./App.css"
import Panel from "./components/Panel"
import { useState } from 'react'

const numButtonValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Clear']
const opButtonValues = ['+', '-', '*', '÷']
const equalButtonValue = ['=']

const initialState = {
  num1: '0',
  op: '+',
  num2: '0',
  answer: '0'
}

function App() { 
  const [state, setState] = useState(initialState)

  return (
    <div className="calculator">  
      <Panel buttonValues={numButtonValues} currNum={state.num1} setState={setState} state ={state}></Panel>     
      <Panel buttonValues={opButtonValues} currNum={state.op} setState={setState} state ={state}></Panel>
      <Panel buttonValues={numButtonValues} currNum={state.num2} setState={setState} state ={state}></Panel>
      <Panel buttonValues={equalButtonValue} currNum={state.answer} setState={setState} state ={state}></Panel>
    </div>
  )
}

export default App
