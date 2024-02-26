import { useState } from "react"
import "./App.css"

let prevNumberOne = ""
let prevNumberTwo = ""


function App() {
  const [numOne, setNumOne] = useState("0");
  const [operator, setOperator] = useState("+")
  const [numTwo, setNumTwo] = useState("0")
  const [sum, setSum] = useState("0")
  const [store, setStore] = useState("")

  const displayNumberOne = (number) => {
    if(prevNumberOne === ""){
      setNumOne(number)
      prevNumberOne += number
      if(number === "0"){
        prevNumberOne = ""
      }
    } else{
      setNumOne(numOne + number)
      prevNumberOne += number
    }
  }

  const displayNumberTwo = (number) => {
    if(prevNumberTwo === ""){
      setNumTwo(number)
      prevNumberTwo += number
      if(number === "0"){
        prevNumberTwo = ""
      }
    } else{
      setNumTwo(numTwo + number)
      prevNumberTwo += number
    }
  }

  const displayOperator = (operator) => {
    setOperator(operator)
  }

  const displaySum = () => {
    if(operator === '+'){
      setSum(parseInt(numOne) + parseInt(numTwo))
    } else if(operator === '-'){
      setSum(parseInt(numOne) - parseInt(numTwo))
    } else if(operator === '÷'){
      setSum(parseInt(numOne) / parseInt(numTwo))
    } else if(operator === '*'){
      setSum(parseInt(numOne) * parseInt(numTwo))
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => displayNumberOne("1")}>1</button>
          <button onClick={() => displayNumberOne("2")}>2</button>
          <button onClick={() => displayNumberOne("3")}>3</button>
          <button onClick={() => displayNumberOne("4")}>4</button>
          <button onClick={() => displayNumberOne("5")}>5</button>
          <button onClick={() => displayNumberOne("6")}>6</button>
          <button onClick={() => displayNumberOne("7")}>7</button>
          <button onClick={() => displayNumberOne("8")}>8</button>
          <button onClick={() => displayNumberOne("9")}>9</button>
          <button onClick={() => displayNumberOne("0")}>0</button>
          <button onClick={() => (setNumOne("0"), prevNumberOne= "")}>Clear</button>
          <button onClick={() => (displayNumberOne(sum), prevNumberOne="")}>recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => displayOperator('+')}>+</button>
          <button onClick={() => displayOperator('-')}>-</button>
          <button onClick={() => displayOperator('*')}>*</button>
          <button onClick={() => displayOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={() => displayNumberTwo("1")}>1</button>
          <button onClick={() => displayNumberTwo("2")}>2</button>
          <button onClick={() => displayNumberTwo("3")}>3</button>
          <button onClick={() => displayNumberTwo("4")}>4</button>
          <button onClick={() => displayNumberTwo("5")}>5</button>
          <button onClick={() => displayNumberTwo("6")}>6</button>
          <button onClick={() => displayNumberTwo("7")}>7</button>
          <button onClick={() => displayNumberTwo("8")}>8</button>
          <button onClick={() => displayNumberTwo("9")}>9</button>
          <button onClick={() => displayNumberTwo("0")}>0</button>
          <button onClick={() => (setNumTwo("0"), prevNumberTwo="")}>Clear</button>
          <button onClick={() => displayNumberTwo(sum)}>recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={() => displaySum()}>=</button>
          <button onClick={() => setStore(sum)}>store</button>
        </div>
      </div>
    </div>
  )
}

export default App
