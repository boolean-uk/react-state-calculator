function OperationButton (props) {

function Operator(event) {

  const operatorButton = event.target.innerText
  props.setWhichOp(operatorButton)

}

    return (
      <div className="panel">
        <p>{props.whichOp}</p>
        <div className="numbers">
          <button onClick={Operator}>+</button>
          <button onClick={Operator}>-</button>
          <button onClick={Operator}>*</button>
          <button onClick={Operator}>÷</button>
        </div>
      </div>
    )

}

export default OperationButton