import { useState } from "react"
import "./App.css"
import NumpadComponent from "./components/Numpad"
import OperatorsComponent from "./components/Operators"
import AnswerComponent from "./components/Answer"

function App() {

  const [numOne, setNumOne] = useState(0)
  const [numTwo, setNumTwo] = useState(0)
  const [operator, setOperator] = useState('+')
  const [answer, setAnswer] = useState(0)

  return (
    <div className="calculator">
      <NumpadComponent value={numOne} setValue={setNumOne} />
      <OperatorsComponent value={operator} setValue={setOperator} />
      <NumpadComponent value={numTwo} setValue={setNumTwo} />
      <AnswerComponent value={answer} setValue={setAnswer} numbers={[Number(numOne), Number(numTwo)]} operator={operator}/>
    </div>
  )
}

export default App
