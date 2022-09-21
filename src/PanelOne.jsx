import React from "react";
export default function PanelOne({
  numOne,
  updatePanelOne,
  addDecimal,
  setNumOne,
  storeValue
}) {
  return <div className="panel">
          <p>{numOne}</p>
          <div className="numbers">
            <button onClick={() => updatePanelOne(1)}>1</button>
            <button onClick={() => updatePanelOne(2)}>2</button>
            <button onClick={() => updatePanelOne(3)}>3</button>
            <button onClick={() => updatePanelOne(4)}>4</button>
            <button onClick={() => updatePanelOne(5)}>5</button>
            <button onClick={() => updatePanelOne(6)}>6</button>
            <button onClick={() => updatePanelOne(7)}>7</button>
            <button onClick={() => updatePanelOne(8)}>8</button>
            <button onClick={() => updatePanelOne(9)}>9</button>
            <button onClick={() => updatePanelOne(0)}>0</button>
            <button onClick={() => addDecimal(numOne)}>.</button>
            <button onClick={() => setNumOne(0)}>Clear</button>
            <button onClick={() => setNumOne(storeValue)}>Recall</button>
          </div>
        </div>;
}
  