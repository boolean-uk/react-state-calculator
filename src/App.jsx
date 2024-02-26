import "./App.css"
import { useState } from 'react'

function App() {
  const [field1, setField1] = useState(0)
  const [field2, setField2] = useState('+')
  const [field3, setField3] = useState(0)
  const [field4, setField4] = useState(0)

  const handleClick1 = (event) =>{
    if (event.target.tagName === 'BUTTON') {
      if(event.target.innerText === 'Clear') {
        setField1(0)
      }else{
        setField1(event.target.innerText)
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
      if(event.target.innerText === 'Clear') {
        setField3(0)
      }else{
        setField3(event.target.innerText)
      }
      
    }
  }

  const handleClick4 = (event) =>{
    if (event.target.tagName === 'BUTTON') {
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
      setField4(answer)
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
        </div>
      </div>
      <div className="panel answer" onClick={handleClick4}>
        <p>{field4}</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
