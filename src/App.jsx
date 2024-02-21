import "./App.css";
import { useState } from "react";
function App() {
  const [calculation, setCalculation] = useState("");
  const [leftInput, setLeftInput] = useState("");
  const [rightInput, setRightInput] = useState("");
  const [operand, setOperand] = useState("");
  const [storedResult, setStoredResult] = useState("");
  function numbersButtons(type) {
    let numbers = [];
    for (let i = 1; i <= 12; i++) {
      if (i === 10) {
        numbers.push(0);
        continue;
      }
      if (i === 11) {
        numbers.push("Clear");
        continue;
      }
      if (i === 12) {
        numbers.push(".")
        continue;
      }
      numbers.push(i);
    }

    return numbers.map((number) => (
      <button key={number} onClick={() => updateCalculation(number, type)}>
        {number}
      </button>
    ));
  }

  function calculate() {
    let left;
    let right;
    let operandVal;
    leftInput === "" ? (left = 0) : (left = parseFloat(leftInput));
    rightInput === "" ? (right = 0) : (right = parseFloat(rightInput));
    operand === "" ? (operandVal = "+") : (operandVal = operand);
    console.log(left, right, operand);
    let calculationValue;
    switch (operandVal) {
      case "+":
        calculationValue = left + right;
        break;
      case "-":
        calculationValue = left - right;
        break;
      case "*":
        calculationValue = left * right;
        break;
      case "÷":
        calculationValue = left / right;
        break;
    }
    setCalculation(calculationValue);
  }

  function updateCalculation(value, type, store = false) {
    if (type == "left") {
      if (value === "." && leftInput.includes(".")) {
        return
      }
      if (value == "0" && (leftInput === "0" || leftInput === "")) {
        return;
      }
      if (store === true) {
        setLeftInput(value);
        return;
      }
      if (value == "Clear") {
        setLeftInput("");
      } else {
        setLeftInput(leftInput + value);
      }
    }
    if (type == "right") {
      if (value === "." && rightInput.includes(".")) {
        return
      }
      if (value == "0" && (rightInput === "0" || rightInput === "")) {
        return;
      }
      if (store === true) {
        setRightInput(value);
        return;
      }
      if (value == "Clear") {
        setRightInput("");
      } else {
        console.log(rightInput + value);
        setRightInput(rightInput + value);
      }
    }
    if (type == "operand") {
      setOperand(value);
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftInput === "" ? 0 : leftInput}</p>
        <div className="numbers">
          <button onClick={() => updateCalculation(storedResult, "left", true)}>
            Recall
          </button>

          {numbersButtons("left")}
        </div>
      </div>

      <div className="panel">
        <p>{operand === "" ? "+" : operand}</p>
        <div className="numbers">
          <button onClick={() => updateCalculation("+", "operand")}>+</button>
          <button onClick={() => updateCalculation("-", "operand")}>-</button>
          <button onClick={() => updateCalculation("*", "operand")}>*</button>
          <button onClick={() => updateCalculation("÷", "operand")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightInput === "" ? 0 : rightInput}</p>
        <div className="numbers">
          <button onClick={() => updateCalculation(storedResult, "right", true)}>
            Recall
          </button>
          {numbersButtons("right")}
        </div>
      </div>
      <div className="panel answer">
        <p>{calculation === "" ? 0 : calculation}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
          <button onClick={() => setStoredResult(calculation)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
