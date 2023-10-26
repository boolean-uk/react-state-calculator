import { useState } from "react";
import "./App.css"

function App() {
  //varibles 
  const [firstNumber , setFirstNumber] = useState('0')
  const [secondNumber , setSecondNumber] = useState('0')
  const [operator, setOperator] = useState('+')
  const [result , setResult] = useState('0')
    //function to make the event 
    function first(event) {
      if(firstNumber === '0'){
        setFirstNumber(event.target.innerText)
      }else {
        setFirstNumber(firstNumber + event.target.innerText)
      }
    }

    //for the second number
    function second(event) {
      if(secondNumber === '0'){
        setSecondNumber(event.target.innerText)
      }else {
        setSecondNumber(secondNumber + event.target.innerText)
      }
    }

    //function for the result
    function totalResult(){
      if(operator === '+'){
        setResult(parseInt(firstNumber)+ parseInt(secondNumber))
      }else if (operator === '-'){
        setResult(parseInt(firstNumber)- parseInt(secondNumber))
      }else if (operator === '*'){
        setResult(parseInt(firstNumber)* parseInt(secondNumber))
      }else if (operator === '/'){
        setResult(parseInt(firstNumber)/ parseInt(secondNumber))
      }
    }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={event =>first(event)}>1</button>
          <button onClick={event =>first(event)}>2</button>
          <button onClick={event =>first(event)}>3</button>
          <button onClick={event =>first(event)}>4</button>
          <button onClick={event =>first(event)}>5</button>
          <button onClick={event =>first(event)}>6</button>
          <button onClick={event =>first(event)}>7</button>
          <button onClick={event =>first(event)}>8</button>
          <button onClick={event =>first(event)}>9</button>
          <button onClick={event =>first(event)}>0</button>
          <button onClick={()=>setFirstNumber('0')}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={(event)=>setOperator(event.target.innerText)}>-</button>
          <button onClick={(event)=>setOperator(event.target.innerText)}>+</button>
          <button onClick={(event)=>setOperator(event.target.innerText)}>*</button>
          <button onClick={(event)=>setOperator(event.target.innerText)}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={event =>second(event)}>1</button>
          <button onClick={event =>second(event)}>2</button>
          <button onClick={event =>second(event)}>3</button>
          <button onClick={event =>second(event)}>4</button>
          <button onClick={event =>second(event)}>5</button>
          <button onClick={event =>second(event)}>6</button>
          <button onClick={event =>second(event)}>7</button>
          <button onClick={event =>second(event)}>8</button>
          <button onClick={event =>second(event)}>9</button>
          <button onClick={event =>second(event)}>0</button>
          <button onClick={()=>setSecondNumber('0')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => totalResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App
