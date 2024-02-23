export const EqualPanel = ({num1, num2, operator, result, setResult, saved, setSaved}) => {
    const performCalculation = () => {
      let calculatedResult;
      switch (operator) {
        case "+":
          calculatedResult = num1 + num2;
          break;
        case "-":
          calculatedResult = num1 - num2;
          break;
        case "*":
          calculatedResult = num1 * num2;
          break;
        case "÷":
          calculatedResult = num1 / num2;
          break;
        default:
          calculatedResult = null;
      }
      setResult(calculatedResult);
    };

    const storeResult = () => {
        setSaved(result)
    }

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