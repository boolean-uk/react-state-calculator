import { useState } from "react";
import CalculatorPanelNumbers from "./CalculatorPanelNumbers";
import CalculatorPanelOperators from "./CalculatorPanelOperators";

export default function Calculator() {
  const [firstValue, setFirstValue] = useState(0);
  const [operator, setOperator] = useState("+");
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    const a = parseFloat(firstValue);
    const b = parseFloat(secondValue);
    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "÷":
        setResult(a / b);
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
