/* eslint-disable react/prop-types */
function NumberPanel({number, setNumber, storedValue}) {
  const Append = (value) => {
      if (number === "0") {
        setNumber("" + value)
      } else {
        setNumber("" + number + value)
      }
    }
    
  return (
    <div className="panel">
    <p>{number}</p>
    <div className="numbers">

      <button onClick={() => Append(1)}>1</button>
      <button onClick={() => Append(2)}>2</button>
      <button onClick={() => Append(3)}>3</button>
      <button onClick={() => Append(4)}>4</button>
      <button onClick={() => Append(5)}>5</button>
      <button onClick={() => Append(6)}>6</button>
      <button onClick={() => Append(7)}>7</button>
      <button onClick={() => Append(8)}>8</button>
      <button onClick={() => Append(9)}>9</button>
      <button onClick={() => 
      {
        if (!number.includes(".")) 
          setNumber(number + ".")
      }
      }>.</button>
      <button onClick={() => Append(0)}>0</button>
      <button onClick={() => setNumber("0")}>Clear</button>
      <button onClick={() => setNumber(storedValue)}>Recall</button>
    </div>
  </div>
  )
}

export default NumberPanel
