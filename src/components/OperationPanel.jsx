import { useState } from "react";
import QuickButton from "./QuickButton";
import PropTypes from "prop-types";

function OperationPanel({ onValueChange }) {
  const [selectedValue, setSelectedValue] = useState("+");
  const setValue = (number) => {
    setSelectedValue(number);
    onValueChange(number);
  };
  return (
    <div className="panel">
      <p>{selectedValue}</p>
      <div className="numbers">
        <QuickButton value="+" onClick={setValue} />
        <QuickButton value="-" onClick={setValue} />
        <QuickButton value="*" onClick={setValue} />
        <QuickButton value="÷" onClick={setValue} />
      </div>
    </div>
  );
}

OperationPanel.propTypes = {
  onValueChange: PropTypes.func.isRequired,
};

export default OperationPanel;
