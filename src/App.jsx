import { useState } from "react"
import "./App.css"

function App() {
  // Field states
  const [firstNum, setFirstNum] = useState('0')
  const [secondNum, setSecondNum] = useState('0')
  const [answer, setAnswer] = useState('0')
  const [operation, setOperation] = useState('+')

  // Stored answer state
  const [stored, setStored] = useState('0')

  // Button arrays
  const numberButtons = ['1','2','3','4','5','6','7','8','9','0','.']
  const operationButtons = ['+','-','*','÷']

  // Calculates answer based on selected operation
  const calculate = () => {
    switch(operation) {
      case '+':
        setAnswer(parseFloat(firstNum) + parseFloat(secondNum))
        break
      case '-':
        setAnswer(parseFloat(firstNum) - parseFloat(secondNum))
        break
      case '*':
        setAnswer(parseFloat(firstNum) * parseFloat(secondNum))
        break
      case '÷':
        // Checks if user tries to divide by 0
        if (parseFloat(secondNum) === 0) {
          setAnswer('YOU CANNOT DIVIDE BY ZERO!!!!! :(')
        } else {
          setAnswer(parseFloat(firstNum) / parseFloat(secondNum))
        }
        break
      default:
        setAnswer(0)
        break
    }
  }

  // Add number (or dot) to first and second operation (appendNum does the thinking)
  const addToFirstNum = (numToAppend) => setFirstNum(appendNum(firstNum, numToAppend))
  const addToSecondNum = (numToAppend) => setSecondNum(appendNum(secondNum, numToAppend))

  const appendNum = (num, numToAppend) => {
    // handle operations for when number is 0
    if (num === '0') {
      if (numToAppend === '.') {
        return '0.'
      }
      return numToAppend
    }
    // Check if user tries to add dot to number that has dot
    if (num.includes('.') && numToAppend === '.') {
      return num
    }
    return num + numToAppend
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNum}</p>
        <div className="numbers">
          { // Create buttons from number buttons array
          numberButtons.map((num) => (
            <button key={num} onClick={() => addToFirstNum(num)}>{num}</button>
          ))
          }
          <button key={'clear'} onClick={() => setFirstNum('0')}>Clear</button>
          <button key={'recall'} onClick={() => setFirstNum(stored)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          { // Create buttons from operation buttons array
          operationButtons.map((op) => (
            <button key={op} onClick={() => setOperation(op)}>{op}</button>
          ))
          }
        </div>
      </div>

      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
        { // Create buttons from number buttons array
        numberButtons.map((num) => (
            <button key={num} onClick={() => addToSecondNum(num)}>{num}</button>
          ))
          }
          <button key={'clear'} onClick={() => setSecondNum('0')}>Clear</button>
          <button key={'recall'}  onClick={() => setSecondNum(stored)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calculate}>=</button>
          <button onClick={() => setStored(answer.toString())}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
