import PropTypes from 'prop-types';

const OperatorPanel = ({operator, setOperator}) => {
  const operators = ["+", "-", "*", "÷"]
  
  const ChangeOperator = (e) => {
        setOperator(e.target.innerText)
  }

    return (
        <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          {
            operators.map((value, index) => {
              return (<button key={index} onClick={(e) => ChangeOperator(e)}>{value}</button>)
            })
          }
        </div>
      </div>
    )
}

OperatorPanel.propTypes = {
  operator: PropTypes.string,
  setOperator: PropTypes.func
}

export default OperatorPanel