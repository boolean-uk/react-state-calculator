import { useState } from "react"
import "./App.css"

function App() {
  const [numOne, setNumOne] = useState(0);
  const [numTwo, setNumTwo] = useState(0);
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState(0);

  const numOneClick = (e) => {
    setNumOne(e.target.innerText)
  };

  const numTwoClick = (e) => {
    setNumTwo(e.target.innerText)
  };

  const opClick = (e) => {
    setOperator(e.target.innerText)
  };

  const calc = () => {
    switch(operator) {
      case "+":
        setAnswer(Number(numOne) + Number(numTwo));
        break;
      case "*":
        setAnswer(numOne * numTwo);
        break;
      case "-":
        setAnswer(numOne - numTwo);
        break;
      case "รท":
        setAnswer(numOne / numTwo);
        break;
      default: 
        setAnswer(0)
        break;
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => setNumOne(1)}>1</button>
          <button onClick={numOneClick}>2</button>
          <button onClick={numOneClick}>3</button>
          <button onClick={numOneClick}>4</button>
          <button onClick={numOneClick}>5</button>
          <button onClick={numOneClick}>6</button>
          <button onClick={numOneClick}>7</button>
          <button onClick={numOneClick}>8</button>
          <button onClick={numOneClick}>9</button>
          <button onClick={numOneClick}>0</button>
          <button onClick={() => setNumOne(0)}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={opClick}>+</button>
          <button onClick={opClick}>-</button>
          <button onClick={opClick}>*</button>
          <button onClick={opClick}>รท</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={numTwoClick}>1</button>
          <button onClick={numTwoClick}>2</button>
          <button onClick={numTwoClick}>3</button>
          <button onClick={numTwoClick}>4</button>
          <button onClick={numTwoClick}>5</button>
          <button onClick={numTwoClick}>6</button>
          <button onClick={numTwoClick}>7</button>
          <button onClick={numTwoClick}>8</button>
          <button onClick={numTwoClick}>9</button>
          <button onClick={numTwoClick}>0</button>
          <button onClick={() => setNumTwo("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calc}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App