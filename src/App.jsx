import { useState } from "react";
import "./App.css";

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
          <button value={1} onClick={setFirstNumber}>
            1
          </button>
          <button value={2} onClick={setFirstNumber}>
            2
          </button>
          <button value={3} onClick={setFirstNumber}>
            3
          </button>
          <button value={4} onClick={setFirstNumber}>
            4
          </button>
          <button value={5} onClick={setFirstNumber}>
            5
          </button>
          <button value={6} onClick={setFirstNumber}>
            6
          </button>
          <button value={7} onClick={setFirstNumber}>
            7
          </button>
          <button value={8} onClick={setFirstNumber}>
            8
          </button>
          <button value={9} onClick={setFirstNumber}>
            9
          </button>
          <button value={0} onClick={setFirstNumber}>
            0
          </button>
          <button onClick={clearFirstNumber}>Clear</button>
        </div>
      </div>
      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button value={"+"} onClick={setOperation}>
            +
          </button>
          <button value={"-"} onClick={setOperation}>
            -
          </button>
          <button value={"*"} onClick={setOperation}>
            *
          </button>
          <button value={"÷"} onClick={setOperation}>
            ÷
          </button>
        </div>
      </div>
      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button value={1} onClick={setSecondNumber}>
            1
          </button>
          <button value={2} onClick={setSecondNumber}>
            2
          </button>
          <button value={3} onClick={setSecondNumber}>
            3
          </button>
          <button value={4} onClick={setSecondNumber}>
            4
          </button>
          <button value={5} onClick={setSecondNumber}>
            5
          </button>
          <button value={6} onClick={setSecondNumber}>
            6
          </button>
          <button value={7} onClick={setSecondNumber}>
            7
          </button>
          <button value={8} onClick={setSecondNumber}>
            8
          </button>
          <button value={9} onClick={setSecondNumber}>
            9
          </button>
          <button value={0} onClick={setSecondNumber}>
            0
          </button>
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
