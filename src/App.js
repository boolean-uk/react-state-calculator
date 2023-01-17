import { useState } from "react"
import "./App.css"

function App() {
  const [numbers1, setNumbers1] = useState('0') // otherwuse if number it will be added and not be used correctly as calculater
  const [operations, setOperations] = useState('+')
  const [numbers2, setNumbers2] = useState('0')
  const [result, setResult] = useState('0')
  const [storeResult, setstore] = useState('0')
  console.log('store', result, storeResult)
  console.log('recall', numbers2)

  // extensions 2: i should have a store button underneath my answer to save my current answer so when i press the recall button on the 2 panels it will equal my current answer i stored
  // add a button 
  // when it clicks it will make it equal to the number on panel
  // when i hit the recall that number should display on its panel

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numbers1}</p>
        <div className="numbers">
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('1') // if numbers1 is 0 we set it to 1 so it doesnt add on with it otherwise it will be added along the line
            } else {
              setNumbers1(numbers1 + '1')
            }
          }}>1</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('2')
            } else {
              setNumbers1(numbers1 + '2')
            }
          }}>2</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('3')
            } else {
              setNumbers1(numbers1 + '3')
            }
          }}>3</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('4')
            } else {
              setNumbers1(numbers1 + '4')
            }
          }}>4</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('5')
            } else {
              setNumbers1(numbers1 + '5')
            }
          }}>5</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('6')
            } else {
              setNumbers1(numbers1 + '6')
            }
          }}>6</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('7')
            } else {
              setNumbers1(numbers1 + '7')
            }
          }}>7</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('8')
            } else {
              setNumbers1(numbers1 + '8')
            }
          }}>8</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('9')
            } else {
              setNumbers1(numbers1 + '9')
            }
          }}>9</button>
          <button onClick={() => {
            if (numbers1 === '0') {
              setNumbers1('0')
            } else {
              setNumbers1(numbers1 + '0')
            }
          }}>0</button>
          <button onClick={() => { setNumbers1('0') }}>Clear</button>
          <button onClick={() => {setNumbers1(storeResult)}}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operations}</p>
        <div className="numbers">
          <button onClick={() => setOperations('+')}>+</button>
          <button onClick={() => setOperations('-')}>-</button>
          <button onClick={() => setOperations('*')}>*</button>
          <button onClick={() => setOperations('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numbers2}</p>
        <div className="numbers">
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers1('1') // if numbers1 is 0 we set it to 1 so it doesnt add on with it otherwise it will be added along the line
            } else {
              setNumbers1(numbers1 + '1')
            }
          }}>1</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('2')
            } else {
              setNumbers2(numbers2 + '2')
            }
          }}>2</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('3')
            } else {
              setNumbers2(numbers2 + '3')
            }
          }}>3</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('4')
            } else {
              setNumbers2(numbers2 + '4')
            }
          }}>4</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('5')
            } else {
              setNumbers2(numbers2 + '5')
            }
          }}>5</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('6')
            } else {
              setNumbers2(numbers2 + '6')
            }
          }}>6</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('7')
            } else {
              setNumbers2(numbers2 + '7')
            }
          }}>7</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('8')
            } else {
              setNumbers2(numbers2 + '8')
            }
          }}>8</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('9')
            } else {
              setNumbers2(numbers2 + '9')
            }
          }}>9</button>
          <button onClick={() => {
            if (numbers2 === '0') {
              setNumbers2('0')
            } else {
              setNumbers2(numbers2 + '0')
            }
          }}>0</button>
          <button onClick={() => { setNumbers2('0') }}>Clear</button>
          <button onClick={() => {setNumbers2(storeResult)}}>Recall</button>
        </div>
      </div>

      <div className="panel answer">
        <p>{result}</p>

        <div>
          <button onClick={() => {
            if (operations === '+') {
              setResult(parseInt(numbers1) + parseInt(numbers2))
            }
            if (operations === '-') {
              setResult(parseInt(numbers1) - parseInt(numbers2))
            } if (operations === '*') {
              setResult(parseInt(numbers1) * parseInt(numbers2))
            }
            if (operations === '÷') {
              setResult(parseInt(numbers1) / parseInt(numbers2))
            }
          }}>=</button>
          <button onClick={() => { setstore(result) }}>Store?</button>
        </div>
      </div>
    </div>
  )
}

export default App
