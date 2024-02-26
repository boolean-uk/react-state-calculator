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
  const calculateAnswer = () => {
    let result = 0;
    switch (operator) {
      case "+":
        result = numOne + numTwo;
        break;
      case "-":
        result = numOne - numTwo;
        break;
      case "*":
        result = numOne * numTwo;
        break;
      case "/":
      case "÷":
        result = numTwo === 0 ? "error" : numOne / numTwo;
        break;
      default:
        result = "Invalid operation";
    }
    setAnswer(result);
    console.log(numOne, operator, numTwo, answer);
  };
  return (
    <div className="calculator">
      <NumberPanel selectedNumber={numOne} onNumChange={setNumOne} />
      <OperationPanel selectedValue={operator} onValueChange={setOperator} />
      <NumberPanel selectedNumber={numTwo} onNumChange={setNumTwo} />
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <QuickButton value="=" onClick={() => calculateAnswer()} />
        </div>
      </div>
    </div>
  );
}

export default App;
