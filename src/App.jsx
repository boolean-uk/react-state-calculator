import "./App.css"
import { useState } from 'react'

function App() {
  const [field1, setField1] = useState(0)
  const [field2, setField2] = useState('+')
  const [field3, setField3] = useState(0)
  const [field4, setField4] = useState(0)
  const [stored, setStored] = useState(0)

  const handleClick1 = (event) =>{
    if (event.target.tagName === 'BUTTON') {
      //Parse the field so we can check if it is a zero
      const parsed1 = parseFloat(field1)
      if(event.target.innerText === 'Clear') {
        setField1(0)
      }else if(event.target.innerText === 'Use stored'){
        setField1(parseFloat(stored))
      }else if(event.target.innerText === ','){
        //Check if it is not already a decimal
        if(!field1.toString().includes('\.')){
          setField1(parseFloat(field1)+'.')
        }
      }else if(parsed1 === 0 && !field1.toString().includes('\.')){
        //If it is 0 set it to a new number
        setField1(event.target.innerText)
      }else if(parsed1 !== 0 || field1 === '0.'){
        //If it is not 0, append the number
        const extra = event.target.innerText
        setField1(field1 + extra)
      } 
    }
  }

  const handleClick2 = (event) =>{
    if (event.target.tagName === 'BUTTON') {
      setField2(event.target.innerText)
    }
  }

  const handleClick3 = (event) =>{
    if (event.target.tagName === 'BUTTON') {
      const parsed3 = parseFloat(field3)
      if(event.target.innerText === 'Clear') {
        setField3(0)
      }else if(event.target.innerText === 'Use stored'){
        setField3(parseFloat(stored))
      }else if(event.target.innerText === ','){
        //Check if it is not already a decimal
        if(!field3.toString().includes('\.')){
          setField3(parseFloat(field3)+'.')
        }
      }else if(parsed3 === 0 && !field3.toString().includes('\.')){
        //If it is 0 set it to a new number
        setField3(event.target.innerText)
      }else if(parsed3 !== 0 || field3 === '0.'){
        //If it is not 0, append the number
        const extra = event.target.innerText
        setField3(field3 + extra)
      } 
    }
  }

  const handleClick4 = (event) =>{
    if (event.target.tagName === 'BUTTON') {
      //Handle answer
      if(event.target.innerText === '=') {
        let answer = 0
        const parsed1 = parseFloat(field1)
        const parsed3 = parseFloat(field3)
        if(field2 === '+'){
          answer = parsed1+parsed3
        }else if(field2 === '-'){
          answer = parsed1-parsed3
        }else if(field2 === '÷'){
          answer = parsed1/parsed3
        }else if(field2 === '*'){
          answer = parsed1*parsed3
        }
        //Restrict the return number to 2 decimals or without decimals if it is an int
        if(Number.isInteger(answer)){
          setField4(answer)
        }else{
          setField4(parseFloat(answer).toFixed(2))
        }
      } else if(event.target.innerText === 'Store'){
        setStored(field4)
      }
  }
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{field1}</p>
        <div className="numbers" onClick={handleClick1}>
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
          <button>Clear</button>
          <button>Use stored</button>
          <button>,</button>
        </div>
      </div>

      <div className="panel">
        <p>{field2}</p>
        <div className="numbers" onClick={handleClick2}>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{field3}</p>
        <div className="numbers" onClick={handleClick3}>
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
          <button>Clear</button>
          <button>Use stored</button>
          <button>,</button>
        </div>
      </div>
      <div className="panel answer" onClick={handleClick4}>
        <p>{field4}</p>
        <div>
          <button>=</button>
          <button>Store</button>
          <p>Stored answer: {stored}</p>
        </div>
      </div>
    </div>
  )
}

export default App
