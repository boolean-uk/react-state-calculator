import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

export default function CalculatorPanelNumbers({ value, setValue }) {
  const [stored, setStored] = useState(0);
  const buttons = [];

  for (let i = 0; i <= 9; i++) {
    buttons.push(
      <CalculatorButton setValue={setValue} value={value} key={`button-${i}`}>
        {i}
      </CalculatorButton>
    );
  }

  return (
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">
        {buttons}
        <button key={"button-decimal"}>.</button>
        <button key={"button-clear"} onClick={() => setValue(0)}>
          Clear
        </button>
        <button key={"button-store"} onClick={() => setStored(value)}>
          Store
        </button>
        <button key={"button-recall"} onClick={() => setValue(stored)}>
          Recall
        </button>
      </div>
    </div>
  );
}
