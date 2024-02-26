import PropTypes from 'prop-types'

const Panel1 = (props) => {

  Panel1.propTypes = {
    panel1: PropTypes.string,
    setPanel1: PropTypes.func,
  }

  function checkingSetPanel1(value)  {
    if(props.panel1 === '0') {
      props.setPanel1(value)
    } else {
      props.setPanel1(props.panel1 + value)
    }
  }

  return (
    <div className="panel">
    <p>{props.panel1}</p>
    <div className="numbers">
      <button value="1" onClick={() => {checkingSetPanel1("1")}}>1</button>
      <button value="2" onClick={() => {checkingSetPanel1("2")}}>2</button>
      <button value="3" onClick={() => {checkingSetPanel1("3")}}>3</button>
      <button value="4" onClick={() => {checkingSetPanel1("4")}}>4</button>
      <button value="5" onClick={() => {checkingSetPanel1("5")}}>5</button>
      <button value="6" onClick={() => {checkingSetPanel1("6")}}>6</button>
      <button value="7" onClick={() => {checkingSetPanel1("7")}}>7</button>
      <button value="8" onClick={() => {checkingSetPanel1("8")}}>8</button>
      <button value="9" onClick={() => {checkingSetPanel1("9")}}>9</button>
      <button value="0" onClick={() => {checkingSetPanel1("0")}}>0</button>
      <button onClick={() => {props.setPanel1("0")}}>Clear</button>
    </div>
  </div>
  )
}
export default Panel1;