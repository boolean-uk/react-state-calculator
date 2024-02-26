import PropTypes from 'prop-types'

const Answer = (props) =>  {
 

    
  Answer.propTypes = {
    panel1: PropTypes.string,
    operation: PropTypes.string,
    panel2: PropTypes.string,
    answer: PropTypes.number,
    setAnswer: PropTypes.func,
    setStore: PropTypes.func,
  }

  function calculate() {
    if(props.operation === "+") {
      props.setAnswer(parseFloat(props.panel1) + parseFloat(props.panel2))
    }
    if(props.operation === "-") {
      props.setAnswer(parseFloat(props.panel1) - parseFloat(props.panel2))
    }
    if(props.operation === "*") {
      props.setAnswer(parseFloat(props.panel1) * parseFloat(props.panel2))
    }
    if(props.operation === "÷") {
      props.setAnswer(parseFloat(props.panel1) / parseFloat(props.panel2))
    }
  }


  return (
    <div className="panel answer">
    <p>{props.answer}</p>
    <div>
    <button onClick={() => calculate()}>=</button>
    <button onClick={() => props.setStore(props.answer.toString())}>store</button>
    </div>
    </div>
  )
    
}
export default Answer;