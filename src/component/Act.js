import React from "react";

function Act({ act, setAct }) {
  const handleClick = (e) => { 
    if (e.target.innerText.length === 1) {
      setAct(e.target.innerText);
    }
  };
  return (
    <div className="panel">
      <p>{act}</p>
      <div onClick={handleClick} className="numbers">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>÷</button>
      </div>
    </div>
  );
}

export default Act;
