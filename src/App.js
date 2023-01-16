import "./App.css"
import { useState } from 'react' 

function App() { 

    const [firstNum, setFirstNum] = useState('0')
    const [opp, setOpp] = useState("+")
    const [secondNum, setSecondNum] = useState('0')
    const [result, setResult] = useState(0)
    const [storedResult, setStoredResult] = useState('')

    function firstNumberToUse(event) {
        const value = event.target.innerText
        if(firstNum === "0") {
            setFirstNum(value)
        } else {
            setFirstNum(firstNum + value)
        }
    }

    function secondNumberToUse(event) {
        const value = event.target.innerText
        if(secondNum === "0") {
            setSecondNum(value)
        } else {
            setSecondNum(secondNum + value)
        }
    }
  return (
    <div className="calculator">
        <div className="panel">
            <p>{firstNum}</p>
            <div className="numbers">
                <button 
                onClick={(firstNumberToUse)}>1</button>
                <button
                onClick={(firstNumberToUse)}>2</button>
                <button
                onClick={(firstNumberToUse)}>3</button>
                <button
                onClick={(firstNumberToUse)}>4</button>
                <button
                onClick={(firstNumberToUse)}>5</button>
                <button
                onClick={(firstNumberToUse)}>6</button>
                <button
                onClick={(firstNumberToUse)}>7</button>
                <button
                onClick={(firstNumberToUse)}>8</button>
                <button
                onClick={(firstNumberToUse)}>9</button>
                <button
                onClick={(firstNumberToUse)}>0</button>
                <button
                onClick={() => {
                    setFirstNum("0")
                }}>Clear</button>
                <button onClick={() => {
                    if(!firstNum.includes(".")) {
                        setFirstNum(firstNum + ".")
                    }
                }}>.</button>
                <button onClick={() => {
                    setFirstNum(storedResult)
                }}>Recall</button>

            </div>
        </div>
        
        <div className="panel">
          <p>{opp}</p>
          <div className="numbers">
            <button
            onClick={() => {
                setOpp("+")
            }}>+</button>
            <button
            onClick={() => {
                setOpp("-")
            }}>-</button>
            <button
            onClick={() => {
                setOpp("*")
            }}>*</button>
            <button
            onClick={() => {
                setOpp("÷")
            }}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{secondNum}</p>
          <div className="numbers">
          <button 
                onClick={(secondNumberToUse)}>1</button>
                <button
                onClick={(secondNumberToUse)}>2</button>
                <button
                onClick={(secondNumberToUse)}>3</button>
                <button
                onClick={(secondNumberToUse)}>4</button>
                <button
                onClick={(secondNumberToUse)}>5</button>
                <button
                onClick={(secondNumberToUse)}>6</button>
                <button
                onClick={(secondNumberToUse)}>7</button>
                <button
                onClick={(secondNumberToUse)}>8</button>
                <button
                onClick={(secondNumberToUse)}>9</button>
                <button
                onClick={(secondNumberToUse)}>0</button>
                <button
                onClick={() => {
                    setSecondNum("0")
                }}>Clear</button>
                <button onClick={() => {
                    if(!secondNum.includes(".")) {
                        setSecondNum(secondNum + ".")
                    }
                }}>.</button>
                <button onClick={() => {
                    setSecondNum(storedResult)
                }}>Recall</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <button
            onClick={() => {
                const firstValue = parseFloat(firstNum)
                const secondValue = parseFloat(secondNum)
                if (opp === "+") {
                    setResult(firstValue + secondValue)
                } else if (opp === "-") {
                    setResult(firstValue - secondValue)
                } else if (opp === "*") {
                    setResult(firstValue * secondValue)
                } else if (opp === "÷") {
                    setResult(firstValue / secondValue)
                }
            }}>=</button>
            <button
            onClick={() => {
                setStoredResult(result)
            }}>Store</button>
          </div>
        </div>
    </div>
  )
}

export default App
