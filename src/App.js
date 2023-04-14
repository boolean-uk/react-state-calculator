import { useState } from "react"
import "./App.css"
import NumberPanel from "./components/NumberPanel";
import CalculationPanel from "./components/CalculationPanel";
import ResultPanel from "./components/ResultPanel";

function App() {

  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  const [calc, setCalc] = useState('+');

  const [result, setResult] = useState(0);


  return (
    <div className="calculator">

      <NumberPanel number={leftNumber} setNumber={setLeftNumber} />

      <CalculationPanel calc={calc} setCalc={setCalc} />
      <NumberPanel number={rightNumber} setNumber={setRightNumber} />

      <ResultPanel result={result} setResult={setResult} calc={calc} leftNumber={leftNumber} rightNumber={rightNumber} />

    </div>
  )

}

export default App
