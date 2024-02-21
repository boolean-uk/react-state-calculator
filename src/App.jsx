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
                FirstNumber === 0 ? 1 : parseFloat(`${FirstNumber}1`)
              )
            }
          >
            1
          </button>

          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 2 : parseFloat(`${FirstNumber}2`)
              )
            }
          >
            2
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 3 : parseFloat(`${FirstNumber}3`)
              )
            }
          >
            3
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 4 : parseFloat(`${FirstNumber}4`)
              )
            }
          >
            4
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 5 : parseFloat(`${FirstNumber}5`)
              )
            }
          >
            5
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 6 : parseFloat(`${FirstNumber}6`)
              )
            }
          >
            6
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 7 : parseFloat(`${FirstNumber}7`)
              )
            }
          >
            7
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 8 : parseFloat(`${FirstNumber}8`)
              )
            }
          >
            8
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber === 0 ? 9 : parseFloat(`${FirstNumber}9`)
              )
            }
          >
            9
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber.toString().includes(".")
                  ? `${FirstNumber}0`
                  : parseFloat(`${FirstNumber}0`)
              )
            }
          >
            0
          </button>
          <button
            onClick={() =>
              setFirstNumber(
                FirstNumber.toString().includes(".")
                  ? FirstNumber
                  : `${FirstNumber}.`
              )
            }
          >
            .
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
                SecondNumber === 0 ? 1 : parseFloat(`${SecondNumber}1`)
              )
            }
          >
            1
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 2 : parseFloat(`${SecondNumber}2`)
              )
            }
          >
            2
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 3 : parseFloat(`${SecondNumber}3`)
              )
            }
          >
            3
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 4 : parseFloat(`${SecondNumber}4`)
              )
            }
          >
            4
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 5 : parseFloat(`${SecondNumber}5`)
              )
            }
          >
            5
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 6 : parseFloat(`${SecondNumber}6`)
              )
            }
          >
            6
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 7 : parseFloat(`${SecondNumber}7`)
              )
            }
          >
            7
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 8 : parseFloat(`${SecondNumber}8`)
              )
            }
          >
            8
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber === 0 ? 9 : parseFloat(`${SecondNumber}9`)
              )
            }
          >
            9
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber.toString().includes(".")
                  ? `${SecondNumber}0`
                  : parseFloat(`${SecondNumber}0`)
              )
            }
          >
            0
          </button>
          <button
            onClick={() =>
              setSecondNumber(
                SecondNumber.toString().includes(".")
                  ? SecondNumber
                  : `${SecondNumber}.`
              )
            }
          >
            .
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
