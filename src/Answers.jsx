import React from "react";
export default function Answers({
  answer,
  setAnswer,
  roundToTwo,
  calculate,
  numOne,
  operator,
  numTwo,
  setStoreValue
}) {
  return <div className="panel answer">
          <p>{answer}</p>
          <div className="actions">
            <button onClick={() => setAnswer(roundToTwo(calculate(numOne, operator, numTwo)))}>=</button>
            <button onClick={() => {
        setStoreValue(answer);
        setAnswer(0);
      }}>Store</button>
          </div>
        </div>;
}
  