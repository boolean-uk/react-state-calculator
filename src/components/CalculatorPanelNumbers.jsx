import CalculatorButton from "./CalculatorButton";

export default function CalculatorPanelNumbers({ value, setValue }) {
  const buttons = [];
  for (let i = 0; i <= 9; i++) {
    buttons.push(
      <CalculatorButton setValue={setValue} value={value}>
        {i}
      </CalculatorButton>
    );
  }
  buttons.push(<button onClick={() => setValue(0)}>Clear</button>);

  return (
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">{buttons}</div>
    </div>
  );
}
