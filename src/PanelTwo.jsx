import React from "react";

    export default function PanelTwo({numTwo, updatePanelTwo, addDecimal, setNumTwo, storeValue}) {
      return (<div className="panel">
          <p>{numTwo}</p>
          <div className="numbers">
            <button onClick={() => updatePanelTwo(1)}>1</button>
            <button onClick={() => updatePanelTwo(2)}>2</button>
            <button onClick={() => updatePanelTwo(3)}>3</button>
            <button onClick={() => updatePanelTwo(4)}>4</button>
            <button onClick={() => updatePanelTwo(5)}>5</button>
            <button onClick={() => updatePanelTwo(6)}>6</button>
            <button onClick={() => updatePanelTwo(7)}>7</button>
            <button onClick={() => updatePanelTwo(8)}>8</button>
            <button onClick={() => updatePanelTwo(9)}>9</button>
            <button onClick={() => updatePanelTwo(0)}>0</button>
            <button onClick={() => addDecimal(numTwo)}>.</button>
            <button onClick={() => setNumTwo(0)}>Clear</button>
            <button onClick={() => setNumTwo(storeValue)}>Recall</button>
          </div>
        </div>);
    }
  
  