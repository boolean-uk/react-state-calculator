import { useState } from "react";
import CalculatorPanelNumbers from "./CalculatorPanelNumbers";
import CalculatorPanelOperators from "./CalculatorPanelOperators";

export default function Calculator() {
  const [firstValue, setFirstValue] = useState(0);
  const [operator, setOperator] = useState("+");
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    switch (operator) {
      case "+":
        setResult(firstValue + secondValue);
        break;
      case "-":
        setResult(firstValue - secondValue);
        break;
      case "*":
        setResult(firstValue * secondValue);
        break;
      case "÷":
        setResult(firstValue / secondValue);
        break;
    }
  };

  return (
    <div className="calculator">
      <CalculatorPanelNumbers setValue={setFirstValue} value={firstValue} />
      <CalculatorPanelOperators setValue={setOperator} value={operator} />
      <CalculatorPanelNumbers setValue={setSecondValue} value={secondValue} />
      <div className="panel answer">
        <p>{result.toFixed(2)}</p>
        <div>
          <button onClick={() => calculateResult()}>=</button>
        </div>
      </div>
    </div>
  );
}
