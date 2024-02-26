import PropTypes from 'prop-types'

const Panel = (props) => {

  Panel.propTypes = {
    panel: PropTypes.string,
    setPanel: PropTypes.func,
    store: PropTypes.string,
  }

  const buttons = []

  //Init buttons
  for(let i = 1; i < 10; i++) {
    buttons.push(<button onClick={() => checkingSetPanel(i.toString())}>{i}</button>)
  }
  buttons.push(<button onClick={() => checkingSetPanel("0")}>0</button>)


  //Checkes and chooses what to do with passed value
  function checkingSetPanel(value)  {
    if(props.panel === '0') {
      if(value === ".") {
        props.setPanel("0" + value)
        return
      }
      props.setPanel(value)
      return
    } 
    if(value === ".") {
      if(props.panel.includes(".")) {
        return
      }
    }
    props.setPanel(props.panel + value)
  }

  return (
    <div className="panel">
    <p>{props.panel}</p>
    <div className="numbers">
      {buttons}
      <button onClick={() => {props.setPanel("0")}}>Clear</button>
      <button onClick={() => props.setPanel(props.store)}>recall</button>
      <button onClick={() => checkingSetPanel(".")}>.</button>
    </div>
  </div>
  )
}
export default Panel;