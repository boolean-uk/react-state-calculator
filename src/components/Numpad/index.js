function Numpad ({num, setNum, storedNumber}) {
  
const handlerNum = (event) => {
  const value = event.target.innerText
  if (num.toString() === '0') {
    setNum(value)
  } else {
    setNum(num + value)
  } 
}

const handlerClearNum = () => {
  setNum(0)
}

const recallNum = () => {
  setNum(storedNumber)
}

const handlerDecimalSeparator = () => {
  if (!num.toString().includes('.')) {
    setNum(num + '.')
  }
}

  return (
    <div className="panel">
      <p>{num}</p>
      <div className="numbers">
        <button onClick={handlerNum}>1</button>
        <button onClick={handlerNum}>2</button>
        <button onClick={handlerNum}>3</button>
        <button onClick={handlerNum}>4</button>
        <button onClick={handlerNum}>5</button>
        <button onClick={handlerNum}>6</button>
        <button onClick={handlerNum}>7</button>
        <button onClick={handlerNum}>8</button>
        <button onClick={handlerNum}>9</button>
        <button onClick={handlerNum}>0</button>
        <button onClick={handlerDecimalSeparator}>.</button>
        <button onClick={handlerClearNum}>Clear</button>
      </div>
      <button id='recall-btn' onClick={recallNum}>Recall</button>
    </div>
)}

export default Numpad