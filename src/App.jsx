import "./App.css"
import {useState} from 'react'


function App() {
  const [firstNum, setFirstNum] = useState("0")
  const [secondNum, setSecondNum] = useState("0")
  const [operator, setOperator] = useState("+")
  const [result, setResult] = useState("0")

  //const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  //const operators = ["+", "-", "*", "/"]

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
          <button onClick={() => setFirstNum(1)}>1</button>
          <button onClick={() => setFirstNum(2)}>2</button>
          <button onClick={() => setFirstNum(3)}>3</button>
          <button onClick={() => setFirstNum(4)}>4</button>
          <button onClick={() => setFirstNum(5)}>5</button>
          <button onClick={() => setFirstNum(6)}>6</button>
          <button onClick={() => setFirstNum(7)}>7</button>
          <button onClick={() => setFirstNum(8)}>8</button>
          <button onClick={() => setFirstNum(9)}>9</button>
          <button onClick={() => setFirstNum(0)}>0</button>
        </div>
        <button onClick={()=>{setFirstNum('0')}}>Clear</button>
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
          <button onClick={() => setSecondNum(1)}>1</button>
          <button onClick={() => setSecondNum(2)}>2</button>
          <button onClick={() => setSecondNum(3)}>3</button>
          <button onClick={() => setSecondNum(4)}>4</button>
          <button onClick={() => setSecondNum(5)}>5</button>
          <button onClick={() => setSecondNum(6)}>6</button>
          <button onClick={() => setSecondNum(7)}>7</button>
          <button onClick={() => setSecondNum(8)}>8</button>
          <button onClick={() => setSecondNum(9)}>9</button>
          <button onClick={() => setSecondNum(0)}>0</button>
        <button onClick={() => {setSecondNum('0')}}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <button onClick={()=>{Calculate()}}>=</button>
      </div>
    </div>
  )
}
export default App
