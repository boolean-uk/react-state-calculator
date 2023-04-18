import "./App.css"
import {useState} from 'react'


function App() { 
const [number1, setNumber1] = useState(0) 
//const [number2, setNumber2] = useState(0)

//const [addcount , setAddCount ] = useState(0)



const clickNumber1 = (event) => {
  event.preventDefault()
  console.log(event)
const number11 = event.target[1]._reactProps$7fx6lcrc3dj.id
console.log(number11)
}
  return (
    <div className="calculator">
        <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button onClick={clickNumber1} id='1'>1</button>
            <button onClick={clickNumber1} id='2'>2</button>
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
          <p>+</p>
          <div className="numbers">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>0</p>
          <div className="numbers">
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
        <div className="panel answer">
          <p>0</p>
          <div>
            <button>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
