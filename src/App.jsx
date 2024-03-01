import { useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState("0");
  const [store, setStore] = useState("0");

  const updateFirstNumber = (e) => {
    if (firstNumber === "0") {
      setFirstNumber(e.target.value);
    } else if (e.target.innerText === "Clear") {
      setFirstNumber(e.target.value);
    } else {
      setFirstNumber(firstNumber + e.target.value);
    }
  };

  const updateSecondNumber = (e) => {
    if (secondNumber === "0") {
      setSecondNumber(e.target.value);
    } else if (e.target.innerText === "Clear") {
      setSecondNumber(e.target.value);
    } else {
      setSecondNumber(secondNumber + e.target.value);
    }
  };

  const updateOperator = (e) => setOperator(e.target.value);

  const updateAnswer = () => {
    if (operator === "÷") {
      setAnswer(
        parseFloat(eval(`${firstNumber} / ${secondNumber}`).toFixed(8))
      );
    } else {
      setAnswer(
        parseFloat(
          eval(`${firstNumber} ${operator} ${secondNumber}`).toFixed(8)
        )
      );
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button value="1" onClick={updateFirstNumber}>
            1
          </button>
          <button value="2" onClick={updateFirstNumber}>
            2
          </button>
          <button value="3" onClick={updateFirstNumber}>
            3
          </button>
          <button value="4" onClick={updateFirstNumber}>
            4
          </button>
          <button value="5" onClick={updateFirstNumber}>
            5
          </button>
          <button value="6" onClick={updateFirstNumber}>
            6
          </button>
          <button value="7" onClick={updateFirstNumber}>
            7
          </button>
          <button value="8" onClick={updateFirstNumber}>
            8
          </button>
          <button value="9" onClick={updateFirstNumber}>
            9
          </button>
          <button value="0" onClick={updateFirstNumber}>
            0
          </button>
          <button value="0" onClick={updateFirstNumber}>
            Clear
          </button>
          <button onClick={() => setFirstNumber(store)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button value="+" onClick={updateOperator}>
            +
          </button>
          <button value="-" onClick={updateOperator}>
            -
          </button>
          <button value="*" onClick={updateOperator}>
            *
          </button>
          <button value="÷" onClick={updateOperator}>
            ÷
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button value="1" onClick={updateSecondNumber}>
            1
          </button>
          <button value="2" onClick={updateSecondNumber}>
            2
          </button>
          <button value="3" onClick={updateSecondNumber}>
            3
          </button>
          <button value="4" onClick={updateSecondNumber}>
            4
          </button>
          <button value="5" onClick={updateSecondNumber}>
            5
          </button>
          <button value="6" onClick={updateSecondNumber}>
            6
          </button>
          <button value="7" onClick={updateSecondNumber}>
            7
          </button>
          <button value="8" onClick={updateSecondNumber}>
            8
          </button>
          <button value="9" onClick={updateSecondNumber}>
            9
          </button>
          <button value="0" onClick={updateSecondNumber}>
            0
          </button>
          <button value="0" onClick={updateSecondNumber}>
            Clear
          </button>
          <button onClick={() => setSecondNumber(store)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={updateAnswer}>=</button>
          <button onClick={() => setStore(answer)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
