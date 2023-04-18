import "./App.css"
import {useState} from 'react'

function App() { 
const [num1, setNum1] = useState(0)
// input1 
// operator
const [op, setOperator] = useState("")
// input2
const [num2, setNum2] = useState(0)
// result
const [result, setResult] = useState(0)


const clickNumber1 = (num)=>{
  setNum1(num)
}
// // What's the parameter?
// // the value ofHTML
// clickOperator(operator) +-*÷
const clickOperator = (op)=>{
  setOperator(op)
}
// clickNumber2(num)
const clickNumber2 = (num)=>{
  setNum2(num)
}
// clickEquals(=)
const clickResult = ()=>{
  let result = 0 
  switch(op){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }
  setResult(result)
}
// clickClear1(delete)
const clickClear1 = ()=>{
  setNum1(null)
}
// clickClear2(delete)
const clickClear2 = ()=>{
  setNum2(null)
}




  return (
    <div className="calculator">
        <div className="panel">
          <p>{num1}</p>
          <div className="numbers">
            <button onClick={()=>clickNumber1(1)}>1</button>
            <button onClick={()=>clickNumber1(2)}>2</button>
            <button onClick={()=>clickNumber1(3)}>3</button>
            <button onClick={()=>clickNumber1(4)}>4</button>
            <button onClick={()=>clickNumber1(5)}>5</button>
            <button onClick={()=>clickNumber1(6)}>6</button>
            <button onClick={()=>clickNumber1(7)}>7</button>
            <button onClick={()=>clickNumber1(8)}>8</button>
            <button onClick={()=>clickNumber1(9)}>9</button>
            <button onClick={()=>clickNumber1(0)}>0</button>
            <button onClick={clickClear1}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{op}</p>
          <div className="numbers">
            <button onClick={()=>clickOperator("+")}>+</button>
            <button onClick={()=>clickOperator("-")}>-</button>
            <button onClick={()=>clickOperator("*")}>*</button>
            <button onClick={()=>clickOperator("/")}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{num2}</p>
          <div className="numbers">
            <button onClick={()=>clickNumber2(1)}>1</button>
            <button onClick={()=>clickNumber2(2)}>2</button>
            <button onClick={()=>clickNumber2(3)}>3</button>
            <button onClick={()=>clickNumber2(4)}>4</button>
            <button onClick={()=>clickNumber2(5)}>5</button>
            <button onClick={()=>clickNumber2(6)}>6</button>
            <button onClick={()=>clickNumber2(7)}>7</button>
            <button onClick={()=>clickNumber2(8)}>8</button>
            <button onClick={()=>clickNumber2(9)}>9</button>
            <button onClick={()=>clickNumber2(0)}>0</button>
            <button onClick={clickClear2}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={clickResult}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
