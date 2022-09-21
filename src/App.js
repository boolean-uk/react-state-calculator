import "./App.css"
import {useState, React} from "react"

function App() { 

  const [numOne, setNumOne] = useState(0)
  const [operator, setOperator] = useState('+')
  const [numTwo, setNumTwo] = useState(0)
  const [answer, setAnswer] = useState(0)

  const updatePanelOne = (input) => {
    return (numOne === 0 ? setNumOne(input) : setNumOne('' + numOne + input))
  }
  const updatePanelTwo = (input) => {
    return (numTwo === 0 ? setNumTwo(input) : setNumTwo('' + numTwo + input))
  }

  return (
    <div className="calculator">
        <div className="panel">
          <p>{numOne}</p>
          <div className="numbers">
            <button onClick={() => updatePanelOne(1)}>1</button>
            <button onClick={() => updatePanelOne(2)}>2</button>
            <button onClick={() => updatePanelOne(3)}>3</button>
            <button onClick={() => updatePanelOne(4)}>4</button>
            <button onClick={() => updatePanelOne(5)}>5</button>
            <button onClick={() => updatePanelOne(6)}>6</button>
            <button onClick={() => updatePanelOne(7)}>7</button>
            <button onClick={() => updatePanelOne(8)}>8</button>
            <button onClick={() => updatePanelOne(9)}>9</button>
            <button onClick={() => updatePanelOne(0)}>0</button>
            <button onClick={() => setNumOne(0)}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <button onClick={() => setOperator('+')}>+</button>
            <button onClick={() => setOperator('-')}>-</button>
            <button onClick={() => setOperator('*')}>*</button>
            <button onClick={() => setOperator('/')}>/</button>
          </div>
        </div>

        <div className="panel">
          <p>{numTwo}</p>
          <div className="numbers">
            <button onClick={() => updatePanelTwo(1)}>1</button>
            <button onClick={() => updatePanelTwo(2)}>2</button>
            <button onClick={() => updatePanelTwo(3)}>3</button>
            <button onClick={() => updatePanelTwo(4)}>4</button>
            <button onClick={() => updatePanelTwo(5)}>5</button>
            <button onClick={() => updatePanelTwo(6)}>6</button>
            <button onClick={() => updatePanelTwo(7)}>7</button>
            <button onClick={() => updatePanelTwo(8)}>8</button>
            <button onClick={() => updatePanelTwo(9)}>9</button>
            <button onClick={() => updatePanelTwo(0)}>0</button>
            <button onClick={() => setNumTwo(0)}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{answer}</p>
          <div>
            <button onClick={() => setAnswer(Number(eval(numOne + operator + numTwo)).toFixed(2))}>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
