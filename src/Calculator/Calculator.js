import { useState } from "react";

function Calculator() {
  const [numbers, setNumbers] = useState("");

  //! Panel 1
  const handleClickOne = (nums) => {
    setNumbers(numbers + nums);
    console.log(numbers);
  };

  const handleClearOne = () => {
    setNumbers("");
  };

  if (numbers[0] === ".") {
    setNumbers("0" + numbers);
  }
  if ((numbers.match(/\./g) || []).length === 2) {
    setNumbers(numbers.slice(0, -1));
  }

  //! Panel 2
  const [numbersTwo, setNumbersTwo] = useState("");

  const handleClickTwo = (numsTwo) => {
    setNumbersTwo(numbersTwo + numsTwo);
  };

  const handleClearTwo = () => {
    setNumbersTwo("");
  };

  if (numbersTwo[0] === ".") {
    setNumbersTwo("0" + numbersTwo);
  }
  //! Operations
  const [operation, setOperation] = useState("+");

  const handleOperatorClick = (opt) => {
    setOperation(opt);
  };

  if ((numbersTwo.match(/\./g) || []).length === 2) {
    setNumbersTwo(numbersTwo.slice(0, -1));
  }
  //! Equals
  const [equation, setEquation] = useState("0");
  const handleEqualResult = () => {
    let result = 0;
    if (operation === "+") {
      result = Number(numbers) + Number(numbersTwo);
    }
    if (operation === "-") {
      result = Number(numbers) - Number(numbersTwo);
    }
    if (operation === "*") {
      result = Number(numbers) * Number(numbersTwo);
    }
    if (operation === "/") {
      result = Number(numbers) / Number(numbersTwo);
    }
    setEquation(result);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numbers === "" ? 0 : numbers}</p>
        <div className="numbers">
          <button onClick={() => handleClickOne("1")}>1</button>
          <button onClick={() => handleClickOne("2")}>2</button>
          <button onClick={() => handleClickOne("3")}>3</button>
          <button onClick={() => handleClickOne("4")}>4</button>
          <button onClick={() => handleClickOne("5")}>5</button>
          <button onClick={() => handleClickOne("6")}>6</button>
          <button onClick={() => handleClickOne("7")}>7</button>
          <button onClick={() => handleClickOne("8")}>8</button>
          <button onClick={() => handleClickOne("9")}>9</button>
          <button onClick={() => handleClickOne("0")}>0</button>
          <button onClick={() => handleClickOne(".")}>.</button>
          <button onClick={() => handleClearOne()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
          <button onClick={() => handleOperatorClick("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numbersTwo === "" ? 0 : numbersTwo}</p>
        <div className="numbers">
          <button onClick={() => handleClickTwo("1")}>1</button>
          <button onClick={() => handleClickTwo("2")}>2</button>
          <button onClick={() => handleClickTwo("3")}>3</button>
          <button onClick={() => handleClickTwo("4")}>4</button>
          <button onClick={() => handleClickTwo("5")}>5</button>
          <button onClick={() => handleClickTwo("6")}>6</button>
          <button onClick={() => handleClickTwo("7")}>7</button>
          <button onClick={() => handleClickTwo("8")}>8</button>
          <button onClick={() => handleClickTwo("9")}>9</button>
          <button onClick={() => handleClickTwo("0")}>0</button>
          <button onClick={() => handleClickTwo(".")}>.</button>
          <button onClick={() => handleClearTwo("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{equation}</p>
        <div>
          <button onClick={() => handleEqualResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
