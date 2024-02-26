import { useState } from "react"
import "./App.css"


const buttonLabels = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'Clear'
]

const signButtonLabels = [
  '+', '-', '*', '÷'
]

function App() {
  let [firstDec, setFirstDec] = useState(false)
  let [firstDecimal, setFirstDecimal] = useState(1)

  let [secondDec, setSecondDec] = useState(false)
  let [secondDecimal, setSecondDecimal] = useState(1)
  

  const [first, setFirst] = useState(0)
  const [sign, setSign] = useState('+')
  const [second, setSecond] = useState(0)
  const [result, setResult] = useState()

  function addFirstNum(inp) {
    if (inp === "Clear") {
      setFirstDec(false)
      setFirstDecimal(1)
      setFirst(0)
    }
    else if (inp === ".") {
      setFirstDec(true)
    }
    else {
      let num = parseInt(inp)
      if (!firstDec) {
        setFirst(first*10+num)
      }
      else {
        let d = parseFloat((num/(10**firstDecimal)).toFixed(firstDecimal))
        setFirst(first+d)
        setFirstDecimal(firstDecimal+1)
      }
    }
  }

  function addSecondNum(inp) {
    if (inp === "Clear") {
      setSecondDec(false)
      setSecondDecimal(1)
      setSecond(0)
    }
    else if (inp === ".") {
      setSecondDec(true)
    }
    else {
      let num = parseInt(inp)
      if (!secondDec) {
        setSecond(second*10+num)
      }
      else {
        let d = parseFloat((num/(10**secondDecimal)).toFixed(secondDecimal))
        setSecond(second+d)
        setSecondDecimal(secondDecimal+1)
      }
    }
  }

  function calculate() {
    let result = 0
    switch (sign){
      case '+': 
        result = first+second
        break
      
      case '-': 
        result = first-second
        break
      
      case '*': 
        result = first*second
        break
      
      case '÷': 
        result = first/second
        break
    }
    let r = 0
    if (secondDecimal>firstDecimal){
      r = secondDecimal - 1
    }
    else {
      r = firstDecimal -1
    }
    setResult(result.toFixed(r))
  
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          {buttonLabels.map(btn => 
            <button onClick={() => addFirstNum(btn)}> {btn} </button>
          )}
        </div>
      </div>

      <div className="panel">
        <p>{sign}</p>
        <div className="numbers">
          {signButtonLabels.map(btn => 
            <button onClick={() => setSign(btn)}> {btn} </button>
          )}
        </div>
      </div>

      <div className="panel">
        <p>{second}</p>
        <div className="numbers">
        {buttonLabels.map(btn => 
            <button onClick={() => addSecondNum(btn)}> {btn} </button>
          )}
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
