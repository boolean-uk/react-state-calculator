import PropTypes from 'prop-types'

const Operation = (props) => {
  
  Operation.propTypes = {
    operation: PropTypes.string,
    setOperation: PropTypes.func,
  }

  
  function checkingSetOperation(value) {
    if(value === "+" || value === "-" || value === "÷" || value === "*") {
      props.setOperation(value)
    }
  }

  return (
    <div className="panel">
    <p>{props.operation}</p>
    <div className="numbers">
    <button onClick={() => {checkingSetOperation("+")}}>+</button>
    <button onClick={() => {checkingSetOperation("-")}}>-</button>
    <button onClick={() => {checkingSetOperation("*")}}>*</button>
    <button onClick={() => {checkingSetOperation("÷")}}>÷</button>
    </div>
    </div>
  )
}
export default Operation;