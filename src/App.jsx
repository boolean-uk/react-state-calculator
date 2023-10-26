import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("+");
  const [secondNumber, setSecondNumber] = useState("0");
  const [resultValue, setResultValue] = useState("0");

  const [store, setStore] = useState("");

  const updateFirstNum = (e) => {
    const newValue =
      firstNumber === "0"
        ? e.target.innerText
        : firstNumber + e.target.innerText;
    setFirstNumber(newValue);
  };

  const updateSecondNum = (e) => {
    const newValue =
      secondNumber === "0"
        ? e.target.innerText
        : secondNumber + e.target.innerText;
    setSecondNumber(newValue);
  };

  function calculateResult() {
    if (operation === "+") {
      setResultValue(parseFloat(firstNumber) + parseFloat(secondNumber));
    } else if (operation === "-") {
      setResultValue(parseFloat(firstNumber) - parseFloat(secondNumber));
    } else if (operation === "*") {
      setResultValue(parseFloat(firstNumber) * parseFloat(secondNumber));
    } else if (operation === "÷") {
      setResultValue(parseFloat(firstNumber) / parseFloat(secondNumber));
    }
  }

  // Extension 2
  const storeNumber = () => setStore(resultValue);

  const recallFirstNumFromStore = () => setFirstNumber(store);

  const recallSecondNumFromStore = () => setSecondNumber(store);

  // Extension 3

  const addDecimalToFirstNum = (e) => {
    if (!firstNumber.includes(".")) {
      setFirstNumber(firstNumber + e.target.innerText);
    }
  };

  const addDecimalToSecondNum = (e) => {
    if (!secondNumber.includes(".")) {
      setSecondNumber(secondNumber + e.target.innerText);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={(e) => updateFirstNum(e)}>1</button>
          <button onClick={(e) => updateFirstNum(e)}>2</button>
          <button onClick={(e) => updateFirstNum(e)}>3</button>
          <button onClick={(e) => updateFirstNum(e)}>4</button>
          <button onClick={(e) => updateFirstNum(e)}>5</button>
          <button onClick={(e) => updateFirstNum(e)}>6</button>
          <button onClick={(e) => updateFirstNum(e)}>7</button>
          <button onClick={(e) => updateFirstNum(e)}>8</button>
          <button onClick={(e) => updateFirstNum(e)}>9</button>
          <button onClick={(e) => updateFirstNum(e)}>0</button>
          <button onClick={() => setFirstNumber("0")}>Clear</button>
          <button onClick={(e) => addDecimalToFirstNum(e)}>.</button>
          <button onClick={() => recallFirstNumFromStore()}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={(e) => setOperation(e.target.innerText)}>+</button>
          <button onClick={(e) => setOperation(e.target.innerText)}>-</button>
          <button onClick={(e) => setOperation(e.target.innerText)}>*</button>
          <button onClick={(e) => setOperation(e.target.innerText)}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={(e) => updateSecondNum(e)}>1</button>
          <button onClick={(e) => updateSecondNum(e)}>2</button>
          <button onClick={(e) => updateSecondNum(e)}>3</button>
          <button onClick={(e) => updateSecondNum(e)}>4</button>
          <button onClick={(e) => updateSecondNum(e)}>5</button>
          <button onClick={(e) => updateSecondNum(e)}>6</button>
          <button onClick={(e) => updateSecondNum(e)}>7</button>
          <button onClick={(e) => updateSecondNum(e)}>8</button>
          <button onClick={(e) => updateSecondNum(e)}>9</button>
          <button onClick={(e) => updateSecondNum(e)}>0</button>
          <button onClick={() => setSecondNumber("0")}>Clear</button>
          <button onClick={(e) => addDecimalToSecondNum(e)}>.</button>
          <button onClick={() => recallSecondNumFromStore()}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{resultValue}</p>
        <div>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => storeNumber()}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
