import PropTypes from 'prop-types';

export default function CalculatorButton({ value, children, setValue }) {
    return (
        <button onClick={() => setValue(value)}>{children}</button>
    )
}

CalculatorButton.propTypes = {
    value: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
}