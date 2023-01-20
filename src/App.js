import { useState } from 'react';
import "./App.css"

function App() { 

  const [leftNum, updateLeftNum] = useState(0);
  const [operator, updateOperator] = useState('+');
  const [rightNum, updateRightNum] = useState(0);
  const [result, updateResult] = useState(0);

  
  const calculate = () => {
    let a = leftNum;
    let b = rightNum;
    
    if (operator === '+') {
      updateResult(a + b);
    }
    else if (operator === '-') {
      updateResult(a - b);
    }
    else if (operator === '*') {
      updateResult(a * b);
    }
    else if (operator === '÷') {
      updateResult(a / b)
    }   
    
  }


  return (
    <div className="calculator">
        <div className="panel">
          <p>{leftNum}</p>
          <div className="numbers">
            <button onClick={ () => updateLeftNum(1)}>1</button>
            <button onClick={ () => updateLeftNum(2)}>2</button>
            <button onClick={ () => updateLeftNum(3)}>3</button>
            <button onClick={ () => updateLeftNum(4)}>4</button>
            <button onClick={ () => updateLeftNum(5)}>5</button>
            <button onClick={ () => updateLeftNum(6)}>6</button>
            <button onClick={ () => updateLeftNum(7)}>7</button>
            <button onClick={ () => updateLeftNum(8)}>8</button>
            <button onClick={ () => updateLeftNum(9)}>9</button>
            <button onClick={ () => updateLeftNum(0)}>0</button>
            <button onClick={ () => updateLeftNum(0)}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={ () => updateOperator('+')}>+</button>
            <button onClick={ () => updateOperator('-')}>-</button>
            <button onClick={ () => updateOperator('*')}>*</button>
            <button onClick={ () => updateOperator('÷')}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{rightNum}</p>
          <div className="numbers">
            <button onClick={ () => updateRightNum(1)}>1</button>
            <button onClick={ () => updateRightNum(2)}>2</button>
            <button onClick={ () => updateRightNum(3)}>3</button>
            <button onClick={ () => updateRightNum(4)}>4</button>
            <button onClick={ () => updateRightNum(5)}>5</button>
            <button onClick={ () => updateRightNum(6)}>6</button>
            <button onClick={ () => updateRightNum(7)}>7</button>
            <button onClick={ () => updateRightNum(8)}>8</button>
            <button onClick={ () => updateRightNum(9)}>9</button>
            <button onClick={ () => updateRightNum(0)}>0</button>
            <button onClick={ () => updateRightNum(0)}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button onClick={calculate}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
