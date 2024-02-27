import "./App.css";
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState(0);
  const [store, setStore] = useState([]);

  const handleNumberClick = (number, type) => {
    let newNumber;
    if (type === 0) {
      if (firstNumber === "0") {
        setFirstNumber(number);
        return;
      }
      if (firstNumber.toString().includes(".") && number === ".") return;
      newNumber = firstNumber.toString() + number.toString();
      setFirstNumber(newNumber);
      return;
    }
    if (secondNumber === "0") {
      setSecondNumber(number);
      return;
    }
    if (secondNumber.toString().includes(".") && number === ".") return;
    newNumber = secondNumber.toString() + number.toString();
    setSecondNumber(newNumber);
  };
  //Reset values
  const handleClear = () => {
    setFirstNumber("0");
    setSecondNumber("0");
    setOperator("+");
    setAnswer(0);
  };

  const handleAnswer = () => {
    switch (operator) {
      case "+":
        setAnswer(parseFloat(firstNumber) + parseFloat(secondNumber));
        break;
      case "-":
        setAnswer(parseFloat(firstNumber) - parseFloat(secondNumber));
        break;
      case "*":
        setAnswer(parseFloat(firstNumber) * parseFloat(secondNumber));
        break;
      case "÷":
        setAnswer(parseFloat(firstNumber) / parseFloat(secondNumber));
        break;
      default:
        setAnswer(0);
    }
  };

  const storeNumbers = () => {
    //Add all numbers to the store
    setStore([...store, { firstNumber, secondNumber, operator, answer }]);
  };

  const recallNumbers = () => {
    //Get the last stored numbers
    const lastStored = store[store.length - 1];
    setFirstNumber(lastStored.firstNumber);
    setSecondNumber(lastStored.secondNumber);
    setOperator(lastStored.operator);
    setAnswer(lastStored.answer);
  };

  const handleOperators = (operator) => {
    setOperator(operator);
  };
  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i} onClick={() => handleNumberClick(i.toString(), 0)}>
              {i}
            </button>
          ))}
          <button onClick={() => handleNumberClick(".", 0)}>.</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={recallNumbers}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => handleOperators("+")}>+</button>
          <button onClick={() => handleOperators("-")}>-</button>
          <button onClick={() => handleOperators("*")}>*</button>
          <button onClick={() => handleOperators("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i} onClick={() => handleNumberClick(i.toString(), 1)}>
              {i}
            </button>
          ))}
          <button onClick={() => handleNumberClick(".", 1)}>.</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={recallNumbers}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleAnswer}>=</button>
          <button onClick={storeNumbers}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
