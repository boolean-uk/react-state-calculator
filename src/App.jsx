import { useState } from "react"
import "./App.css"

function App() {
  const [numOne, setNumOne] = useState('0')
  const [numTwo, setNumTwo] = useState('0')
  const [operator, setOperator] = useState('')
  const [result, setResult] = useState('0')
  const [storedNum, setStoredNum] = useState('0')
  const [historyNum, setHistoryNum] = useState('0')
  const [historyNum2, setHistoryNum2] = useState('0')


  const handleLeftNumberClick = (number) => {
    // do something
    
    if (numOne === '0'){
      setNumOne(number)
    }else {
      setNumOne(numOne + number)
    }
 }

 function handleRightNumberClick(number2) {
  if (numTwo === '0'){
    setNumTwo(number2)
  }else {
    setNumTwo(numTwo + number2)
  }
 }

 const handleOperate = (e) => {
   setOperator(e.target.innerText)
 }

 const calculate = () => {
   if (operator === "+"){
    setResult(Number(numOne) + Number(numTwo))
   } 
   if (operator === "-"){
    setResult(Number(numOne) - Number(numTwo))
   }
   if (operator === "*") {
    setResult(Number(numOne) * Number(numTwo))
   }
   if (operator === '÷'){
    setResult(Number(numOne) / Number(numTwo))
   }
   setHistoryNum(numOne)
   setHistoryNum2(numTwo)
   setNumOne(numOne => numOne = '0')
   setNumTwo(numTwo => numTwo = '0')
 }

 function handleClear() {
  setNumOne(numOne => numOne = '0')
  setNumTwo(numTwo => numTwo = '0')
  setOperator(operator => operator =  '')
  setResult(result => result = '0')
 }

 const handleHistoryNum1 = () => {
  setNumOne(historyNum)
 }

 const handleHistoryNum2 = () => {
  setNumTwo(historyNum2)
 }

 const handleStore = () => {
    setStoredNum(result)
 }

 const handleRecallNum1 = () => {
   if (storedNum !== '0'){
    setNumOne(result)
   }
 }

const handleRecallNum2 = () => {
  if (storedNum !== '0') {
    setNumTwo(result)
  }
}

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => handleLeftNumberClick('1')}>1</button>
          <button onClick={() => handleLeftNumberClick('2')}>2</button>
          <button onClick={() => handleLeftNumberClick('3')}>3</button>
          <button onClick={() => handleLeftNumberClick('4')}>4</button>
          <button onClick={() => handleLeftNumberClick('5')}>5</button>
          <button onClick={() => handleLeftNumberClick('6')}>6</button>
          <button onClick={() => handleLeftNumberClick('7')}>7</button>
          <button onClick={() => handleLeftNumberClick('8')}>8</button>
          <button onClick={() => handleLeftNumberClick('9')}>9</button>
          <button onClick={() => handleLeftNumberClick('0')}>0</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div>
          <button onClick={handleRecallNum1}>Recall</button>
          <button onClick={handleHistoryNum1}>Previous Number</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperate}>+</button>
          <button onClick={handleOperate}>-</button>
          <button onClick={handleOperate}>*</button>
          <button onClick={handleOperate}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={() => handleRightNumberClick('1')}>1</button>
          <button onClick={() => handleRightNumberClick('2')}>2</button>
          <button onClick={() => handleRightNumberClick('3')}>3</button>
          <button onClick={() => handleRightNumberClick('4')}>4</button>
          <button onClick={() => handleRightNumberClick('5')}>5</button>
          <button onClick={() => handleRightNumberClick('6')}>6</button>
          <button onClick={() => handleRightNumberClick('7')}>7</button>
          <button onClick={() => handleRightNumberClick('8')}>8</button>
          <button onClick={() => handleRightNumberClick('9')}>9</button>
          <button onClick={() => handleRightNumberClick('0')}>0</button>
          <button onClick={handleClear}>Clear</button>
        </div>
        <div>
          <button onClick={handleRecallNum2}>Recall</button>
          <button onClick={handleHistoryNum2}>Previous Number</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculate}>=</button>
          <button className="store" onClick={handleStore}>Store</button>
          <button className="store">Stored operate: {storedNum}</button>
        </div>
      </div>
    </div>
  )
}

export default App
