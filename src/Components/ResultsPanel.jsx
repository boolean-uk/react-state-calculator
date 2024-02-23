import { useState } from 'react'
import PropTypes from 'prop-types';

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

ResultsPanel.propTypes = {
  setStoredResult: PropTypes.func,
  firstNumber: PropTypes.string,
  secondNumber: PropTypes.string, 
  operator: PropTypes.string,
}

export default ResultsPanel