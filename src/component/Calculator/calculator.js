import "./App.css"
import { useState } from "react"


function Calculator() {
  const [numOne, handlesetNumClearOne] = useState("0")
  const [operation, handlesetOperation] = useState("+")
  const [numTwo, handlesetNumClearTwo] = useState("0")
  

  const handleButtonOneClick = (digit) => {
    const newResultNumOne = appendDigit(numOne, digit)
    handlesetNumClearOne(newResultNumOne)
  }

  const handleButtonTwoClick = (digit) => {
    const newResultNumTwo = appendDigit(numTwo, digit)
    handlesetNumClearTwo(newResultNumTwo)
  }

  const appendDigit = (existing, digit) => {
    if (existing === "0") {
      if (digit === 0) {
        return existing
      }
      return digit
    }
    return (existing += digit)
  }

  const calculate = () => {
    const operationResult = handleOperations[operation]
    return operationResult(Number(numOne), Number(numTwo))
  }

  const handleOperations = {
    "+": (numOne, numTwo) => numOne + numTwo,
    "-": (numOne, numTwo) => numOne - numTwo,
    "*": (numOne, numTwo) => numOne * numTwo,
    "/": (numOne, numTwo) => numOne / numTwo,
  }
  

  const answer = calculate()

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => handleButtonOneClick("1")}>1</button>
          <button onClick={() => handleButtonOneClick("2")}>2</button>
          <button onClick={() => handleButtonOneClick("3")}>3</button>
          <button onClick={() => handleButtonOneClick("4")}>4</button>
          <button onClick={() => handleButtonOneClick("5")}>5</button>
          <button onClick={() => handleButtonOneClick("6")}>6</button>
          <button onClick={() => handleButtonOneClick("7")}>7</button>
          <button onClick={() => handleButtonOneClick("8")}>8</button>
          <button onClick={() => handleButtonOneClick("9")}>9</button>
          <button onClick={() => handleButtonOneClick("0")}>0</button>
          <button onClick={() => handlesetNumClearOne("0")}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => handlesetOperation("+")}>+</button>
          <button onClick={() => handlesetOperation("-")}>-</button>
          <button onClick={() => handlesetOperation("*")}>*</button>
          <button onClick={() => handlesetOperation("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={() => handleButtonTwoClick("1")}>1</button>
          <button onClick={() => handleButtonTwoClick("2")}>2</button>
          <button onClick={() => handleButtonTwoClick("3")}>3</button>
          <button onClick={() => handleButtonTwoClick("4")}>4</button>
          <button onClick={() => handleButtonTwoClick("5")}>5</button>
          <button onClick={() => handleButtonTwoClick("6")}>6</button>
          <button onClick={() => handleButtonTwoClick("7")}>7</button>
          <button onClick={() => handleButtonTwoClick("8")}>8</button>
          <button onClick={() => handleButtonTwoClick("9")}>9</button>
          <button onClick={() => handleButtonTwoClick("0")}>0</button>
          <button onClick={() => handlesetNumClearTwo("0")}>Clear</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Calculator