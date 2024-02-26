import { useState } from "react";
import "./App.css";
import NumberPanel from "./components/NumberPanel";
import OperationPanel from "./components/OperationPanel";
import QuickButton from "./components/QuickButton";

function App() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState(0);
  const [stored, setStored] = useState(null);
  const calculateAnswer = () => {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(numOne) + parseFloat(numTwo);
        break;
      case "-":
        result = parseFloat(numOne) - parseFloat(numTwo);
        break;
      case "*":
        result = parseFloat(numOne) * parseFloat(numTwo);
        break;
      case "/":
      case "÷":
        result = numTwo === 0 ? "error" : parseFloat(numOne) / parseFloat(numTwo);
        break;
      default:
        result = "Invalid operation";
    }
    setAnswer(result);
  };
  const storeAnswer = () => {
    setStored(answer);
  };
  const getStored = () => {
    return stored;
  };
  return (
    <div className="calculator">
      <NumberPanel
        selectedNumber={numOne}
        onNumChange={setNumOne}
        externalNumber={getStored}
      />
      <OperationPanel selectedValue={operator} onValueChange={setOperator} />
      <NumberPanel
        selectedNumber={numTwo}
        onNumChange={setNumTwo}
        externalNumber={getStored}
      />
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <QuickButton value="=" onClick={() => calculateAnswer()} />
          <QuickButton value="Store" onClick={() => storeAnswer()} />
        </div>
        <p id="stored">{stored !== null ? "Stored: " + stored : ""}</p>
      </div>
    </div>
  );
}

export default App;
