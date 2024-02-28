import PropTypes from "prop-types";

function NumberPanelComponent( { setNumFunc, num }) {
  const addNumber = (number) => {
    setNumFunc(parseInt(num.toString() + number.toString()));
  };
  const removeNumber = () => {
    if(num.toString().length > 1)
    setNumFunc(parseInt(num.toString().slice(0, -1)));
    else
    setNumFunc(0)
  };
  const clear = () => {
    setNumFunc(0)
  }

  return (
    <div className="panel">
        <p>{num}</p>
        <div className="numbers">
          <button onClick={() => addNumber(1)}>1</button>
          <button onClick={() => addNumber(2)}>2</button>
          <button onClick={() => addNumber(3)}>3</button>
          <button onClick={() => addNumber(4)}>4</button>
          <button onClick={() => addNumber(5)}>5</button>
          <button onClick={() => addNumber(6)}>6</button>
          <button onClick={() => addNumber(7)}>7</button>
          <button onClick={() => addNumber(8)}>8</button>
          <button onClick={() => addNumber(9)}>9</button>
          <button onClick={() => addNumber(0)}>0</button>
          <button onClick={clear}>Clear</button>
          <button onClick={removeNumber}>←</button>
        </div>
      </div>
  )
}

NumberPanelComponent.propTypes = {
  num: PropTypes.number.isRequired,
  setNumFunc: PropTypes.func.isRequired,
};

export default NumberPanelComponent