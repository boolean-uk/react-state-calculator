import { useState } from "react"
import "./App.css"


function App() {
  const [value, setValue] = useState(0)
  const [operator, setOperator] = useState("+")
  const [value2 , setValue2] = useState (0)
  const [total , setTotal] =useState (0)
 console.log(value)
 const handlenumber = (e) => {
  setValue(e.target.value)
 }

 const handlenumber2 = (e) => {
  setValue2( e.target.value)
 }

 const answer = () => {
  setTotal(Number(value) + Number(value2))
 }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{value}</p>
        <div className="numbers">
          <button value={1} onClick={handlenumber} >1</button>
          <button value={2} onClick={handlenumber}>2</button>
          <button value={3} onClick={handlenumber}>3</button>
          <button value={4} onClick={handlenumber}>4</button>
          <button value={5} onClick={handlenumber}>5</button>
          <button value={6} onClick={handlenumber}>6</button>
          <button value={7} onClick={handlenumber}>7</button>
          <button value={8} onClick={handlenumber}>8 </button>
          <button value={9} onClick={handlenumber}>9</button>
          <button value={0} onClick={handlenumber}>0</button>
          <button value={""} onClick={handlenumber}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button >+</button>
          <button >-</button>
          <button >*</button>
          <button >÷</button>
        </div>-
      </div>

      <div className="panel">
        <p>{value2}</p>
        <div className="numbers">
        <button value={1} onClick={handlenumber2} >1</button>
          <button value={2} onClick={handlenumber2}>2</button>
          <button value={3} onClick={handlenumber2}>3</button>
          <button value={4} onClick={handlenumber2}>4</button>
          <button value={5} onClick={handlenumber2}>5</button>
          <button value={6} onClick={handlenumber2}>6</button>
          <button value={7} onClick={handlenumber2}>7</button>
          <button value={8} onClick={handlenumber2}>8 </button>
          <button value={9} onClick={handlenumber2}>9</button>
          <button value={0} onClick={handlenumber2}>0</button>
          <button value={""} onClick={handlenumber2}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={answer}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
