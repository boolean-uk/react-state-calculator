export const performCalculation = (num1, num2, operator, setResult) => {
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
  
  export const storeResult = (result, setSaved) => {
    setSaved(result);
  };
  