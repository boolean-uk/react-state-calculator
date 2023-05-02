import Panel from '../Panel'

const opButtonValues = ['+', '-', '*', '÷']

function OperatorPanel(props) {

  const handleOnClick = num => {
    props.setState(num.toString())
  }

  return (
    <Panel numButtonValues={opButtonValues} state={props.state}onClickFunction={handleOnClick} onChange={props.onChange}></Panel>
  )
}

export default OperatorPanel
