function SecondDigitPanel ({ value, setValue, stored}) {

  if (value.length > 1 && value[0] === '0' && value[1] !== '.') {
    setValue(value[1])
  }
 
  if ((value.match(/\./g) || []).length === 2){
    setValue(value.slice(0, -1))
  }

  return (
      <div className="panel">
      <p> {value} </p>
      <div className="numbers">
        <button onClick={() => {setValue(value + '1')}}>1</button>
        <button onClick={() => {setValue(value + '2')}}>2</button>
        <button onClick={() => {setValue(value + '3')}}>3</button>
        <button onClick={() => {setValue(value + '4')}}>4</button>
        <button onClick={() => {setValue(value + '5')}}>5</button>
        <button onClick={() => {setValue(value + '6')}}>6</button>
        <button onClick={() => {setValue(value + '7')}}>7</button>
        <button onClick={() => {setValue(value + '8')}}>8</button>
        <button onClick={() => {setValue(value + '9')}}>9</button>
        <button onClick={() => {setValue(value + '0')}}>0</button>
        <button onClick={() => {setValue('0')}}>Clear</button>
        <button onClick={() => {setValue(value + '.')} } >.</button>
        <button onClick={() => {setValue(stored)}} >Load</button>
      </div>
    </div>
  )
}

export default SecondDigitPanel