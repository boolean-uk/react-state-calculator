import { useState } from "react";

function Calculator(props) {
  // const number = props.number;
  const [numbers, setNumbers] = useState("");

  const handleClick = (nums) => {
    setNumbers(numbers + nums);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numbers === "" ? 0 : numbers}</p>
        <div className="numbers">
          <button onClick={() => handleClick("1")}>1</button>
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

export default Calculator;
