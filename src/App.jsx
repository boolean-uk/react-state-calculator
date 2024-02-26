import { useState } from "react"
import "./App.css"

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "÷"];

  /** Initiate stored and its setter */
  const [stored, setStored] = useState(null);
  /** Setter for stored */
  const settingStored = (number) => {
    setStored(number);
  }
  /** Getter for stored */
  const getStored = (target) => {
    if (target === "left") {
      setLeftNumber(stored);
    } else {
      setRightNumber(stored);
    }
  };

  /** Initiate leftNumber and its setter */
  const [leftNumber, setLeftNumber] = useState('0');
  /** Setter for the left number */
  const settingTheLeftNumber = (number) => {
    if (!(number === '.' && leftNumber.includes('.'))) {
      if (leftNumber === '0' && number !== '.') {
        setLeftNumber(number);
      } else {
        setLeftNumber(leftNumber + "" + number);
      }
    }
  }

  /** Initiate operator and its setter */
  const [operator, setOperator] = useState("+");
  /** Setter for the operator */
  const settingTheOperator = (target) => {
    setOperator(target);
  }

  /** Initiate rightNumber and its setter */
  const [rightNumber, setRightNumber] = useState('0');
  /** Setter for the right number */
  const settingTheRightNumber = (number) => {
    if (!(number === "." && rightNumber.includes("."))) {
      if (rightNumber === "0" && number !== ".") {
        setRightNumber(number);
      } else {
        setRightNumber(rightNumber + "" + number);
      }
    }
  }

  /** Clears the given a number and sets it to 0 */
  const clearNumber = (target) => {
    if (target === "left") {
      setLeftNumber('0');
    } else {
      setRightNumber('0');
    }
  }

  /** Initiate answer and its setter */
  const [answer, setAnswer] = useState(0);
  /** Calculate the answer for leftNumber and rightNumber 
    combined with the assigned operator. **/
  const calculateAnswer = () => {
    const left = parseFloat(leftNumber);
    const right = parseFloat(rightNumber);

    switch (operator) {
      case "+":
        setAnswer(left + right);
        break;
      case "-":
        setAnswer(left - right);
        break;
      case "*":
        setAnswer(left * right);
        break;
      case "÷":
        if (isNaN(left / right)) {
          setAnswer("NaN");
          break;
        }
        setAnswer(left / right);
        break;
    }
  };

  /** HTML-part **/
  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNumber}</p>
        <div className="numbers">
          {numbers.map((index) => (
            <button key={index} onClick={() => settingTheLeftNumber(index)}>
              {index}
            </button>
          ))}
          <button onClick={() => clearNumber("left")}>Clear</button>
          <button onClick={() => settingTheLeftNumber(".")}>.</button>
          <button onClick={() => getStored("left")}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {operators.map((sign) => (
            <button key={sign} onClick={() => settingTheOperator(sign)}>
              {sign}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        <p>{rightNumber}</p>
        <div className="numbers">
          {numbers.map((index) => (
            <button key={index} onClick={() => settingTheRightNumber(index)}>
              {index}
            </button>
          ))}
          <button onClick={() => clearNumber("right")}>Clear</button>
          <button onClick={() => settingTheRightNumber(".")}>.</button>
          <button onClick={() => getStored("right")}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculateAnswer()}>=</button>
          <button onClick={() => settingStored(answer)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App
