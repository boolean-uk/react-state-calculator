export const ResultPanel = (
  { result,
    setResult,
    value1,
    value2,
    operator,
    setSavedNumber}) => {

  const calculateResult = () => {
    if (operator === '+') {
      setResult(value1 + value2)
    } else if (operator === '-') {
      setResult(value1 - value2)
    } else if (operator === '*') {
      setResult(value1 * value2)
    } else if (operator === '/') {
      setResult(value1 / value2)
    }
  }

  const storeResult = () => {
    setSavedNumber(result)
  }

  return(
    <div className="panel answer">
      <p>{result}</p>
      <div>
        <button onClick={calculateResult}>=</button>
        <button onClick={storeResult}>Store Result</button>
      </div>
    </div>
  )
}
