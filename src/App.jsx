import "./App.css"
import {useState} from 'react'


function App() {
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState(0)
  const [stored, setStored] = useState(0)

  const setFirst = (input) => {
    let oldVal = firstNum
    let newVal = input

    if (oldVal === 0){
      setFirstNum(newVal)
    }
    if (oldVal === 0 && newVal === 0){
      return
    } 
    else if (oldVal !== 0) {
    setFirstNum((`${oldVal}${newVal}`))
    }
  }

  const setSecond = (input) => {
    let oldVal = secondNum
    let newVal = input

    if (oldVal === 0){
      setSecondNum(newVal)
    }
    if (oldVal === 0 && newVal === 0){
      return
    } 
    else if (oldVal !== 0) {
    setSecondNum((`${oldVal}${newVal}`))
    }
  }


  const Calculate = () => {
    let a = parseFloat(firstNum)
    let b = parseFloat(secondNum)
  
    switch(operator){
      case "+":
          setResult(a + b);
          break;
      case "-":
          setResult(a - b);
          break;
      case "*":
          setResult(a * b);
          break;
      case "÷":
          setResult(a / b);
          break;
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          <button onClick={() => setFirst(1)}>1</button>
          <button onClick={() => setFirst(2)}>2</button>
          <button onClick={() => setFirst(3)}>3</button>
          <button onClick={() => setFirst(4)}>4</button>
          <button onClick={() => setFirst(5)}>5</button>
          <button onClick={() => setFirst(6)}>6</button>
          <button onClick={() => setFirst(7)}>7</button>
          <button onClick={() => setFirst(8)}>8</button>
          <button onClick={() => setFirst(9)}>9</button>
          <button onClick={() => setFirst(0)}>0</button>
          <button onClick={()=>{setFirstNum(0)}}>Clear</button>
        <button onClick={()=>{setFirstNum(stored)}}>Recall</button>
        </div>
      </div>
      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={() => setSecond(1)}>1</button>
          <button onClick={() => setSecond(2)}>2</button>
          <button onClick={() => setSecond(3)}>3</button>
          <button onClick={() => setSecond(4)}>4</button>
          <button onClick={() => setSecond(5)}>5</button>
          <button onClick={() => setSecond(6)}>6</button>
          <button onClick={() => setSecond(7)}>7</button>
          <button onClick={() => setSecond(8)}>8</button>
          <button onClick={() => setSecond(9)}>9</button>
          <button onClick={() => setSecond(0)}>0</button>
        <button onClick={() => {setSecondNum(0)}}>Clear</button>
        <button onClick={()=>{setSecondNum(stored)}}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <button onClick={()=>{Calculate()}}>=</button>
        <p>{stored}</p>
        <button onClick={()=>{setStored(result)}}>Store</button>
      </div>
    </div>
  )
}
export default App
