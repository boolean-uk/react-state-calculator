export const ResultPanel = (
  { result,
    setResult,
    value1,
    setValue1,
    setValue2,
    value2,
    operator,
    setSavedNumber}) => {

  const calculateResult = () => {
    if (operator === '+') {
      setResult(parseFloat(value1) + parseFloat(value2))
    } else if (operator === '-') {
      setResult(parseFloat(value1) - parseFloat(value2))
    } else if (operator === '*') {
      setResult(parseFloat(value1) * parseFloat(value2))
    } else if (operator === '/') {
      setResult(parseFloat(value1) / parseFloat(value2))
    }
  }

  const storeResult = () => {
    setSavedNumber(result)
  }

  const clearAll = () => {
    setResult('0')
    setValue1('0')
    setValue2('0')
  }

  return(
    <div className="panel answer">
      <p>{result}</p>
      <div>
        <button onClick={calculateResult}>=</button>
        <button onClick={storeResult}>Store Result</button>
        <button onClick={clearAll}>Clear all</button>
      </div>
    </div>
  )
}
