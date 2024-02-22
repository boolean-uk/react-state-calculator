import CalculatorButton from './CalculatorButton';
import PropTypes from 'prop-types';

export default function CalculatorNumbers({ value, setValue, stored }) {
    const buttons = []
    for (let i = 0; i <= 9; i++) {
        buttons.push(<CalculatorButton key={i} value={value == 0 ? i : parseInt(`${value}${i}`)} setValue={setValue}>{i}</CalculatorButton>)
    }
    buttons.push(<CalculatorButton key={10} value={0} setValue={setValue}>Clear</CalculatorButton>)

    return (
        <div className="panel">
            <p>{value}</p>
            <div className="numbers">
                {buttons}
                <button onClick={() => setValue(parseInt(stored))}>Recall</button>
            </div>

        </div>
    )
}

CalculatorNumbers.propTypes = {
    value: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
    stored: PropTypes.any.isRequired,
}