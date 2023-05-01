
function NumberPad (props) {

  function handleClear() {
    props.setValue('0')
  }

  function NumberDisplay(event) {
    
    const value = event.target.innerText
    props.setValue(value)

  }

    return (
        <div className="panel">
          <p>{props.NumState}</p>
          <div className="numbers">
              <button
                onClick={(NumberDisplay)}>1</button>
              <button
                onClick={(NumberDisplay)}>2</button>
              <button
                onClick={(NumberDisplay)}>3</button>
              <button
                onClick={(NumberDisplay)}>4</button>
              <button
                onClick={(NumberDisplay)}>5</button>
              <button
                onClick={(NumberDisplay)}>6</button>
              <button
                onClick={(NumberDisplay)}>7</button>
              <button
                onClick={(NumberDisplay)}>8</button>
              <button
                onClick={(NumberDisplay)}>9</button>
              <button
                onClick={(NumberDisplay)}>0</button>
              <button
                onClick={handleClear}>Clear</button>
          </div>
        </div>
    )
}

export default NumberPad