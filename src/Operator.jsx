import { useState } from "react"

function Operator({state})
{
    const [currentState, newState] = state
    const [show, newshow] = useState('+')
    const changeOperator = (f, a) =>
    {
        newState((a, b) => f)
      //  console.log(currentState)
        newshow(a)
    }
    return (
        <div className="panel">
        <p>{show}</p>
        <div className="numbers">
        <button onClick={() => changeOperator((a,b) => a + b, '+')}>+</button>
        <button onClick={() => changeOperator((a,b) => a - b, '-')}>-</button>
        <button onClick={() => changeOperator((a,b) => a * b, '*')}>*</button>
        <button onClick={() => changeOperator((a,b) => a / b, '÷')}>÷</button>
        </div>
      </div>
    )
}

export default Operator