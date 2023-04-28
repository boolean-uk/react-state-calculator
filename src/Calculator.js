import {useState} from 'react'
import './Firstpanel.css'

function Firstpanel(props){

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
    const newNumber = numberArr.join('')
    
    console.log(newNumber)
    
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

function middlePanel(props){

}

export {
    Firstpanel
}