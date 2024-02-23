export const EqualPanel = ({num1, num2, operator, result, setResult}) => {
    const performCalculation = () => {
        let calculatedResult;
        switch (operator) {
          case '+':
            calculatedResult = num1 + num2;
            break;
          case '-':
            calculatedResult = num1 - num2;
            break;
          case '*':
            calculatedResult = num1 * num2;
            break;
          case '÷':
            calculatedResult = num1 / num2;
            break;
          default:
            calculatedResult = null;
        }
        setResult(calculatedResult);
      };

    return (
    <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={performCalculation}>=</button>
        </div>
      </div>
    )
}