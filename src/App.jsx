import "./App.css"
import { useState } from "react"




function App() {

  const [number, setNumber] = useState('0');
  const [operator, setOperator] = useState('')
  const [numberTwo, setNumberTwo] = useState('0');
  const [total, setTotal] = useState(0)
  const [storeNumberOne, setStoreOne] = useState('0')
  const [storeNumberTwo, setStoreTwo] = useState('0')

  const handleNumber = (event) => {
    if (number === '0') {
      setNumber(event.target.innerText)
    } else {
      setNumber(number + event.target.innerText)
    }
  }

  const handleOperator = (event) => setOperator(event.target.innerText)

  const handleNumberTwo = (event) => {
    if (numberTwo === '0') {
      setNumberTwo(event.target.innerText)
    } else {
      setNumberTwo(numberTwo + event.target.innerText)
    }
  }
  const handleTotal = () => {
    if (operator === '+') {
      setTotal(parseInt(number) + parseInt(numberTwo))
    } else if (operator === '-') {
      setTotal(parseInt(number) - parseInt(numberTwo))
    } else if (operator === '*') {
      setTotal(parseInt(number) * parseInt(numberTwo))
    } else if (operator === '÷') {
      setTotal(parseInt(number) / parseInt(numberTwo))
    } else {
      setTotal(0)
    }
  }
  
  return (
    <div className="calculator">
      <div className="panel">
        <p>{number}</p>
        <div className="numbers">
          <button onClick={handleNumber}>1</button>
          <button onClick={handleNumber}>2</button>
          <button onClick={handleNumber}>3</button>
          <button onClick={handleNumber}>4</button>
          <button onClick={handleNumber}>5</button>
          <button onClick={handleNumber}>6</button>
          <button onClick={handleNumber}>7</button>
          <button onClick={handleNumber}>8</button>
          <button onClick={handleNumber}>9</button>
          <button onClick={handleNumber}>0</button>
          <button onClick={handleNumber}>.</button>
          <button onClick={() => setNumber('0')}>Clear</button>
          <button onClick={() => setStoreOne(number)}>Store</button>
          <button onClick={() => setNumber(storeNumberOne)}>Restore</button>

        </div>
        <p>Stored: {storeNumberOne}</p>
    
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
        <p>{numberTwo}</p>
        <div className="numbers">
          <button onClick={handleNumberTwo}>1</button>
          <button onClick={handleNumberTwo}>2</button>
          <button onClick={handleNumberTwo}>3</button>
          <button onClick={handleNumberTwo}>4</button>
          <button onClick={handleNumberTwo}>5</button>
          <button onClick={handleNumberTwo}>6</button>
          <button onClick={handleNumberTwo}>7</button>
          <button onClick={handleNumberTwo}>8</button>
          <button onClick={handleNumberTwo}>9</button>
          <button onClick={handleNumberTwo}>0</button>
          <button onClick={handleNumberTwo}>.</button>
          <button onClick={() => setNumberTwo('0')}>Clear</button>
          <button onClick={() => setStoreTwo(numberTwo)}>Store</button>
          <button onClick={() => setNumberTwo(storeNumberTwo)}>Restore</button>

        </div>
        <p>Stored: {storeNumberTwo}</p>

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