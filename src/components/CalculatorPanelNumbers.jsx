import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

export default function CalculatorPanelNumbers({ value, setValue }) {
  const [stored, setStored] = useState(0);
  const buttons = [];

  for (let i = 0; i <= 9; i++) {
    buttons.push(
      <CalculatorButton setValue={setValue} value={value}>
        {i}
      </CalculatorButton>
    );
  }

  return (
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">
        {buttons}
        <button onClick={() => setValue(0)}>Clear</button>
        <button onClick={() => setStored(value)}>Store</button>
        <button onClick={() => setValue(stored)}>Recall</button>
      </div>
    </div>
  );
}
