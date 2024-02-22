import { useState } from 'react'

const OperatorPanel = ({operator, setOperator}) => {
    const ChangeOperator = (e) => {
        setOperator(e.target.innerText)
    }

    return (
        <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={(e) => ChangeOperator(e)}>+</button>
          <button onClick={(e) => ChangeOperator(e)}>-</button>
          <button onClick={(e) => ChangeOperator(e)}>*</button>
          <button onClick={(e) => ChangeOperator(e)}>÷</button>
          
        </div>
      </div>
    )
}

export default OperatorPanel