import "./App.css"
import { useState } from "react"


function App() { 
  //we need to look after 4 states
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result,setResult] = useState(0);
  const numbers = [1,2,3,4,5,6,7,8,9,0]
  //we will also need some onClick functions
  const clickNumber = (event) => {
    if(event.target.className ==='num1'){
      setNumber1(event.target.innerText)
    } else if (event.target.className ==='num2'){
      setNumber2(event.target.innerText)
    }
  }
 
  const clickOperator = (event) => {
    setOperator(event.target.innerText)
  }
  const clickClear = (event) => {
    if(event.target.className === "num1"){
      setNumber1(0)
    } else {
      setNumber2(0)
    }
    // console.log(event);
  }
  const clickResult = (event) => {
    if(operator === '+'){
      setResult(Number(number1) + Number(number2))
    } 
    if ( operator === '-'){
      setResult(Number(number1) - Number(number2))
    } 
    if (operator === '*'){
      setResult(Number(number1) * Number(number2))
    } 
    if (operator === '÷'){
      //js will add 'infinity' when trying to divide by 0
      setResult (Number(number1) / Number(number2))
    }
    
  };
  const clickStore = (event) => {
    if(event.target.className ==='store2'){
      setNumber2(result)
    } else {
      setNumber1(result)
    }
  }
  return (
    <div className="calculator">
        <div className="panel">
          <p>{number1}</p>
          <div className="numbers">
            <button onClick = {clickNumber} className = "num1">1</button>
            <button onClick = {clickNumber} className = "num1">3</button>
            <button onClick = {clickNumber} className = "num1">2</button>
            <button onClick = {clickNumber} className = "num1">4</button>
            <button onClick = {clickNumber} className = "num1">5</button>
            <button onClick = {clickNumber} className = "num1">6</button>
            <button onClick = {clickNumber} className = "num1">7</button>
            <button onClick = {clickNumber} className = "num1">8</button>
            <button onClick = {clickNumber} className = "num1">9</button>
            <button onClick = {clickNumber} className = "num1">0</button>
            <button onClick = {clickClear} className = "num1">Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick = {clickOperator}>+</button>
            <button onClick = {clickOperator}>-</button>
            <button onClick = {clickOperator}>*</button>
            <button onClick = {clickOperator}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{number2}</p>
          <div className="numbers">
            <button onClick = {clickNumber} className = "num2">1</button>
            <button onClick = {clickNumber} className = "num2">2</button>
            <button onClick = {clickNumber} className = "num2">3</button>
            <button onClick = {clickNumber} className = "num2">4</button>
            <button onClick = {clickNumber} className = "num2">5</button>
            <button onClick = {clickNumber} className = "num2">6</button>
            <button onClick = {clickNumber} className = "num2">7</button>
            <button onClick = {clickNumber} className = "num2">8</button>
            <button onClick = {clickNumber} className = "num2">9</button>
            <button onClick = {clickNumber} className = "num2">0</button>
            <button onClick = {clickClear}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick = {clickResult}>=</button>
          </div>
          <div>
              <button onClick = {clickStore}>Store as the first number!</button>
          </div>
          <div>
              <button onClick = {clickStore} className = 'store2'>Store as the second number!</button>
          </div>
        </div>
    </div>
  )
}

export default App
const Button = ({value}) => <button>{value}</button>