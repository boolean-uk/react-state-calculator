import PropTypes from 'prop-types'; 

export default function Button(props) {

    const handleClick = () => {
        props.onClick(props.value);
    }

    return (
        <button onClick={handleClick}>{props.value}</button>
    )
}
Button.propTypes = {
    value: PropTypes.number.isRequired, 
    onClick: PropTypes.func.isRequired
};
