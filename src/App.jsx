import { useState } from "react";
import "./App.css";
import { NumberPanel } from "./Panels/NumberPanel";
import { OperationPanel } from "./Panels/OperationPanel";
import { EqualPanel } from "./Panels/EqualPanel";
import { performCalculation, storeResult } from "./Calculation";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);
  const [saved, setSaved] = useState(null);

  return (
    <div className="calculator">
      <NumberPanel num={num1} setNum={setNum1} saved={saved} />

      <OperationPanel operator={operator} setOperator={setOperator} />

      <NumberPanel num={num2} setNum={setNum2} saved={saved} />

      <EqualPanel
        result={result}
        setResult={setResult}
        saved={saved}
        setSaved={setSaved}
        performCalculation={() =>
          performCalculation(num1, num2, operator, setResult)
        }
        storeResult={() => storeResult(result, setSaved)}
      />
    </div>
  );
}

export default App;
