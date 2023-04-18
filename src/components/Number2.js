import { useState } from "react"


function Number2 ({num2, setNum2}) {

  function handleClick(event) {
    setNum2(event.target.innerHTML)
  }
  function clear(){
    setNum2(0)
  }

  // const button = document.querySelectorAll("button")
  // button.forEach(function(i) {
  //   i.addEventListener("click", handleClick)
  // })

    return (
        <div className="panel">
          <p>{num2}</p>
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

export default Number2