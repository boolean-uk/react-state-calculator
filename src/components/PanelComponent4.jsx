//import React from "react"
import PropTypes from 'prop-types'; // Import PropTypes


const PanelComponent4 = (props) => {
    PanelComponent4.propTypes = {
        operation: PropTypes.string.isRequired, //  'value' is a string
        setOperation: PropTypes.func.isRequired, //  'setValue' is a function
      };

    const {operation, setOperation} = props;
    
    const handleOperationClick = (operator) => {
        setOperation(operator);
        
      };

  return (
    <div className="panel">
    <p>{operation}</p>
    <div className="numbers">
      <button onClick={() => handleOperationClick('+')}>+</button>
      <button onClick={() => handleOperationClick('-')}>-</button>
      <button onClick={() => handleOperationClick('*')}>*</button>
      <button onClick={() => handleOperationClick('÷')}>÷</button>
    </div>
  </div>
  )
};

export default PanelComponent4;
