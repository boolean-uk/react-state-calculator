import "./App.css"
import { useState } from "react"

function App() {
  const [numberOne, setNumberOne] = useState(0)
  const [symbol, setsymbol] = useState("+")
  const [numberTwo, setNumberTwo] = useState(0)
  const [answer, setAnswer] = useState(0)

  const handleNumberOne = (e) => {
    const input = e.target.innerText

    if (numberOne === 0) {
      setNumberOne(input)
      console.log(setNumberOne)
      return
    } else {
      setNumberOne(numberOne + input)
      return
    }
  }

  const handleNumberTwo = (e) => {
    const input = e.target.innerText

    if (numberTwo === 0) {
      setNumberTwo(input)
    } else {
      setNumberTwo(numberTwo + input)
    }
  }
  function calculate() {
    let numberOneNum = Number(numberOne)
    let numberTwoNum = Number(numberTwo)

    if (symbol === "+") {
      setAnswer(numberOneNum + numberTwoNum)
      console.log(setAnswer)
    }
    else if (symbol === "-") {
      setAnswer(numberOneNum - numberTwoNum)
    } else if (symbol === "*") {
      setAnswer(numberOneNum * numberTwoNum)
    }
    else if (symbol === "÷") {
      setAnswer(numberOneNum / numberTwoNum)
    }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberOne}</p>
        <div className="numbers">
          <button onClick={handleNumberOne}>1</button>
          <button onClick={handleNumberOne}>2</button>
          <button onClick={handleNumberOne}>3</button>
          <button onClick={handleNumberOne}>4</button>
          <button onClick={handleNumberOne}>5</button>
          <button onClick={handleNumberOne}>6</button>
          <button onClick={handleNumberOne}>7</button>
          <button onClick={handleNumberOne}>8</button>
          <button onClick={handleNumberOne}>9</button>
          <button onClick={handleNumberOne}>0</button>
          <button onClick={() => setNumberOne(0)}>Clear</button>
          <button>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button onClick={() => setsymbol("+")}>+</button>
          <button onClick={() => setsymbol("-")}>-</button>
          <button onClick={() => setsymbol("*")}>*</button>
          <button onClick={() => setsymbol("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberTwo}</p>
        <div className="numbers">
          <button onClick={handleNumberTwo}>1</button>
          <button onClick={handleNumberTwo}>2</button>
          <button onClick={handleNumberTwo}>3</button>
          <button onClick={handleNumberTwo}>4</button>
          <button onClick={handleNumberTwo}>5</button>
          <button onClick={handleNumberTwo}>6</button>
          <button onClick={handleNumberTwo}>7</button>
          <button onClick={handleNumberTwo}>8</button>
          <button onClick={handleNumberTwo}>9</button>
          <button onClick={handleNumberTwo}>0</button>
          <button onClick={() => setNumberTwo(0)}>Clear</button>
          <button>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App