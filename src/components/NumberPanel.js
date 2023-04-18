export const NumberPanel = ({value, setValue}) => {

  const getValue = (e) => {
    const input = e.target.innerText
    if (value === 0) {
      setValue(input)
    } else {
      setValue(value + input)
    }
  }

  return(
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">
        <button onClick={(e) => getValue(e)}>1</button>
        <button onClick={(e) => getValue(e)}>2</button>
        <button onClick={(e) => getValue(e)}>3</button>
        <button onClick={(e) => getValue(e)}>4</button>
        <button onClick={(e) => getValue(e)}>5</button>
        <button onClick={(e) => getValue(e)}>6</button>
        <button onClick={(e) => getValue(e)}>7</button>
        <button onClick={(e) => getValue(e)}>8</button>
        <button onClick={(e) => getValue(e)}>9</button>
        <button onClick={(e) => getValue(e)}>0</button>
        <button onClick={() => setValue(0)}>Clear</button>
      </div>
    </div>
  )
}
