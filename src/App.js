import "./App.css";
import { useState } from "react";

const Operations = {
  "+": (numOne, numTwo) => numOne + numTwo,
  "-": (numOne, numTwo) => numOne - numTwo,
  "*": (numOne, numTwo) => numOne * numTwo,
  "/": (numOne, numTwo) => numOne / numTwo,
};

function App() {
  const [numOne, setNumOne] = useState("0");
  const [numTwo, setNumTwo] = useState("0");
  const [operation, setOperation] = useState("+");

  const onButtonOneClick = (digit) => {
    const updatedNumOne = appendDigit(numOne, digit);
    setNumOne(updatedNumOne);
  };

  const onButtonTwoClick = (digit) => {
    const updatedNumTwo = appendDigit(numTwo, digit);
    setNumTwo(updatedNumTwo);
  };

  const appendDigit = (existing, digit) => {
    if (existing === "0") {
      if (digit === 0) {
        return existing;
      }
      return digit;
    }
    return (existing += digit);
  };

  const calculate = () => {
    const op = Operations[operation];
    return op(Number(numOne), Number(numTwo));
  };

  const answer = calculate();

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => onButtonOneClick("1")}>1</button>
          <button onClick={() => onButtonOneClick("2")}>2</button>
          <button onClick={() => onButtonOneClick("3")}>3</button>
          <button onClick={() => onButtonOneClick("4")}>4</button>
          <button onClick={() => onButtonOneClick("5")}>5</button>
          <button onClick={() => onButtonOneClick("6")}>6</button>
          <button onClick={() => onButtonOneClick("7")}>7</button>
          <button onClick={() => onButtonOneClick("8")}>8</button>
          <button onClick={() => onButtonOneClick("9")}>9</button>
          <button onClick={() => onButtonOneClick("0")}>0</button>
          <button onClick={() => setNumOne("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => setOperation("+")}>+</button>
          <button onClick={() => setOperation("-")}>-</button>
          <button onClick={() => setOperation("*")}>*</button>
          <button onClick={() => setOperation("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={() => onButtonTwoClick("1")}>1</button>
          <button onClick={() => onButtonTwoClick("2")}>2</button>
          <button onClick={() => onButtonTwoClick("3")}>3</button>
          <button onClick={() => onButtonTwoClick("4")}>4</button>
          <button onClick={() => onButtonTwoClick("5")}>5</button>
          <button onClick={() => onButtonTwoClick("6")}>6</button>
          <button onClick={() => onButtonTwoClick("7")}>7</button>
          <button onClick={() => onButtonTwoClick("8")}>8</button>
          <button onClick={() => onButtonTwoClick("9")}>9</button>
          <button onClick={() => onButtonTwoClick("0")}>0</button>
          <button onClick={() => setNumTwo("0")}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default App;
