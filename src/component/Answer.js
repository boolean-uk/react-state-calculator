import React from "react";

function Answer({ answer, handleClick, setStoredValue }) {
  return (
    <div className="panel answer">
      <p>{answer}</p>
      <div>
        <button onClick={handleClick}>=</button>
        <button onClick={() => setStoredValue(answer)}>Store</button>
      </div>
    </div>
  );
}

export default Answer;
