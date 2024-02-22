import CalculatorButton from "./CalculatorButton";

export default function CalculatorPanelOperators({ value, setValue }) {
  return (
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">
        <CalculatorButton setValue={setValue}>+</CalculatorButton>
        <CalculatorButton setValue={setValue}>-</CalculatorButton>
        <CalculatorButton setValue={setValue}>*</CalculatorButton>
        <CalculatorButton setValue={setValue}>÷</CalculatorButton>
      </div>
    </div>
  );
}
