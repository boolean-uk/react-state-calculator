import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [numberRightSide, setNumPanelTwo] = useState(0);
  const [symbolPanel, setSymbolPanel] = useState(0);
  setSymbolPanel("");

  function numberToUse(event) {
    if (number == 0) {
      setNumber(event.target.innerText);
    } else {
      setNumber(number + event.target.innerText);
    }
  }

  function numPanelTwo(event) {
    if (numberRightSide == 0) {
      setNumPanelTwo(event.target.innerText);
    } else {
      setNumPanelTwo(numberRightSide + event.target.innerText);
    }
  }

  function handleSymbolPanel(event)
  {
    const symbol = event.target.innerText;
    if(symbol === '+' || symbol === '-' || symbol === '÷' || symbol === '*')
    {
      setSymbolPanel(symbol);
    }
    else
    {
      setSymbolPanel("");
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number}</p>
        <div className="numbers">
          <button onClick={numberToUse}>1</button>
          <button onClick={numberToUse}>2</button>
          <button onClick={numberToUse}>3</button>
          <button onClick={numberToUse}>4</button>
          <button onClick={numberToUse}>5</button>
          <button onClick={numberToUse}>6</button>
          <button onClick={numberToUse}>7</button>
          <button onClick={numberToUse}>8</button>
          <button onClick={numberToUse}>9</button>
          <button onClick={numberToUse}>0</button>
          <button
            onClick={() => {
              setNumber(0);
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{symbolPanel}</p>
        <div className="numbers">
          <button onClick={handleSymbolPanel}>+</button>
          <button onClick={handleSymbolPanel}>-</button>
          <button onClick={handleSymbolPanel}>*</button>
          <button onClick={handleSymbolPanel}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberRightSide}</p>
        <div className="numbers">
          <button onClick={numPanelTwo}>1</button>
          <button onClick={numPanelTwo}>2</button>
          <button onClick={numPanelTwo}>3</button>
          <button onClick={numPanelTwo}>4</button>
          <button onClick={numPanelTwo}>5</button>
          <button onClick={numPanelTwo}>6</button>
          <button onClick={numPanelTwo}>7</button>
          <button onClick={numPanelTwo}>8</button>
          <button onClick={numPanelTwo}>9</button>
          <button onClick={numPanelTwo}>0</button>
          <button
            onClick={() => {
              setNumPanelTwo(0);
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
