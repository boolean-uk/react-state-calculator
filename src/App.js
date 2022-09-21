import Answers from './Answers';
import PanelOne from './PanelOne';
import Operators from './Operators';
import PanelTwo from './PanelTwo';
/* eslint-disable default-case */
import "./App.css"
import {useState, React} from "react"

function App() { 

  const [numOne, setNumOne] = useState(0)
  const [operator, setOperator] = useState('+')
  const [numTwo, setNumTwo] = useState(0)
  const [answer, setAnswer] = useState(0)
  const [storeValue, setStoreValue] = useState(0)

  const updatePanelOne = (input) => {
    return (numOne === 0 ? setNumOne(input) : setNumOne('' + numOne + input))
  }
  const updatePanelTwo = (input) => {
    return (numTwo === 0 ? setNumTwo(input) : setNumTwo('' + numTwo + input))
  }

  const addDecimal = (panel) => {
    if (!String(panel).includes('.') && panel === numOne) {
      updatePanelOne('.')
    }
    if (!String(panel).includes('.') && panel === numTwo) {
      updatePanelTwo('.')
    }
  }

  const roundToTwo = (number) => +(Math.round(number + "e+2")  + "e-2")

  const calculate = (numOne, operator, numTwo) => {
    switch (operator) {
      case '+':
        return Number(numOne) + Number(numTwo)
      case '-':
        return Number(numOne) - Number(numTwo)
      case '*':
        return Number(numOne) * Number(numTwo)
      case '/':
        return Number(numOne) / Number(numTwo)
  }
}

  return (
    <div className="calculator">
        <PanelOne   numOne={numOne} updatePanelOne={updatePanelOne} addDecimal={addDecimal} setNumOne={setNumOne} storeValue={storeValue}  />
        <Operators   operator={operator} setOperator={setOperator}  />
        <PanelTwo   numTwo={numTwo} updatePanelTwo={updatePanelTwo} addDecimal={addDecimal} setNumTwo={setNumTwo} storeValue={storeValue}  />
        <Answers   answer={answer} setAnswer={setAnswer} roundToTwo={roundToTwo} calculate={calculate} numOne={numOne} operator={operator} numTwo={numTwo} setStoreValue={setStoreValue}  />
    </div>
  )
}

export default App
