import PropTypes from "prop-types";

function QuickButton({ value, onClick }) {
  return <button onClick={() => onClick(value)}>{value}</button>;
}

QuickButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuickButton;
