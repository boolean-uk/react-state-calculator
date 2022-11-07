import { useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState("0");
  const [operator, setOperator] = useState("+");
  const [number2, setNumber2] = useState("0");
  const [result, calculateResult] = useState(0);
  const [storedResult, setstoreResult] = useState(0);

  const assignNumber1 = (event) => {
    if (event.target.innerText === "Recall") {
      setNumber1(storedResult);
    } else if (number1.includes('.') && event.target.innerText === '.') {
      return
    } else if (number1 === '0' && event.target.innerText === '.') {
      setNumber1(number1 + event.target.innerText);
    } else if (number1 === event.target.innerText && number1 === "0") {
      return;
    } else if (event.target.innerText !== "0" && number1 === "0") {
      setNumber1(event.target.innerText);
    } else if (event.target.innerText === 'Clear') {
      setNumber1('0')
    } else if (
      event.target.innerText !== "Clear" &&
      event.target.innerText !== "0"
    ) {
      setNumber1("");
      setNumber1(number1 + event.target.innerText);
    } else if (event.target.innerText === '0' && number1 !== '0') {
      setNumber1(number1 + event.target.innerText);
    } else {
      setNumber1("0");
      console.log('number is now 0')
    }
    console.log(event.target.innerText);
    console.log(typeof number1, number1);
  };

  const assignOperator = (event) => {
    setOperator(event.target.innerText);

    console.log(operator);
  };

  const assignNumber2 = (event) => {
    console.log(event.target.innerText);
    if (event.target.innerText === "Recall") {
      setNumber2(storedResult);
    } else if (number2.includes('.') && event.target.innerText === '.') {
      return
    } else if (number2 === '0' && event.target.innerText === '.') {
      setNumber2(number2 + event.target.innerText);
    } else if (number2 === event.target.innerText && number2 === "0") {
      return;
    } else if (event.target.innerText !== "0" && number2 === "0") {
      setNumber2(event.target.innerText);
    } else if (event.target.innerText === 'Clear') {
      setNumber2('0')
    } else if (
      event.target.innerText !== "Clear" &&
      event.target.innerText !== "0"
    ) {
      setNumber2("");
      setNumber2(number2 + event.target.innerText);
    } else if (event.target.innerText === '0' && number2 !== '0') {
      setNumber2(number2 + event.target.innerText);
    } else {
      setNumber2("0");
    }
  };

  const assignResult = (event) => {
    switch (operator) {
      case "+":
        let totalPlus = parseFloat(number1) + parseFloat(number2)
        const stringLengthPlus = totalPlus.toString().length
        console.log(stringLengthPlus)
        let splitPlus = totalPlus.toString().split('')
        console.log(splitPlus)
        if (stringLengthPlus > 10) {
          while (splitPlus.includes('.') === true && splitPlus[splitPlus.length-2] === '0') {
            console.log('true')
            splitPlus.pop()
            console.log(splitPlus)
          }
          splitPlus.pop()
          console.log(splitPlus)
          calculateResult(splitPlus)
        } else {
          calculateResult(parseFloat(number1) + parseFloat(number2))
        }
        break;
      case "-":
        let minusResult = parseFloat(number1) - parseFloat(number2)
        calculateResult(Math.round(minusResult * 1000) / 1000)
        break;
      case "*":
        let multiplyResult = parseFloat(number1) * parseFloat(number2)
        calculateResult(Math.round(multiplyResult * 1000) / 1000)
        break;
      case "÷":
        let divideResult = parseFloat(number1) / parseFloat(number2)
        calculateResult(Math.round(divideResult * 1000) / 1000)
        break;
      case "store":
        setstoreResult();
        break;
      default:
        console.log("No Value found");
    }
    console.log(result)
    
  };

  const assignStoreResult = (event) => {
    setstoreResult(result.toString());
    console.log(storedResult);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number1}</p>
        <div className="numbers">
          <button onClick={assignNumber1}>1</button>
          <button onClick={assignNumber1}>2</button>
          <button onClick={assignNumber1}>3</button>
          <button onClick={assignNumber1}>4</button>
          <button onClick={assignNumber1}>5</button>
          <button onClick={assignNumber1}>6</button>
          <button onClick={assignNumber1}>7</button>
          <button onClick={assignNumber1}>8</button>
          <button onClick={assignNumber1}>9</button>
          <button onClick={assignNumber1}>0</button>
          <button onClick={assignNumber1}>Clear</button>
          <button onClick={assignNumber1}>.</button>
          <button onClick={assignNumber1}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={assignOperator}>+</button>
          <button onClick={assignOperator}>-</button>
          <button onClick={assignOperator}>*</button>
          <button onClick={assignOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{number2}</p>
        <div className="numbers">
          <button onClick={assignNumber2}>1</button>
          <button onClick={assignNumber2}>2</button>
          <button onClick={assignNumber2}>3</button>
          <button onClick={assignNumber2}>4</button>
          <button onClick={assignNumber2}>5</button>
          <button onClick={assignNumber2}>6</button>
          <button onClick={assignNumber2}>7</button>
          <button onClick={assignNumber2}>8</button>
          <button onClick={assignNumber2}>9</button>
          <button onClick={assignNumber2}>0</button>
          <button onClick={assignNumber2}>Clear</button>
          <button onClick={assignNumber2}>.</button>
          <button onClick={assignNumber2}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div onClick={assignResult}>
          <button>=</button>
        </div>
        <div onClick={assignStoreResult}>
          <button>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
