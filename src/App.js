import "./App.css"
import {useState} from 'react'


function App() { 
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const [operator, setOperator] = useState(0);
  const [result, setResult] = useState(0);
  //const [adding, setAdding] = useState(0);

  const handleNumberClick = (num) => {
    setNumber1((prevNumber) => {
      const newNumber = prevNumber === 0 ? num : Number(`${prevNumber}${num}`);
      return newNumber;
    });
  };

  const handleClearClick = () => {
    setNumber1(0);
  }; 

  const handleNumber2Click = (num) => {
    setNumber2((prevNumber) => {
      const newNumber = prevNumber === 0 ? num : Number(`${prevNumber}${num}`);
      return newNumber;
    })
  };

  const handleClearClick2 = () => {
    setNumber2(0);
  }

  const handleOperator = (op) => {
    setOperator(op)
  }

  // const addingFunction = () => {
  //   setAdding(number1 + number2) 

  // }
  const outputResult = () => {
    let finalResult = 0
    if (operator === '+') {
        finalResult = number1 + number2
      } else if (operator === '-') {
        finalResult = number1 - number2
      } else if (operator === '*') {
        finalResult = number1*number2
      } else if (operator === '÷') {
        finalResult = number1/number2
      }
    setResult(finalResult)
  }


  return (
    <div className="calculator">
        <div className="panel">
          <p>{number1}</p>
          <div className="numbers">
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={handleClearClick}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={() => handleOperator('+')}>+</button>
            <button onClick={() => handleOperator('-')}>-</button>
            <button onClick={() => handleOperator('*')}>*</button>
            <button onClick={() => handleOperator('÷')}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{number2}</p>
          <div className="numbers">
            <button onClick={() => handleNumber2Click(1)}>1</button>
            <button onClick={() => handleNumber2Click(2)}>2</button>
            <button onClick={() => handleNumber2Click(3)}>3</button>
            <button onClick={() => handleNumber2Click(4)}>4</button>
            <button onClick={() => handleNumber2Click(5)}>5</button>
            <button onClick={() => handleNumber2Click(6)}>6</button>
            <button onClick={() => handleNumber2Click(7)}>7</button>
            <button onClick={() => handleNumber2Click(8)}>8</button>
            <button onClick={() => handleNumber2Click(9)}>9</button>
            <button onClick={() => handleNumber2Click(0)}>0</button>
            <button onClick={handleClearClick2}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={() => outputResult()}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
