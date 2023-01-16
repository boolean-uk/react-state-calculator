import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function numberToUse(event) {
    if (number == 0) {
      setNumber(event.target.innerText);
    } else {
      setNumber(number + event.target.innerText);
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
        <p>+</p>
        <div className="numbers">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>0</p>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
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
