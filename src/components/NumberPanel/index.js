import Panel from '../Panel'

const numButtonValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Clear']

function NumberPanel(props) {
  
  const handleOnClick = num => {
 
    if(num === 'Clear') {
      props.setState('0')
      return
    } 
  
    if(props.state === '0') {
      props.setState(num)
      return
    }
  
    props.setState(props.state + num.toString())
  }

  return (
    <Panel numButtonValues={numButtonValues} state={props.state} onClickFunction={handleOnClick} ></Panel>
  )
}

export default NumberPanel
