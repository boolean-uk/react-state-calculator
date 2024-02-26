import { useState } from "react";

function Operators(){
let [operator, setOperator] = useState('+')
    return(
        <div className="panel">
        <p className="operator">{operator}</p>
        <div className="numbers">
          <button onClick={()=>{setOperator('+')}}>+</button>
          <button onClick={()=>{setOperator('-')}}>-</button>
          <button onClick={()=>{setOperator('*')}}>*</button>
          <button onClick={()=>{setOperator('÷')}}>÷</button>
        </div>
      </div>
    )
}

export default Operators