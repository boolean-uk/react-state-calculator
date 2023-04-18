import React from "react";

function Numpad({ number, setNumber, storedValue }) {
  const handleClick = (e) => {
    const input = e.target.innerText;
    if (input.length < 7 ){

    if (input === "Clear") {
      setNumber("0");
    } else if (input === "Recall") {
      setNumber(storedValue);
      
    } else {
      if (number === "0") {
        if (input === ".") {
          setNumber("0.");
        } else {
          setNumber(input);
        }
      } else {
        if (number.includes(".") && input === ".") {
          setNumber(number);
        } else {
          setNumber(number + input);
        }
      }
    }
  }
  };
  return (
    <div className="panel">
      <p>{number}</p>
      <div onClick={handleClick} className="numbers">
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
        <button>.</button>
        <button>Clear</button>
        <button>Recall</button>
      </div>
    </div>
  );
}

export default Numpad;
