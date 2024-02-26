import { useState } from "react";
import "./App.css";

function App() {
  const [numberResult, setNumberResult] = useState(0);
  const [storedNumber, setStoredNumber] = useState(0);
  const [displayNumber1, setDisplayNumber1] = useState(0);
  const [displayNumber2, setDisplayNumber2] = useState(0);
  const [displayNumber3, setDisplayNumber3] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");

  //Handling input, so that number is the number clicked, and whichNumber is the first or second panel
  const handleNumberInput = (number, whichNumber) => {
    if (whichNumber === 1) {
      setDisplayNumber1(number);
    } else if (whichNumber === 2) {
      setDisplayNumber2(number);
    }
  };

  //Clearing the displayed nubmer in panel 1 and 2 if the clear button is clicked
  const clearNumbers1 = () => {
    setDisplayNumber1(0);
  };

  const clearNumbers2 = () => {
    setDisplayNumber2(0);
  };

  //Switch statement that checks which operator button is clicked and then does the corresponding calculation
  const resultNumber = () => {
    let operationResult = 0;

    switch (currentOperation) {
      case "add":
        operationResult = parseFloat(displayNumber1 + displayNumber2);
        break;
      case "subtract":
        operationResult = parseFloat(displayNumber1 - displayNumber2);
        break;
      case "multiply":
        operationResult = parseFloat(displayNumber1 * displayNumber2);
        break;
      case "modulus":
        operationResult = parseFloat(displayNumber1 % displayNumber2);
        break;
      default:
        console.log("Choose operator");
        return;
    }

    //Sets the result of the calculation in the numberResult variable
    setNumberResult(operationResult);
  };

  //Sets the resutl into the storedNumber variable
  const storeNumber = () => {
    setStoredNumber(numberResult);
  };

  //Displays the stored number if the id of the recall button is 1 or 2 (panel 1 and 2) and then sets the displayed number of panel 1 aor 2 to the stored number, else sets the displayed number to the number already there
  const displayStoredNumber = (event) => {
    const id = event.target.id;
    if (id === "1") {
      setDisplayNumber1(storedNumber);
    } else if (id === "2") {
      setDisplayNumber2(storedNumber);
    } else {
      setDisplayNumber1(displayNumber1);
      setDisplayNumber2(displayNumber2);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{displayNumber1}</p>
        <div className="numbers">
          <button onClick={() => handleNumberInput(1, 1)}>1</button>
          <button onClick={() => handleNumberInput(2, 1)}>2</button>
          <button onClick={() => handleNumberInput(3, 1)}>3</button>
          <button onClick={() => handleNumberInput(4, 1)}>4</button>
          <button onClick={() => handleNumberInput(5, 1)}>5</button>
          <button onClick={() => handleNumberInput(6, 1)}>6</button>
          <button onClick={() => handleNumberInput(7, 1)}>7</button>
          <button onClick={() => handleNumberInput(8, 1)}>8</button>
          <button onClick={() => handleNumberInput(9, 1)}>9</button>
          <button onClick={() => handleNumberInput(0, 1)}>0</button>
          <button onClick={clearNumbers1}>Clear</button>
          <button id={"1"} onClick={displayStoredNumber}>
            Recall
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{displayNumber3}</p>
        <div className="numbers">
          <button
            onClick={() => {
              setCurrentOperation("add");
              setDisplayNumber3("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setCurrentOperation("subtract");
              setDisplayNumber3("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setCurrentOperation("multiply");
              setDisplayNumber3("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              setCurrentOperation("modulus");
              setDisplayNumber3("%");
            }}
          >
            %
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{displayNumber2}</p>
        <div className="numbers">
          <button onClick={() => handleNumberInput(1, 2)}>1</button>
          <button onClick={() => handleNumberInput(2, 2)}>2</button>
          <button onClick={() => handleNumberInput(3, 2)}>3</button>
          <button onClick={() => handleNumberInput(4, 2)}>4</button>
          <button onClick={() => handleNumberInput(5, 2)}>5</button>
          <button onClick={() => handleNumberInput(6, 2)}>6</button>
          <button onClick={() => handleNumberInput(7, 2)}>7</button>
          <button onClick={() => handleNumberInput(8, 2)}>8</button>
          <button onClick={() => handleNumberInput(9, 2)}>9</button>
          <button onClick={() => handleNumberInput(0, 2)}>0</button>
          <button onClick={clearNumbers2}>Clear</button>
          <button id={"2"} onClick={displayStoredNumber}>
            Recall
          </button>
        </div>
      </div>
      <div className="panel answer">
        <p>{numberResult}</p>
        <div>
          <button onClick={resultNumber}>=</button>
          <button onClick={storeNumber}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
