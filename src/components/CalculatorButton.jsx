import PropTypes from 'prop-types';

export default function CalculatorButton({ children, setValue }) {
    return (
        <button onClick={() => setValue(children == "Clear" ? 0 : children)}>{children}</button>
    )
}

CalculatorButton.propTypes = {
    children: PropTypes.any.isRequired,
    setValue: PropTypes.func.isRequired,
}