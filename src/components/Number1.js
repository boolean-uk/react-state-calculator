import { useState } from "react"

function Number1 ({num1, setNum1}) {
  function handleClick(event) {
    setNum1(event.target.innerHTML)
  }

  function clear(){
    setNum1(0)
  }

    return (
        <div className="panel">
          <p>{num1}</p>
          <div className="numbers">
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>0</button>
            <button onClick={clear}>Clear</button>
          </div>
        </div>
    )
}

export default Number1

