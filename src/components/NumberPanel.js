export const NumberPanel = ({value, setValue}) => {
  
  const getValue = (e) => {
    const input = e.target.innerText
    if (value === 0) {
      setValue(parseInt(input))
    } else {
      setValue(parseInt(value + input))
    }
  }

  return(
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">
        <button onClick={getValue}>1</button>
        <button onClick={getValue}>2</button>
        <button onClick={getValue}>3</button>
        <button onClick={getValue}>4</button>
        <button onClick={getValue}>5</button>
        <button onClick={getValue}>6</button>
        <button onClick={getValue}>7</button>
        <button onClick={getValue}>8</button>
        <button onClick={getValue}>9</button>
        <button onClick={getValue}>0</button>
        <button onClick={() => setValue(0)}>Clear</button>
      </div>
    </div>
  )
}
