import Panel from '../Panel'

const equalButtonValue = ['=']

function AnswerPanel(props) {

  const handleOnClick = () => {
    let num1 = props.answerArray[0]
    let op = props.answerArray[1]
    let num2 = props.answerArray[2]
  
    switch(op) {
      case '+':
        props.setState(Number(num1) + Number(num2))
        break
      case '-':
        props.setState(Number(num1) - Number(num2))
        break
      case '*':
        props.setState(Number(num1) * Number(num2))
        break
      case '÷':
        props.setState (Number(num1) / Number(num2))
        break
      default:
        Error.log('Invalid Operator')
        break
    }
  }
  return (
    <Panel numButtonValues={equalButtonValue} state={props.state} onClickFunction={handleOnClick}></Panel>
  )
}

export default AnswerPanel
