import { useState } from "react"

function Operator ({operator, setOperator}) {

  function handleClick(event) {
    setOperator(event.target.innerHTML)
  }

    return (
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick}>-</button>
            <button onClick={handleClick}>*</button>
            <button onClick={handleClick}>÷</button>
          </div>
        </div>
    )
}

export default Operator