import { useState } from 'react'

function Operator (props) {
    return (
        <div className="panel">
        <p>{props.operator}</p>
        
        <div className="numbers">
          <button onClick={() => props.setOperator("+")}>+</button>
          <button onClick={() => props.setOperator("-")}>-</button>
          <button onClick={() => props.setOperator("*")}>*</button>
          <button onClick={() => props.setOperator("÷")}>÷</button>
        </div>
      </div>
    )
}

export default Operator

