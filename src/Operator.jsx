import { useState } from "react"
import PropTypes from "prop-types"

function Operator({setOperator})
{
    const [show, newshow] = useState('+')
    const changeOperator = (f, a) =>
    {
        setOperator((a, b) => f)
      //  console.log(currentState)
        newshow(a)
    }
    return (
        <div className="panel">
        <p>{show}</p>
        <div className="numbers">
        <button onClick={() => changeOperator((a,b) => Number(a) + Number(b), '+')}>+</button>
        <button onClick={() => changeOperator((a,b) => a - b, '-')}>-</button>
        <button onClick={() => changeOperator((a,b) => a * b, '*')}>*</button>
        <button onClick={() => changeOperator((a,b) => a / b, '÷')}>÷</button>
        </div>
      </div>
    )
}

Operator.propTypes = {
    setOperator:PropTypes.func,
}

export default Operator