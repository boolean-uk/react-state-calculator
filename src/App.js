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


  const [storedAnswer, setStoredAnswer] = useState(result);

  return (
    <div className="calculator">

      <NumberPanel setNumber={setLeftNumber} storedAnswer={storedAnswer} />

      <CalculationPanel calc={calc} setCalc={setCalc} />
      <NumberPanel setNumber={setRightNumber} storedAnswer={storedAnswer} />

      <ResultPanel result={result} setResult={setResult} calc={calc} leftNumber={leftNumber} rightNumber={rightNumber} setStoredAnswer={setStoredAnswer} />

    </div>
  )

}

export default App
