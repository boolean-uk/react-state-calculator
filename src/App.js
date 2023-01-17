import { useState } from "react"
import "./App.css"
////////
function App() { 
  let [displayValue1, setDisplayValue1] = useState ('0');
  let [ operation, setOperation] = useState('+');
  let [displayValue2, setDisplayValue2] = useState('0')
  let [result , setResult] = useState(0);
  let [stored, setStored] = useState(undefined);


const handleClick1 = (event) => {
  if (event.target.innerText === '.') {
   if(!displayValue1.includes('.')){
     if(displayValue1 === '0'){
       setDisplayValue1(displayValue1 = '0' + event.target.innerText)
     } else {
     setDisplayValue1(displayValue1 + event.target.innerText)
     }
   }
   } else { 
     if (displayValue1 === '0') {
       setDisplayValue1(displayValue1 = event.target.innerText)
     } else {
       setDisplayValue1(displayValue1 + event.target.innerText)
     }
   }
 }

const resetDisplayValue1 = () => {
  setDisplayValue1(displayValue1 = '0')
}

const handleOperation = (event) => {
  setOperation(operation = event.target.innerText)
}

const handleClick2 = (event) => {
  if (event.target.innerText === '.') {
   if(!displayValue2.includes('.')){
     if(displayValue2 === '0'){
       setDisplayValue2(displayValue2 = '0' + event.target.innerText)
     } else {
     setDisplayValue2(displayValue2 + event.target.innerText)
     }
   }
   } else { 
     if (displayValue2 === '0') {
       setDisplayValue2(displayValue2 = event.target.innerText)
     } else {
       setDisplayValue2(displayValue2 + event.target.innerText)
     }
   }
 }

 const resetDisplayValue2 = () => {
  setDisplayValue2(displayValue2 = '0')
}

const handleResult = () => {
  setResult(result  = getResult(displayValue1, operation, displayValue2))
  resetDisplayValue1()
  resetDisplayValue2()
}

const getResult = (displayValue1, operation, displayValue2) => {
  switch(operation){
    case '+' : return Number(displayValue1) + Number(displayValue2)
    case '-' : return Number(displayValue1) - Number(displayValue2)
    case '*' : return Number(displayValue1) * Number(displayValue2)
    case '/' : return Number(displayValue1) / Number(displayValue2)
    default: console.log('select a operation')
  }
}

const handleStore =() => {
setStored(stored = result)
}


  return (
    <div className="calculator">
        <div className="panel">
          <p>{displayValue1}</p>
          <div className="numbers">
            <button onClick={handleClick1}>1</button>
            <button onClick={handleClick1}>2</button>
            <button onClick={handleClick1}>3</button>
            <button onClick={handleClick1}>4</button>
            <button onClick={handleClick1}>5</button>
            <button onClick={handleClick1}>6</button>
            <button onClick={handleClick1}>7</button>
            <button onClick={handleClick1}>8</button>
            <button onClick={handleClick1}>9</button>
            <button onClick={handleClick1}>0</button>
            <button onClick={resetDisplayValue1}>Clear</button>
            <button onClick={handleClick1}>.</button>
            <button onClick={handleStore}>{stored}</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{operation}</p>
          <div className="numbers">
            <button onClick={handleOperation}>+</button>
            <button onClick={handleOperation}>-</button>
            <button onClick={handleOperation}>*</button>
            <button onClick={handleOperation}>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>{displayValue2}</p>
          <div className="numbers">
            <button onClick={handleClick2}>1</button>
            <button onClick={handleClick2}>2</button>
            <button onClick={handleClick2}>3</button>
            <button onClick={handleClick2}>4</button>
            <button onClick={handleClick2}>5</button>
            <button onClick={handleClick2}>6</button>
            <button onClick={handleClick2}>7</button>
            <button onClick={handleClick2}>8</button>
            <button onClick={handleClick2}>9</button>
            <button onClick={handleClick2}>0</button>
            <button onClick={resetDisplayValue2}>Clear</button>
            <button onClick={handleClick2}>.</button>
            <button onClick={handleStore}>{stored}</button>
            
          </div>
        </div>
        <div className="panel answer">
          
          <p>{result}</p>
          <div>
            <button onClick={handleResult}>=</button>
            <button onClick={handleStore}>Store</button>
            
            
          </div>
        </div>
    </div>
  )
}

export default App