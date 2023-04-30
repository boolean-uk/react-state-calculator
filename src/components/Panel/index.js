import './Panel.css'

function Panel(props) {
  console.log(props)
  return (
    <div className="panel">
      <p>{props.currNum}</p>
      <div className="numbers">
        {
          props.buttonValues.map((value, i) => 
            <button onClick={() => {
              if (value === 'Clear') {
                props.setState({
                  num1: 0,
                  op: props.state.op,
                  num2: props.state.num2,
                  answer: props.state.answer
                })
              } 
              
              else if (props.state.num1 === '0') {
                props.setState({
                  num1: value,
                  op: props.state.op,
                  num2: props.state.num2,
                  answer: props.state.answer
                })
              } else {
                props.setState({
                  num1: props.state.num1 + value,
                  op: props.state.op,
                  num2: props.state.num2,
                  answer: props.state.answer
                })
              }
            }}>{value}</button>)
        }
      </div>
    </div>
  )
}

export default Panel