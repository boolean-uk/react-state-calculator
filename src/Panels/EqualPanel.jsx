export const EqualPanel = ({result, saved, performCalculation, storeResult}) => {
    return (
    <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={performCalculation}>=</button>
          <button onClick={storeResult}>Save</button>
          <p>Stored: {saved}</p>
        </div>
      </div>
    )
}