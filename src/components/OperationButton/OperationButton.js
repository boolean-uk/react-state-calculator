function OperationButton (props) {

function updateOperator(event) {
  const newOperator = event.target.innerText
  props.setOperator(newOperator)
}

    return (
        <div className="panel">
         <p>{props.operator}</p>
         <div className="numbers">
           <button
           onClick={updateOperator}
           >+</button>
           <button
           onClick={updateOperator}
           >-</button>
           <button
           onClick={updateOperator}
           >*</button>
           <button
           onClick={updateOperator}
           >÷</button>
         </div>
       </div>
    )
}

export default OperationButton