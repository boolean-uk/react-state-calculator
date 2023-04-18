import { useState } from "react"

function Operator () {

  const [operator, setOperator] = useState(0)
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