import {useState} from 'react'
import './Panel.css'
import './Answer.css'

function Panel(props){

  const values = props.buttonValues

  const [number, enterNumber] = useState(values)
  

  
  const numberArr = []
  const clickEvent = (num) => {
    // Show the number of the button in the p tag
    // Update the number in the p tag
    const buttons = document.querySelectorAll('button')
    
    const buttonCount = []
    buttons.forEach(button => {
      buttonCount.push(button)
    })
   
    const key = buttonCount.filter(button => button.innerText == num)

    numberArr.push(key[0].innerText)
    let newNumber = numberArr[numberArr.length-1]
    
    
    

    enterNumber(newNumber)
    
    
  }

  return(
        <div className="panel">
          <p>{number}</p>
          <div className="numbers">
            <button onClick = {() => clickEvent(1)}>1</button>
            <button onClick = {() => clickEvent(2)}>2</button>
            <button onClick = {() => clickEvent(3)}>3</button>
            <button onClick = {() => clickEvent(4)}>4</button>
            <button onClick = {() => clickEvent(5)}>5</button>
            <button onClick = {() => clickEvent(6)}>6</button>
            <button onClick = {() => clickEvent(7)}>7</button>
            <button onClick = {() => clickEvent(8)}>8</button>
            <button onClick = {() => clickEvent(9)}>9</button>
            <button onClick = {() => clickEvent(0)}>0</button>
            <button onClick = {() => clickEvent(0)}>Clear</button>
          </div>
        </div>
  )
}

function MiddlePanel(props){
  const values = props.buttonValues

  const [operator, enterOperator] = useState(values)

  const operatorArr = []
  const clickEvent = (ops) => {
    const buttons = document.querySelectorAll('button')

    const buttonCount = []
    buttons.forEach(button => {
      buttonCount.push(button)
    })

    const key = buttonCount.filter(button => button.innerText == ops)
    

    operatorArr.push(key[0].innerText)

    let newOperator = operatorArr[operatorArr.length - 1]

    enterOperator(newOperator)
    
  }


  return(
    <div className="panel">
      <p>{operator}</p>
      <div className="numbers">
          <button onClick = {() => clickEvent('+')}>+</button>
          <button onClick = {() => clickEvent('-')}>-</button>
          <button onClick = {() => clickEvent('*')}>*</button>
          <button onClick = {() => clickEvent('÷')}>÷</button>
      </div>
    </div>
  )

}

function Answer(props){
  
  const value = props.buttonValues

  const [result, calculateResult] = useState(value)

  const clickEvent = () => {
    const pTags = document.querySelectorAll('p')
    
    if (pTags[1].innerText === '÷'){
      const expression = (pTags[0].innerText + '/' + pTags[2].innerText)
      const answer = eval(expression)
      calculateResult(answer)
    } else {
      const expression = (pTags[0].innerText + pTags[1].innerText + pTags[2].innerText)
      const answer = eval(expression)
      calculateResult(answer)
    }
    
  }

  return(
    <div className="panel answer">
      <p>{result}</p>
      <div>
        <button onClick = {() => clickEvent()}>=</button>
      </div>
    </div>
  )
}

export {
    Panel,
    MiddlePanel, 
    Answer
}