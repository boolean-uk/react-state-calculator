import CalculatorButton from './CalculatorButton'
import PropTypes from 'prop-types';

const operatorList = ['+', '-', '*', '÷']
export default function CalculatorOperators({ value, setValue }) {
    const buttons = []

    operatorList.forEach((operator, i) => {
        buttons.push(<CalculatorButton key={i} setValue={setValue} value={operator}>{operator}</CalculatorButton>)
    })

    return (
        <div className="panel">
            <p>{value}</p>
            <div className="numbers">
                {buttons}
            </div>
        </div>
    )
}

// props validation
CalculatorOperators.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
}