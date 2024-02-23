import { useState } from "react";
import "./App.css";

const Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const Operators = ["+", "-", "*", "÷"];

function App() {
  const [firstNumber, updateFirstNumber] = useState(0);
  const [operation, updateOperation] = useState("+");
  const [secondNumber, updateSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const clearFirstNumber = () => {
    // Description: Sets number to 0 on click "clear"
    console.log(`Cleared first`);
    // updateNumber to 0
    updateFirstNumber(firstNumber * 0);
  };
  const clearSecondNumber = () => {
    // Description: Sets number to 0 on click "clear"
    console.log(`Cleared second`);
    // updateNumber to 0
    updateSecondNumber(secondNumber * 0);
  };

  const setFirstNumber = (event) => {
    // Description: Sets number to provided number on click of number button
    // Input: event
    console.log(`New firstNumber: ${event.currentTarget.value}`);
    // Check if firstNumber is 0, if 0, set to button value, otherwise add onto
    // Turn firstNumber into string for easier comparison
    const nr = firstNumber.toString();
    if (nr === "0") {
      updateFirstNumber(event.currentTarget.value);
    } else {
      // updateNumber to value on button (add onto)
      updateFirstNumber(firstNumber + event.currentTarget.value);
    }
  };
  const setOperation = (event) => {
    // Description: Sets number to provided number on click of number button
    // Input: event
    console.log(`New operation: ${event.currentTarget.value}`);
    // updateOperaton to value on button
    updateOperation(event.currentTarget.value);
  };
  const setSecondNumber = (event) => {
    // Description: Sets number to provided number on click of number button
    // Input: event
    console.log(`New secondNumber: ${event.currentTarget.value}`);
    // Check if secondNumber is 0, if 0, set to button value, otherwise add onto
    // Turn secondNumber into string for easier comparison
    const nr = secondNumber.toString();
    if (nr === "0") {
      updateSecondNumber(event.currentTarget.value);
    } else {
      // updateNumber to value on button (add onto)
      updateSecondNumber(secondNumber + event.currentTarget.value);
    }
  };

  const computeAnswer = () => {
    // Description: Takes the two numbers and combine them using the chosen operator
    console.log(`Answering...`);
    switch (operation) {
      case "+":
        setResult(Number(firstNumber) + Number(secondNumber));
        break;
      case "-":
        setResult(Number(firstNumber) - Number(secondNumber));
        break;
      case "*":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "÷":
        setResult(Number(firstNumber) / Number(secondNumber));
        break;
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          {Numbers.map((numbers) => {
            return (
              <button key={numbers} value={numbers} onClick={setFirstNumber}>
                {numbers}
              </button>
            );
          })}
          <button onClick={clearFirstNumber}>Clear</button>
        </div>
      </div>
      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          {Operators.map((operators) => {
            return (
              <button key={operators} value={operators} onClick={setOperation}>
                {operators}
              </button>
            );
          })}
        </div>
      </div>
      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          {Numbers.map((numbers) => {
            return (
              <button key={numbers} value={numbers} onClick={setSecondNumber}>
                {numbers}
              </button>
            );
          })}
          <button onClick={clearSecondNumber}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={computeAnswer}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
