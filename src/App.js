import "./App.css"
import { useState } from "react"

function App() {
  // const [total, action] = useState(0)
  const [num1, updateNum1] = useState('0')
  const [num2, updateNum2] = useState('0')
  const [operator, updateOperator] = useState('+')
  const [total, updateTotal] = useState(0)
  const [storedValue, updateStore] = useState(0)
  
  function handleNum1(event) {
    const inputNumber = event.target.innerText
    
    if (num1 === '0') {
      updateNum1(inputNumber)
      return
    }
    else {
      updateNum1(num1 + inputNumber)
      // console.log(num1)
    }
  }

  function handleNum2(event) {
    const inputNumber = event.target.innerText
    
    if(num2 === '0'){
      updateNum2(inputNumber)
    }
    else{
      updateNum2(num2 + inputNumber)
    }
  }
  function handlePoint2 (){
    if(!num2.includes(".")) {
      updateNum2(num2 + ".")
  }
  }
  function handlePoint1 (){
    if(!num1.includes(".")) {
      updateNum1(num1 + ".")
  }
  }

  function handleOperator(event) {

    updateOperator(event.target.innerText)
  }

  function clearNum1() {
    updateNum1('0')
  }
  function clearNum2() {
    updateNum2('0')
  }

  function calculate() {
    // let subtotal = 0
    if (operator === '+') {
      updateTotal(Number(num1) + Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '-') {
      updateTotal(Number(num1) - Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '*') {
      updateTotal(Number(num1) * Number(num2))
      clearNum1()
      clearNum2()
      return
    }
    if (operator === '÷') {
      updateTotal(Number(num1) / Number(num2))
      clearNum1()
      clearNum2()
      return
    }
  }

  function handleStore (){
    updateStore(total)
    console.log(storedValue)
  }
  function handleRecall1 (){
    updateNum1(storedValue.toString())
  }
  function handleRecall2(){
    updateNum2(storedValue.toString())
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{num1}</p>
        <div className="numbers">
          <button onClick={handleNum1}>1</button>
          <button onClick={handleNum1}>2</button>
          <button onClick={handleNum1}>3</button>
          <button onClick={handleNum1}>4</button>
          <button onClick={handleNum1}>5</button>
          <button onClick={handleNum1}>6</button>
          <button onClick={handleNum1}>7</button>
          <button onClick={handleNum1}>8</button>
          <button onClick={handleNum1}>9</button>
          <button onClick={handleNum1}>0</button>
          <button onClick={clearNum1}>Clear</button>
          <button onClick={handleRecall1}>Recall</button>
          <button onClick={handlePoint1}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperator}>+</button>
          <button onClick={handleOperator}>-</button>
          <button onClick={handleOperator}>*</button>
          <button onClick={handleOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{num2}</p>
        <div className="numbers">
          <button onClick={handleNum2}>1</button>
          <button onClick={handleNum2}>3</button>
          <button onClick={handleNum2}>2</button>
          <button onClick={handleNum2}>4</button>
          <button onClick={handleNum2}>5</button>
          <button onClick={handleNum2}>6</button>
          <button onClick={handleNum2}>7</button>
          <button onClick={handleNum2}>8</button>
          <button onClick={handleNum2}>9</button>
          <button onClick={handleNum2}>0</button>
          <button onClick={clearNum2}>Clear</button>
          <button onClick={handleRecall2}>Recall</button>
          <button onClick={handlePoint2}>.</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <button onClick={handleStore}>Store</button>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
