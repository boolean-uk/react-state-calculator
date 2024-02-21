import { useState } from "react";

import "./App.css";

function App() {
  const [operator, setOperator] = useState("+");
  const [FirstNumber, setFirstNumber] = useState(0);
  const [SecondNumber, setSecondNumber] = useState(0);
  const [Result, setResult] = useState(0);
  const [StoredValue, setStoredValue] = useState(0);

  function calculate(num1, num2, operator) {
    num1 = parseFloat(num1); // Convert string to number
    num2 = parseFloat(num2);
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    } else {
      throw new Error("Invalid operator");
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{`${FirstNumber}`}</p>
        <div className="numbers">
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 1 : parseInt(`${FirstNumber}1`, 10)
              )
            }
          >
            1
          </button>

          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 2 : parseInt(`${FirstNumber}2`, 10)
              )
            }
          >
            2
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 3 : parseInt(`${FirstNumber}3`, 10)
              )
            }
          >
            3
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 4 : parseInt(`${FirstNumber}4`, 10)
              )
            }
          >
            4
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 5 : parseInt(`${FirstNumber}5`, 10)
              )
            }
          >
            5
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 6 : parseInt(`${FirstNumber}6`, 10)
              )
            }
          >
            6
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 7 : parseInt(`${FirstNumber}7`, 10)
              )
            }
          >
            7
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 8 : parseInt(`${FirstNumber}8`, 10)
              )
            }
          >
            8
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 9 : parseInt(`${FirstNumber}9`, 10)
              )
            }
          >
            9
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 0 : parseInt(`${FirstNumber}0`, 10)
              )
            }
          >
            0
          </button>
          <button onClick={() => setFirstNumber(0)}>Clear</button>
          <button onClick={() => setFirstNumber(StoredValue)}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{`${operator}`}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{`${SecondNumber}`}</p>
        <div className="numbers">
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 1 : parseInt(`${SecondNumber}1`, 10)
              )
            }
          >
            1
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 2 : parseInt(`${SecondNumber}2`, 10)
              )
            }
          >
            2
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 3 : parseInt(`${SecondNumber}3`, 10)
              )
            }
          >
            3
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 4 : parseInt(`${SecondNumber}4`, 10)
              )
            }
          >
            4
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 5 : parseInt(`${SecondNumber}5`, 10)
              )
            }
          >
            5
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 6 : parseInt(`${SecondNumber}6`, 10)
              )
            }
          >
            6
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 7 : parseInt(`${SecondNumber}7`, 10)
              )
            }
          >
            7
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 8 : parseInt(`${SecondNumber}8`, 10)
              )
            }
          >
            8
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 9 : parseInt(`${SecondNumber}9`, 10)
              )
            }
          >
            9
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 0 : parseInt(`${SecondNumber}0`, 10)
              )
            }
          >
            0
          </button>
          <button onClick={() => setSecondNumber(0)}>Clear</button>
          <button onClick={() => setSecondNumber(StoredValue)}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{`${Result}`}</p>
        <div>
          <button
            onClick={() =>
              setResult(
                calculate(`${FirstNumber}`, `${SecondNumber}`, `${operator}`)
              )
            }
          >
            =
          </button>
          <button onClick={() => setStoredValue(Result)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
