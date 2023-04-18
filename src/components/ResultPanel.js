export const ResultPanel = ({result, calculateResult}) => {
  return(
    <div className="panel answer">
      <p>{result}</p>
      <div>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  )
}
