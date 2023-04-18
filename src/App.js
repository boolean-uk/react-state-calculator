import { useState } from "react";
import "./App.css";
import Numpad from "./component/Numpad";
import Act from "./component/Act";
import Answer from "./component/Answer";

function App() {
  const [numpadOne, setNumpadOne] = useState("0");
  const [numpadTwo, setNumpadTwo] = useState("0");
  const [storedValue, setStoredValue] = useState(0);
  const [answer, setAnswer] = useState("0");
  const [act, setAct] = useState("+");
  const handleClick = (e) => {
    const numOne = parseFloat(numpadOne);
    const numTwo = parseFloat(numpadTwo);
    switch (act) {
      case "+":
        setAnswer(numOne + numTwo);
        break;
      case "-":
        setAnswer(numOne - numTwo);
        break;
      case "*":
        setAnswer(numOne * numTwo);
        break;
      case "÷":
        if (numTwo === 0) {
          setAnswer(numOne);
        } else {
          setAnswer(numOne / numTwo);
        }
        break;
      default:
        console.log(`Sorry, we are out of ${act}.`);
    }
  };
  return (
    <div className="calculator">
      <Numpad
        number={numpadOne}
        setNumber={setNumpadOne}
        storedValue={storedValue}
      />
      <Act act={act} setAct={setAct} />
      <Numpad
        number={numpadTwo}
        setNumber={setNumpadTwo}
        storedValue={storedValue}
      />
      <Answer
        answer={answer}
        handleClick={handleClick}
        setStoredValue={setStoredValue}
      />
    </div>
  );
}

export default App;
