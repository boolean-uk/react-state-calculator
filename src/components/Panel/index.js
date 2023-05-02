import './Panel.css'

function Panel(props) {
  return (
    <div className="panel">
      <p>{props.state}</p>
      <div className="numbers">
        {
          props.numButtonValues.map((value, i) => 
            <button key={i} onClick={() => {
              props.onClickFunction(value)
            }}>{value}</button>)
        }
      </div>
    </div>
  )
}

export default Panel
