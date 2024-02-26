import PropTypes from 'prop-types'

const Panel2 = (props) => {

  

  Panel2.propTypes = {
    panel2: PropTypes.string,
    setPanel2: PropTypes.func,
  }

  function checkingSetPanel2(value)  {
    if(props.panel2 === '0') {
      props.setPanel2(value)
    } else {
      props.setPanel2(props.panel2 + value)
    }
  }


      return (
        <div className="panel">
          <p>{props.panel2}</p>
          <div className="numbers">
            <button value="1" onClick={() => {checkingSetPanel2("1")}}>1</button>
            <button value="2" onClick={() => {checkingSetPanel2("2")}}>2</button>
            <button value="3" onClick={() => {checkingSetPanel2("3")}}>3</button>
            <button value="4" onClick={() => {checkingSetPanel2("4")}}>4</button>
            <button value="5" onClick={() => {checkingSetPanel2("5")}}>5</button>
            <button value="6" onClick={() => {checkingSetPanel2("6")}}>6</button>
            <button value="7" onClick={() => {checkingSetPanel2("7")}}>7</button>
            <button value="8" onClick={() => {checkingSetPanel2("8")}}>8</button>
            <button value="9" onClick={() => {checkingSetPanel2("9")}}>9</button>
            <button value="0" onClick={() => {checkingSetPanel2("0")}}>0</button>
            <button onClick={() => {props.setPanel2("0")}}>Clear</button>
        </div>
        </div>
      )
}
export default Panel2;