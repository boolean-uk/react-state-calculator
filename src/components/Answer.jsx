import PropTypes from 'prop-types'

const Answer = (props) =>  {
 

    
  Answer.propTypes = {
    panel1: PropTypes.string,
    operation: PropTypes.string,
    panel2: PropTypes.string,
    answer: PropTypes.string,
    setAnswer: PropTypes.func,
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
    </div>
    </div>
  )
    
}
export default Answer;