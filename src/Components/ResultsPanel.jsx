import { useState } from 'react'

const ResultsPanel = ({setStoredResult, firstNumber, secondNumber, operator}) => {
    const [result, setResult] = useState(0)

    const EvaluateResult = () => {
        let calculationValue = 0
        switch (operator) {
          case "+":
            calculationValue = parseFloat(firstNumber) + parseFloat(secondNumber)
            break
          case "-":
            calculationValue = parseFloat(firstNumber) - parseFloat(secondNumber)
            break
          case "*":
            calculationValue = parseFloat(firstNumber) * parseFloat(secondNumber)
            break
          case "÷":
            calculationValue = parseFloat(firstNumber) / parseFloat(secondNumber)
            break
        }
        setResult(+calculationValue.toFixed(8))
      }
    
      const StoreResult = () => {
        setStoredResult(result)
      }

    return (
        <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => EvaluateResult()}>=</button>
          <button onClick={() => StoreResult()}> Store result</button>
        </div>
      </div>
    )
}

export default ResultsPanel