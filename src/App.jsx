import { useState } from "react"
import "./App.css"

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  const operators = ["+", "-", "*", "÷"]

  /** Initiate leftNumber and its setter */
  const [leftNumber, setLeftNumber] = useState(0);
  /** Setter for the left number */
  const settingTheLeftNumber = (number) => {
    if (leftNumber === 0) {
      setLeftNumber(number);
    } else {
      setLeftNumber(leftNumber + "" + number)
    }
  }

  /** Initiate operator and its setter */
  const [operator, setOperator] = useState("+");
  /** Setter for the operator */
  const settingTheOperator = (target) => {
    setOperator(target)
  }

  /** Initiate rightNumber and its setter */
  const [rightNumber, setRightNumber] = useState(0);
  /** Setter for the right number */
  const settingTheRightNumber = (number) => {
    if (rightNumber === 0) {
      setRightNumber(number)
    } else {
      setRightNumber(rightNumber + "" + number)
    }
  }

  /** Clears the given a number and sets it to 0 */
  const clearNumber = (target) => {
    if (target === 'left') {
      setLeftNumber(0)
    } else {
      setRightNumber(0)
    }
  }

  /** Initiate answer and its setter */
  const [answer, setAnswer] = useState(0);

  /** Calculate the answer for leftNumber and rightNumber 
    combined with the assigned operator. **/
  const calculateAnswer = () => {
    const left = parseInt(leftNumber)
    const right = parseInt(rightNumber)

    switch (operator) {
      case "+":
        setAnswer(left + right)
        break
      case "-":
        setAnswer(left - right)
        break
      case "*":
        setAnswer(left * right)
        break
      case "÷":
        if (isNaN(left / right)) {
          setAnswer('NaN')
          break
        } 
        setAnswer(left / right)
        break
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
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculateAnswer()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App
