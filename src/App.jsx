import { useState } from 'react';
import "./App.css"




function App() {

  //first number keypad 
  const [numberOne, setNumberOne] = useState(0)

    //second number keypad
  const [numberTwo, setNumberTwo] = useState(0)
   

    //the different operators available 
    const [operator, setOperator] = useState('')
    //the sum getting added up 
    const [equals, setEquals] = useState(0)

    // the final result, linked with the sum getting added^
    function finalResult() {
      if (operator === '+') {
        setEquals(parseInt(numberOne) + parseInt(numberTwo))
      }
      else if (operator === '-') {
        setEquals(parseInt(numberOne) - parseInt(numberTwo))
      }
      else if (operator === '*') {
        setEquals(parseInt(numberOne) * parseInt(numberTwo))
      }
      else if (operator === '÷') {
        setEquals(parseInt(numberOne) / parseInt(numberTwo))
      }
    }

    return (
      <div className="calculator">
        <div className="panel">
          <p className='first_value'>{numberOne}</p>
          <div className="numbers">
            <button onClick={() => setNumberOne(1)}>1</button>
            <button onClick={() => setNumberOne(2)}>2</button>
            <button onClick={() => setNumberOne(3)}>3</button>
            <button onClick={() => setNumberOne(4)}>4</button>
            <button onClick={() => setNumberOne(5)}>5</button>
            <button onClick={() => setNumberOne(6)}>6</button>
            <button onClick={() => setNumberOne(7)}>7</button>
            <button onClick={() => setNumberOne(8)}>8</button>
            <button onClick={() => setNumberOne(9)}>9</button>
            <button onClick={() => setNumberOne(0)}>0</button>
            <button onClick={() => setNumberOne(0)}>Clear</button>
          </div>
        </div>

        <div className="panel">
          <p className='operator'>{operator}</p>
          <div className="numbers">
            <button onClick={e => setOperator(e.target.innerText)}>+</button>
            <button onClick={e => setOperator(e.target.innerText)}>-</button>
            <button onClick={e => setOperator(e.target.innerText)}>*</button>
            <button onClick={e => setOperator(e.target.innerText)}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p className='second-name'>{numberTwo}</p>
          <div className="numbers">
            <button onClick={() => setNumberTwo(1)}>1</button>
            <button onClick={() => setNumberTwo(2)}>2</button>
            <button onClick={() => setNumberTwo(3)}>3</button>
            <button onClick={() => setNumberTwo(4)}>4</button>
            <button onClick={() => setNumberTwo(5)}>5</button>
            <button onClick={() => setNumberTwo(6)}>6</button>
            <button onClick={() => setNumberTwo(7)}>7</button>
            <button onClick={() => setNumberTwo(8)}>8</button>
            <button onClick={() => setNumberTwo(9)}>9</button>
            <button onClick={() => setNumberTwo(0)}>0</button>
            <button onClick={() => setNumberTwo(0)}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{equals}</p>
          <div>
            <button onClick={() => finalResult()}>=</button>
          </div>
        </div>
      </div>
    )
  }

export default App
