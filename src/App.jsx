import { useState } from "react"
import "./App.css"

function App() {
const [num1, setNumber1] = useState(0)
const [num2, setNumber2] = useState(0)
const [operator, setOperator] = useState("+")
const [answer, setAnswer] = useState(0)

const displayNumber1 = ((e) => {
  const value = e.target.value
    if(num1 === 0){
      setNumber1(value)
    }
    else{
      setNumber1( num1 + value  )

    }
  
}) 


const displayNumber2 = ((e) => {
  const value = e.target.value
    if(num2 === 0){
      setNumber2(value)
    }
    else{
      setNumber2( num2 + value  )

    }
  
}) 

const displayOperator = ((e)=> setOperator(e.target.value))
const displayAnswer = (() => {
  if(operator === '+'){
     setAnswer(parseFloat(num1) + parseFloat(num2))
  }
  else if (operator === '-'){
    setAnswer(num1 - num2)
  }

  else if (operator === '*'){
    setAnswer(num1 * num2)
  }

  else if(operator === '÷' ){
    setAnswer((num1 / num2).toFixed(4))
  }
  else if (num1 === 0 && num2 === 0){
    setAnswer(0)
  }

} )

const clearScrean1 = ((e) => setNumber1(0))
const clearScrean2 = ((e) => setNumber2(0))

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          <button onClick={displayNumber1} value={1}>1</button>
          <button onClick={displayNumber1} value={2}>2</button>
          <button onClick={displayNumber1} value={3}>3</button>
          <button onClick={displayNumber1} value={4}>4</button>
          <button onClick={displayNumber1} value={5}>5</button>
          <button onClick={displayNumber1} value={6}>6</button>
          <button onClick={displayNumber1} value={7}>7</button>
          <button onClick={displayNumber1} value={8}>8</button>
          <button onClick={displayNumber1} value={9}>9</button>
          <button onClick={displayNumber1} value={0}>0</button>
          <button onClick={clearScrean1}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={displayOperator} value={"+"}>+</button>
          <button onClick={displayOperator} value={"-"}>-</button>
          <button onClick={displayOperator} value={"*"}>*</button>
          <button onClick={displayOperator} value={"÷"}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          <button onClick={displayNumber2} value={1}>1</button>
          <button onClick={displayNumber2} value={2}>2</button>
          <button onClick={displayNumber2} value={3}>3</button>
          <button onClick={displayNumber2} value={4}>4</button>
          <button onClick={displayNumber2} value={5}>5</button>
          <button onClick={displayNumber2} value={6}>6</button>
          <button onClick={displayNumber2} value={7}>7</button>
          <button onClick={displayNumber2} value={8}>8</button>
          <button onClick={displayNumber2} value={9}>9</button>
          <button onClick={displayNumber2} value={0}>0</button>
          <button onClick={clearScrean2} >Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={displayAnswer}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
