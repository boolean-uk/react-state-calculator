import { useState } from "react";

function Calculator(props) {
  // const number = props.number;
  const [numbers, setNumbers] = useState("");

  const handleClick = (nums) => {
    setNumbers(numbers + nums);
  };

  const handleClear = () => {
    setNumbers("");
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numbers === "" ? 0 : numbers}</p>
        <div className="numbers">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClear()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        {/* <div className="numbers">
          <button onClick={() => click}>+</button>
          <button onClick={() => click}>-</button>
          <button onClick={() => click}>*</button>
          <button onClick={() => click}>÷</button>
        </div> */}
      </div>

      <div className="panel">
        <p>{numbers === "" ? 0 : numbers}</p>
        <div className="numbers">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("0")}>Clear</button>
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

export default Calculator;
