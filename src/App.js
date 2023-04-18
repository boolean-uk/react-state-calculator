import "./App.css"

import { useState } from 'react'

import NumbersPanel from './components/NumbersPanel'
import OperatorsPanel from './components/OperatorsPanel'
import AnswerPanel from './components/AnswerPanel'

function App() {
  /*
    We use string instead of numbers, because we
    can concatenate strings
    e.g. '1' + '2' = '12'
    to display sympols (+, *) make them 'strings'
    if its not a number or a boolean make it a string! 
  */
  const [firstNumber, setFirstNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [secondNumber, setSecondNumber] = useState('0')
  const [result, setResult] = useState('0')
  const [store, setStore] = useState('0')

  return (
    <div className="calculator">
        <NumbersPanel 
          number={firstNumber} 
          setNumber={setFirstNumber} 
          store={store} />

        <OperatorsPanel 
          operator={operator} 
          setOperator={setOperator} />

        <NumbersPanel 
          number={secondNumber} 
          setNumber={setSecondNumber} 
          store={store} />

        <AnswerPanel 
          operator={operator}
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          answer={result}
          setAnswer={setResult}
          setStore={setStore} />
    </div>
  )
}

export default App
