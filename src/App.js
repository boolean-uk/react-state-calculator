import "./App.css";
import { useState } from "react";

function App() {
  const [numberA, setNumberA] = useState(0);
  const clickNumberA = (event) => {
    let buttonValue = 0;
    let numberToText = numberA.toString()
    if(numberA === 0 && event.target.innerText === '0' && !numberA.toString().includes('.'))
      return    

    if(numberA === 0 && !numberToText.includes('.')){
      buttonValue = event.target.innerText
      setNumberA(buttonValue);
      return
    }
    
    buttonValue = numberA + event.target.innerText
    setNumberA(buttonValue);
  };
  const [numberB, setNumberB] = useState(0);
  const clickNumberB = (event) => {
    let buttonValue = 0;
    if(numberB === 0 && event.target.innerText === '0')
      return

    if(numberB === 0){
      buttonValue = event.target.innerText
      setNumberB(buttonValue);
      return
    }
    buttonValue = numberB + event.target.innerText

    setNumberB(buttonValue);
  };
  const [operator, setOperator] = useState("+");
  const clickOperator = (event) => {
    const operatorValue = event.target.innerText;
    setOperator(operatorValue);
  };
  const [result, setResult] = useState(0);
  const clickEqual = (event) => {
    if (operator === "+") {
      setResult(Number(numberA) + Number(numberB));
    }
    if (operator === "-") {
      setResult(Number(numberA) - Number(numberB));
    }
    if (operator === "*") {
      setResult(Number(numberA) * Number(numberB));
    }
    if (operator === "÷") {
      setResult(Number(numberA) / Number(numberB));
    }
  };

  const [store, setStore] = useState(0)

  const clickStore = () => {
    setStore(result)
  }

  const clickRecallA = () =>{
    setNumberA(store)
  }
  const clickRecallB = () =>{
    setNumberB(store)
  }

  const clickClearA = () => {
    setNumberA(0);
  };
  const clickClearB = () => {
    setNumberB(0);
  };

  const clickDotA = () => {
    let text = numberA.toString();

    if (!text.includes('.')){
      text = text + '.'

      setNumberA(text)

    }      
  }

  const clickDotB = () => {
    let text = numberB.toString();

    if (!text.includes('.')){
      text = text + '.'

      setNumberB(text)

    }      
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p className="numberA">{numberA}</p>
        <div className="numbers">
          <button onClick={clickNumberA}>1</button>
          <button onClick={clickNumberA}>2</button>
          <button onClick={clickNumberA}>3</button>
          <button onClick={clickNumberA}>4</button>
          <button onClick={clickNumberA}>5</button>
          <button onClick={clickNumberA}>6</button>
          <button onClick={clickNumberA}>7</button>
          <button onClick={clickNumberA}>8</button>
          <button onClick={clickNumberA}>9</button>
          <button onClick={clickNumberA}>0</button>
          <button onClick={clickClearA}>Clear</button>
          <button onClick={clickRecallA}>recall</button>
          <button onClick={clickDotA}>.</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={clickOperator}>+</button>
          <button onClick={clickOperator}>-</button>
          <button onClick={clickOperator}>*</button>
          <button onClick={clickOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p className="numberB">{numberB}</p>
        <div className="numbers">
          <button onClick={clickNumberB}>1</button>
          <button onClick={clickNumberB}>2</button>
          <button onClick={clickNumberB}>3</button>
          <button onClick={clickNumberB}>4</button>
          <button onClick={clickNumberB}>5</button>
          <button onClick={clickNumberB}>6</button>
          <button onClick={clickNumberB}>7</button>
          <button onClick={clickNumberB}>8</button>
          <button onClick={clickNumberB}>9</button>
          <button onClick={clickNumberB}>0</button>
          <button onClick={clickClearB}>Clear</button>
          <button onClick={clickRecallB}>recall</button>
          <button onClick={clickDotB}>.</button>

        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={clickEqual}>=</button>
          <button onClick={clickStore}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
