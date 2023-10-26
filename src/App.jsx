import "./App.css"
import { useState } from "react"


let clear = true

function App() {

  const [number, setNumber] = useState('0')
  const [operator, setOperator] = useState('')
  const [numberTwo, setNumberTwo] = useState('0');
  const [total, setTotal] = useState('0')

  const handleNumber = (event) => {
    if (clear === true) {
      setNumber(event.target.value)
      clear = false
    } else if (clear === false) {
      setNumber(number + event.target.value)
    }
    console.log(clear)
  }

  const handleOperator = (event) => setOperator(event.target.value)

  const handleNumberTwo = (event) => {
    if (clear === true) {
      setNumberTwo(event.target.value)
      clear = false
    } else if (clear === false) {
      setNumberTwo(numberTwo + event.target.value)
    }
  }

  const numberClear = () => {
    setNumber('0')
    clear = true
  }

  const numberClearTwo = () => {
    setNumberTwo('0')
    clear = true
  }

  const handleTotal = () => setTotal()
  

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number}</p>
        <div className="numbers">
          <button value={'1'} onClick={handleNumber}>1</button>
          <button value={'2'} onClick={handleNumber}>2</button>
          <button value={'3'} onClick={handleNumber}>3</button>
          <button value={'4'} onClick={handleNumber}>4</button>
          <button value={'5'} onClick={handleNumber}>5</button>
          <button value={'6'} onClick={handleNumber}>6</button>
          <button value={'7'} onClick={handleNumber}>7</button>
          <button value={'8'} onClick={handleNumber}>8</button>
          <button value={'9'} onClick={handleNumber}>9</button>
          <button value={'0'} onClick={handleNumber}>0</button>
          <button onClick={numberClear}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button value={'+'} onClick={handleOperator}>+</button>
          <button value={'-'} onClick={handleOperator}>-</button>
          <button value={'*'} onClick={handleOperator}>*</button>
          <button value={'/'} onClick={handleOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberTwo}</p>
        <div className="numbers">
          <button value={'1'} onClick={handleNumberTwo}>1</button>
          <button value={'2'} onClick={handleNumberTwo}>2</button>
          <button value={'3'} onClick={handleNumberTwo}>3</button>
          <button value={'4'} onClick={handleNumberTwo}>4</button>
          <button value={'5'} onClick={handleNumberTwo}>5</button>
          <button value={'6'} onClick={handleNumberTwo}>6</button>
          <button value={'7'} onClick={handleNumberTwo}>7</button>
          <button value={'8'} onClick={handleNumberTwo}>8</button>
          <button value={'9'} onClick={handleNumberTwo}>9</button>
          <button value={'0'} onClick={handleNumberTwo}>0</button>
          <button onClick={numberClearTwo}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{total}</p>
        <div>
          <button onClick={handleTotal}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
