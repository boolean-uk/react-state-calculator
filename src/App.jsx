import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, updateFirstNumber] = useState(0);
  const [operation, updateOperation] = useState("+");
  const [secondNumber, updateSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const ClearFirst = () => {
    // Description: Sets number to 0 on click "clear"
    console.log(`Cleared first`);
    // updateNumber to 0
    updateFirstNumber(firstNumber * 0);
  };
  const ClearSecond = () => {
    // Description: Sets number to 0 on click "clear"
    console.log(`Cleared second`);
    // updateNumber to 0
    updateSecondNumber(secondNumber * 0);
  };

  const SetfirstNumber = (event) => {
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
  const SetOperation = (event) => {
    // Description: Sets number to provided number on click of number button
    // Input: event
    console.log(`New operation: ${event.currentTarget.value}`);
    // updateOperaton to value on button
    updateOperation(event.currentTarget.value);
  };
  const SetSecondNumber = (event) => {
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

  const Answer = () => {
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
          <button value={1} onClick={SetfirstNumber}>
            1
          </button>
          <button value={2} onClick={SetfirstNumber}>
            2
          </button>
          <button value={3} onClick={SetfirstNumber}>
            3
          </button>
          <button value={4} onClick={SetfirstNumber}>
            4
          </button>
          <button value={5} onClick={SetfirstNumber}>
            5
          </button>
          <button value={6} onClick={SetfirstNumber}>
            6
          </button>
          <button value={7} onClick={SetfirstNumber}>
            7
          </button>
          <button value={8} onClick={SetfirstNumber}>
            8
          </button>
          <button value={9} onClick={SetfirstNumber}>
            9
          </button>
          <button value={0} onClick={SetfirstNumber}>
            0
          </button>
          <button onClick={ClearFirst}>Clear</button>
        </div>
      </div>
      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button value={"+"} onClick={SetOperation}>
            +
          </button>
          <button value={"-"} onClick={SetOperation}>
            -
          </button>
          <button value={"*"} onClick={SetOperation}>
            *
          </button>
          <button value={"÷"} onClick={SetOperation}>
            ÷
          </button>
        </div>
      </div>
      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button value={1} onClick={SetSecondNumber}>
            1
          </button>
          <button value={2} onClick={SetSecondNumber}>
            2
          </button>
          <button value={3} onClick={SetSecondNumber}>
            3
          </button>
          <button value={4} onClick={SetSecondNumber}>
            4
          </button>
          <button value={5} onClick={SetSecondNumber}>
            5
          </button>
          <button value={6} onClick={SetSecondNumber}>
            6
          </button>
          <button value={7} onClick={SetSecondNumber}>
            7
          </button>
          <button value={8} onClick={SetSecondNumber}>
            8
          </button>
          <button value={9} onClick={SetSecondNumber}>
            9
          </button>
          <button value={0} onClick={SetSecondNumber}>
            0
          </button>
          <button onClick={ClearSecond}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={Answer}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
