import { useState } from "react";
import QuickButton from "./QuickButton";
import PropTypes from "prop-types";

function NumberPanel({ onNumChange, externalNumber }) {
  const [selectedNumber, setSelectedNumber] = useState(0);
  let lastInput = ''
  const setNumber = (value) => {
    const newNumber = lastInput === '.' ? parseFloat(selectedNumber.toString() + '.' + value.toString()).toFixed(1) : parseFloat(selectedNumber.toString() + value.toString())
    setSelectedNumber(newNumber);
    onNumChange(newNumber);
    lastInput = value
  };
  const resetNumber = () => {
    setSelectedNumber(0);
    onNumChange(0);
  };
  const fetchExternalNumber = () => {
    const num = externalNumber() === null ? 0 : externalNumber()
    setSelectedNumber(num);
    onNumChange(num);
  };
  return (
    <div className="panel">
      <p>{selectedNumber}</p>
      <div className="numbers">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", '.'].map((number) => (
          <QuickButton key={number} value={number} onClick={setNumber} />
        ))}
        <QuickButton value="Clear" onClick={() => resetNumber()} />
        <QuickButton value="Recall" onClick={() => fetchExternalNumber()} />
      </div>
    </div>
  );
}

NumberPanel.propTypes = {
  onNumChange: PropTypes.func.isRequired,
  externalNumber: PropTypes.func,
};

export default NumberPanel;
