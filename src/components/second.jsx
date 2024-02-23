/* eslint-disable react/prop-types */
// Second.jsx
import React from 'react';

function Second({ updateValue, setSecond, handleRecallSecond, second }) {
  return (
    <div className="panel">
      <p>{second}</p>
      <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].map((number) => (
          <button key={number} onClick={() => updateValue(number, true)}>
            {number}
          </button>       
        ))}
        <button onClick={() => setSecond("")}>Clear</button>
        <button onClick={handleRecallSecond}>Recall</button>
      </div>
    </div>
  );
}

export default Second;
