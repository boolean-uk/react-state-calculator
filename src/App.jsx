import { useState } from 'react';
import "./App.css"


function App() {

  //first number keypad 
  const [numberOne, setNumberOne] = useState(0)
  // remove button for when clearing number
  const remove = () => setNumberOne('')
  //refers to the buttons with the number values
  const keyPadOne = (event) => {
    setNumberOne(numberOne + event.target.innerText)
  }

    //second number keypad
    const [numberTwo, setNumberTwo] = useState(0)
    //remove button for when clearing number 
    const remove2 = () => setNumberTwo('')
    //to display the number on keypad 3
    const keyPad2 = (event) => {
      setNumberTwo(numberTwo + event.target.innerText)
    }


    const [operator, setOperator] = useState('')
    const [equals, setEquals] = useState(0)

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
            <button onClick={keyPadOne}>1</button>
            <button onClick={keyPadOne}>2</button>
            <button onClick={keyPadOne}>3</button>
            <button onClick={keyPadOne}>4</button>
            <button onClick={keyPadOne}>5</button>
            <button onClick={keyPadOne}>6</button>
            <button onClick={keyPadOne}>7</button>
            <button onClick={keyPadOne}>8</button>
            <button onClick={keyPadOne}>9</button>
            <button onClick={keyPadOne}>0</button>
            <button onClick={remove}>Clear</button>
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
            <button onClick={keyPad2}>1</button>
            <button onClick={keyPad2}>2</button>
            <button onClick={keyPad2}>3</button>
            <button onClick={keyPad2}>4</button>
            <button onClick={keyPad2}>5</button>
            <button onClick={keyPad2}>6</button>
            <button onClick={keyPad2}>7</button>
            <button onClick={keyPad2}>8</button>
            <button onClick={keyPad2}>9</button>
            <button onClick={keyPad2}>0</button>
            <button onClick={remove2}>Clear</button>
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
