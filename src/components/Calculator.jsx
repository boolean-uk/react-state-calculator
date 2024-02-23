import React, { useState } from "react";
import Operator from './Operator.jsx'
import Numbers from "./Numbers.jsx";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [storedValue, setStoredValue] = useState(0);

  const CalculateResult = () => {
  const num1 = parseFloat(firstNumber)
  const num2 = parseFloat(secondNumber)

  switch(operator) {
      case '+':
          setResult("= " + (num1 + num2))
          break
      case '-':
          setResult("= " + (num1 - num2))
          break
      case '*':
          setResult("= " + (num1 * num2))
          break
      case '÷':
          setResult("= " + (num1 / num2))
          break
      default:
          setResult(0)
  }
 }

 const Store = () => {
    setStoredValue(result)
 }

 const Recall = () => {
    setResult(storedValue)
 }

 const Clear = () => {
    setFirstNumber(0)
    setOperator("")
    setSecondNumber(0)
    setResult("")
 }

  return (
    <div className="calculator">
      <Numbers setValue={setFirstNumber} value={firstNumber} />
      <Operator setValue={setOperator} value={operator}  />
      <Numbers setValue={setSecondNumber} value={secondNumber} />
      <div className="panel answer">
        <p>{result}</p>
      <button onClick={CalculateResult}>=</button>
      <button onClick={Store}>Store</button>
      <button onClick={Recall}>Recall</button>
      <button onClick={Clear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;

