import "./App.css"
import { useState } from 'react'

function App() {
  
  // useStates
  const [numberOne, setNumberOne] = useState('0')
  const [operator, setOperator] = useState('+')
  const [numberTwo, setNumberTwo] = useState('0')
  const [answer, setAnswer] = useState('0')
  const [saved, setSaved] = useState('0')

  // buttons
  const handleClick1 = (event) => {
    // checks if the click was a <button> in its tag
    if (event.target.tagName === 'BUTTON') {
      if (event.target.innerText === 'Recall'){
        setNumberOne(saved)
      }
      else if (event.target.innerText === 'Clear'){
        setNumberOne('0')
      }
      else if (event.target.innerText === '.'){
        if(numberOne.toString().includes('\.')){
          setnumberOne(numberOne)
    
        }
        setNumberOne(numberOne + event.target.innerText)
      }
      else if (numberOne === '0'){
          setNumberOne(event.target.innerText)
        }
      else{
        setNumberOne(numberOne + event.target.innerText)
      }
    }
  }
  const handleClick2 = (event) => {
    if (event.target.tagName === 'BUTTON') {
        setOperator(event.target.innerText)
      }
  }
  
  const handleClick3 = (event) => {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.innerText === 'Recall'){
        setNumberTwo(saved)
      }
      else if (event.target.innerText === 'Clear'){
        setNumberTwo('0')
      }
      else if (event.target.innerText === '.'){
        if(numberTwo.toString().includes('\.')){
          setnumberTwo(numberTwo)
    
        }
        setNumberTwo(numberTwo + event.target.innerText)
      }
      
      else if (numberTwo === '0'){
          setNumberTwo(event.target.innerText)
      }
      else{
          setNumberTwo(numberTwo + event.target.innerText)
      }
      
    }
  }

  const handleClick4 = (event) => {
    let total = 0
    if (event.target.tagName === 'BUTTON') {
      if (event.target.innerText === 'Save'){
        setSaved(answer)
        
      } else{
        if(operator === '-') {
          
          total = Number(numberOne) - Number(numberTwo)

        }
        else if(operator === '+') {
          total = Number(numberOne) + Number(numberTwo)

        }
        else if(operator === '*') {
          total = Number(numberOne) * Number(numberTwo)

        }
        else {
          total = Number(numberOne) / Number(numberTwo)
        }
        if(Number.isInteger(total)){
          setAnswer(total)
        }else{
          setAnswer(parseFloat(total).toFixed(2))
        }
      }
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{numberOne}</p>
        <div className="numbers" onClick = {handleClick1}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
          <button>Clear</button>
          <button>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers" onClick = {handleClick2}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numberTwo}</p>
        <div className="numbers" onClick = {handleClick3}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>.</button>
          <button>Clear</button>
          <button>Recall</button>
        </div>
      </div>
      <div className="panel answer" onClick = {handleClick4}>
        <p>{answer}</p>
        <div>
          <button>=</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  )
}

export default App
