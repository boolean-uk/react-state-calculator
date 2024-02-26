import { useState } from "react";
import QuickButton from "./QuickButton";
import PropTypes from "prop-types";

function NumberPanel({ onNumChange }) {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const setNumber = (value) => {
    const numberAsString = selectedNumber.toString() + value.toString();
    setSelectedNumber(parseInt(numberAsString));
    onNumChange(parseInt(numberAsString));
  };
  const resetNumber = () => {
    setSelectedNumber(0);
    onNumChange(0);
  };
  return (
    <div className="panel">
      <p>{selectedNumber}</p>
      <div className="numbers">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((number) => (
          <QuickButton key={number} value={number} onClick={setNumber} />
        ))}
        <QuickButton value="Clear" onClick={() => resetNumber()} />
      </div>
    </div>
  );
}

NumberPanel.propTypes = {
  onNumChange: PropTypes.func.isRequired,
};

export default NumberPanel;
