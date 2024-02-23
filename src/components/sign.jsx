/* eslint-disable react/prop-types */
// OperationPanel.jsx
import React from 'react';

function OperationPanel({ sign, setSign }) {
  return (
    <div className="panel">
      <p>{sign}</p>
      <div className="numbers">
        {['+', '-', '*', '÷'].map((operation) => (
          <button key={operation} onClick={() => setSign(operation)}>
            {operation}
          </button>
        ))}
      </div>
    </div>
  );
}

export default OperationPanel;
