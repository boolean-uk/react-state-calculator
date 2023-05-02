import React, { useState } from "react";

function Calculator() {
  const [panel1Value, setPanel1Value] = useState(0);
  const [panel2Value, setPanel2Value] = useState(0);
  const [answer, setAnswer] = useState(0);

  const handlePanel1ButtonClick = (value) => {
    setPanel1Value(panel1Value * 10 + value);
  };

  const handlePanel2ButtonClick = (value) => {
    setPanel2Value(panel2Value * 10 + value);
  };

  const handleClearButtonClick1 = () => {
    setPanel1Value(0);
    setAnswer(0);
  };

  const handleClearButtonClick2 = () => {
    setPanel2Value(0);
    setAnswer(0);
  };

  const handleCalculateButtonClick = () => {
    setAnswer(panel1Value + panel2Value);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{panel1Value}</p>
        <div className="numbers">
          <button onClick={() => handlePanel1ButtonClick(1)}>1</button>
          <button onClick={() => handlePanel1ButtonClick(2)}>2</button>
          <button onClick={() => handlePanel1ButtonClick(3)}>3</button>
          <button onClick={() => handlePanel1ButtonClick(4)}>4</button>
          <button onClick={() => handlePanel1ButtonClick(5)}>5</button>
          <button onClick={() => handlePanel1ButtonClick(6)}>6</button>
          <button onClick={() => handlePanel1ButtonClick(7)}>7</button>
          <button onClick={() => handlePanel1ButtonClick(8)}>8</button>
          <button onClick={() => handlePanel1ButtonClick(9)}>9</button>
          <button onClick={() => handlePanel1ButtonClick(0)}>0</button>
          <button onClick={handleClearButtonClick1}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          <button onClick={handleCalculateButtonClick}>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{panel2Value}</p>
        <div className="numbers">
          <button onClick={() => handlePanel2ButtonClick(1)}>1</button>
          <button onClick={() => handlePanel2ButtonClick(2)}>2</button>
          <button onClick={() => handlePanel2ButtonClick(3)}>3</button>
          <button onClick={() => handlePanel2ButtonClick(4)}>4</button>
          <button onClick={() => handlePanel2ButtonClick(5)}>5</button>
          <button onClick={() => handlePanel2ButtonClick(6)}>6</button>
          <button onClick={() => handlePanel2ButtonClick(7)}>7</button>
          <button onClick={() => handlePanel2ButtonClick(8)}>8</button>
          <button onClick={() => handlePanel2ButtonClick(9)}>9</button>
          <button onClick={() => handlePanel2ButtonClick(0)}>0</button>
          <button onClick={handleClearButtonClick2}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleCalculateButtonClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

