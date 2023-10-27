import {useState} from 'react'
import "./App.css"

function App() {
  
  const [numOne , setNumOne] = useState('0')
  const [numTwo , setNumTwo] = useState('0')
  const [operator , setOperator] = useState('+')
  const [answer , setAnswer] = useState(0)

  const numOneClick=(event)=>{
    if(numOne === '0'){
      setNumOne(event.target.innerText)
    }else{
      setNumOne(numOne + event.target.innerText)
    }
  }

  const numTwoClick=(event)=>{
    if(numTwo === '0'){
      setNumTwo(event.target.innerText)
    }else{
      setNumTwo(numTwo + event.target.innerText)
    }
  }

  const calc = ()=>{
    if(operator === '+'){
      setAnswer(parseInt(numOne) + parseInt(numTwo))
    }
    else if(operator === '-'){
      setAnswer(parseInt(numOne) - parseInt(numTwo))
    }
    else if(operator === '*'){
      setAnswer(parseInt(numOne) * parseInt(numTwo))
    }
    else if(operator === '÷'){
      setAnswer(parseInt(numOne) / parseInt(numTwo))
    }
  }



  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={event =>numOneClick(event)}>1</button>
          <button onClick={event =>numOneClick(event)}>2</button>
          <button onClick={event =>numOneClick(event)}>3</button>
          <button onClick={event =>numOneClick(event)}>4</button>
          <button onClick={event =>numOneClick(event)}>5</button>
          <button onClick={event =>numOneClick(event)}>6</button>
          <button onClick={event =>numOneClick(event)}>7</button>
          <button onClick={event =>numOneClick(event)}>8</button>
          <button onClick={event =>numOneClick(event)}>9</button>
          <button onClick={event =>numOneClick(event)}>0</button>
          <button onClick={()=>{setNumOne('0')}}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={(event=>setOperator(event.target.innerText))}>+</button>
          <button onClick={(event=>setOperator(event.target.innerText))}>-</button>
          <button onClick={(event=>setOperator(event.target.innerText))}>*</button>
          <button onClick={(event=>setOperator(event.target.innerText))}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={event=>numTwoClick(event)}>1</button>
          <button onClick={event=>numTwoClick(event)}>2</button>
          <button onClick={event=>numTwoClick(event)}>3</button>
          <button onClick={event=>numTwoClick(event)}>4</button>
          <button onClick={event=>numTwoClick(event)}>5</button>
          <button onClick={event=>numTwoClick(event)}>6</button>
          <button onClick={event=>numTwoClick(event)}>7</button>
          <button onClick={event=>numTwoClick(event)}>8</button>
          <button onClick={event=>numTwoClick(event)}>9</button>
          <button onClick={event=>numTwoClick(event)}>0</button>
          <button onClick={()=>setNumTwo('0')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={()=>calc()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
