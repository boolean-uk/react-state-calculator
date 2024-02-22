import { useState } from "react"
import CalculatorNumbers from "./CalculatorNumbers"
import CalculatorOperators from "./CalculatorOperators"

// Map of operators to functions that calculates result
// As string to account for division by zero resulting in "Infinity" etc.
const operatorMap = {
    "+": (a, b) => `${a + b}`,
    "-": (a, b) => `${a - b}`,
    "*": (a, b) => `${a * b}`,
    "÷": (a, b) => `${a / b}`,
}

export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0)
    const [operator, setOperator] = useState("+")
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState(0)
    const [storedResult, setStoredResult] = useState("0")

    return (
        <div className="calculator">
            <CalculatorNumbers setValue={setFirstNumber} value={firstNumber} stored={storedResult} />
            <CalculatorOperators setValue={setOperator} value={operator} />
            <CalculatorNumbers setValue={setSecondNumber} value={secondNumber} stored={storedResult} />
            <div className="panel answer">
                <p>{result}</p>
                <div>
                    <button onClick={() => setResult(operatorMap[operator](firstNumber, secondNumber))}>=</button>
                    <button onClick={() => { setStoredResult(result) }}>Store</button>
                </div>
            </div>
        </div>
    )
}