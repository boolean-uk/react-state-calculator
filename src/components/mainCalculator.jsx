import { useState } from 'react';
import First from './first';
import Second from './second';
import OperationPanel from './sign';

function useCalculator() {
  const [first, setFirst] = useState("0");
  const [second, setSecond] = useState("0");
  const [sign, setSign] = useState("+");
  const [result, setResult] = useState(0);
  const [store, setStore] = useState("");

  const updateValue = (value, isSecond) => {
    // Handle clear operation (empty string)
    if (value === "") {
      if (isSecond) {
        setSecond("0");
      } else {
        setFirst("0");
      }
      return;
    }
  
    // Prevent multiple leading zeros
    if (value === "0" && (isSecond ? second === "0" : first === "0")) {
      return; // Ignore additional leading zeros
    }
  
    // Prevent multiple decimals
    if (value === "." && (isSecond ? second.includes(".") : first.includes("."))) {
      return; // Ignore additional decimal points
    }
  
    // Replace leading zero with input (except for decimal point)
    if (isSecond && second === "0" && value !== ".") {
      setSecond(value);
      return;
    } else if (!isSecond && first === "0" && value !== ".") {
      setFirst(value);
      return;
    }
  
    // Append input if no previous conditions apply
    if (isSecond) {
      setSecond(prev => prev + value);
    } else {
      setFirst(prev => prev + value);
    }
  };

  const handleRecallFirst = () => {
    if (first === "0" && second === "0") {
      setFirst(store);
    } else {
      setFirst(store);
      setSecond('');
    }
  };

  const handleRecallSecond = () => {
    if (first === "0" && second === "0") {
      setFirst(store);
    } else {
      setFirst('');
      setSecond(store);
    }
  };

  const getResult = () => {
    let num1 = parseFloat(first);
    let num2 = parseFloat(second);

    if (isNaN(num1)) num1 = 0;
    if (isNaN(num2)) num2 = 0;

    let res;
    switch (sign) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "÷":
        if (num2 === 0) {
          res = "Error";
        } else {
          res = num1 / num2;
        }
        break;
      default:
        break;
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <First 
        updateValue={updateValue} 
        setFirst={setFirst} 
        handleRecallFirst={handleRecallFirst} 
        first={first} 
      />
      <OperationPanel sign={sign} setSign={setSign} />

      <Second 
        updateValue={updateValue} 
        setSecond={setSecond} 
        handleRecallSecond={handleRecallSecond} 
        second={second}  />

      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={getResult}>=</button>
          <button onClick={() => setStore(result)}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default useCalculator;
