import "./App.css"
import { useState } from "react"    

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [answer, setAnswer] = useState(0)
  const [operator, setOperator] = useState("+")
  const [storedValue, setStoredValue] = useState("")

  const calculate = () => {
    // this block (line 13 to 17) is unecesarry, as the eval function on line 19 
    // handles cases where the number ends with a ","
    let number1 = num1 
    let number2 = num2
    number1 = number1[number1.length-1] === "." ? number1.replace(".","") : number1
    number2 = number2[number2.length-1] === "." ? number2.replace(".","") : number2

    const result = number2 === "0" ? "error" : eval(`${number1} ${operator} ${number2}`)    
    setAnswer(result)
  }    
  
  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1 === "" ? 0 : num1}</p>
        <div className="numbers">          
          <button onClick={() => setNum1(num1 === "0" ? "1" : `${num1}${1}`)}>1</button>
          <button onClick={() => setNum1(num1 === "0" ? "2" : `${num1}${2}`)}>2</button>
          <button onClick={() => setNum1(num1 === "0" ? "3" : `${num1}${3}`)}>3</button>
          <button onClick={() => setNum1(num1 === "0" ? "4" : `${num1}${4}`)}>4</button>
          <button onClick={() => setNum1(num1 === "0" ? "5" : `${num1}${5}`)}>5</button>
          <button onClick={() => setNum1(num1 === "0" ? "6" : `${num1}${6}`)}>6</button>
          <button onClick={() => setNum1(num1 === "0" ? "7" : `${num1}${7}`)}>7</button>
          <button onClick={() => setNum1(num1 === "0" ? "8" : `${num1}${8}`)}>8</button>
          <button onClick={() => setNum1(num1 === "0" ? "9" : `${num1}${9}`)}>9</button>          
          <button onClick={() => setNum1(`${num1}${0}`)}>0</button>
          <button onClick={() => setNum1(num1 === "" || num1.includes(".") ? num1 : `${num1}.`)}>,</button>
          <button onClick={() => setNum1("")}>Clear</button>
          <button onClick={() => setNum1(storedValue)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2 === "" ? 0 : num2}</p>
        <div className="numbers">
          <button onClick={() => setNum2(num2 === "0" ? "1" : `${num2}${1}`)}>1</button>
          <button onClick={() => setNum2(num2 === "0" ? "2" : `${num2}${2}`)}>2</button>
          <button onClick={() => setNum2(num2 === "0" ? "3" : `${num2}${3}`)}>3</button>
          <button onClick={() => setNum2(num2 === "0" ? "4" : `${num2}${4}`)}>4</button>
          <button onClick={() => setNum2(num2 === "0" ? "5" : `${num2}${5}`)}>5</button>
          <button onClick={() => setNum2(num2 === "0" ? "6" : `${num2}${6}`)}>6</button>
          <button onClick={() => setNum2(num2 === "0" ? "7" : `${num2}${7}`)}>7</button>
          <button onClick={() => setNum2(num2 === "0" ? "8" : `${num2}${8}`)}>8</button>
          <button onClick={() => setNum2(num2 === "0" ? "9" : `${num2}${9}`)}>9</button>          
          <button onClick={() => setNum2(`${num2}${0}`)}>0</button>
          <button onClick={() => setNum2(num2 === "" || num2.includes(".") ? num2 : `${num2}.`)}>,</button>
          <button onClick={() => setNum2("")}>Clear</button>
          <button onClick={() => setNum2(storedValue)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calculate}>=</button>
          <button onClick={() => setStoredValue(answer)}>Store Answer</button>
        </div>
      </div>
    </div>
  )
}

export default App
