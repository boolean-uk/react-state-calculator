import PropTypes from "prop-types";


function OperatorPanelComponent({ setOperatorFunc, operator }) {

    return (
    <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => setOperatorFunc('+')}>+</button>
          <button onClick={() => setOperatorFunc('-')}>-</button>
          <button onClick={() => setOperatorFunc('*')}>*</button>
          <button onClick={() => setOperatorFunc('÷')}>÷</button>
        </div>
      </div>
    )
}

OperatorPanelComponent.propTypes = {
    operator: PropTypes.string.isRequired,
    setOperatorFunc: PropTypes.func.isRequired,
  };

export default OperatorPanelComponent