import { useState } from "react"
import "./App.css"

function App() {
  const [DisplayNumber, setDisplayNumber] = useState(0)
  const [Operation, setOperation] = useState('+')
  const [DisplayNumber2, setDisplayNumber2] = useState(0)
  const [FinalAnswer, setFinalAnswer] = useState(0)

  

  const FinalAnswerHandler = () => {

    const Number1 = parseInt(DisplayNumber, 10)
    const Number2 = parseInt(DisplayNumber2, 10)

    switch (Operation) {
      case '+' :
        setFinalAnswer(Number1 + Number2)
        break
      case '-' :
        setFinalAnswer(Number1 - Number2)
        break
      case '*' :
        setFinalAnswer(Number1 * Number2)
        break 
      case '÷' :
        setFinalAnswer(Number1 / Number2)
        break 
      default :
        setFinalAnswer(0)
    }
  }

  // function for the first button
  const handleClickEvent = (event) => {
    const panel1 = event.target.getAttribute('data-number')

    if (DisplayNumber === 0) {
      console.log('this si the 0 to be checked ')
      setDisplayNumber(panel1)
    } else {
      setDisplayNumber(DisplayNumber + panel1)
    }

    
    console.log(`this is the value clicked ${panel1}`)
    
  }

  // for the second buttons of thr numner
  const HanddleDisplayNumber2 = (event) => {
    const value = event.target.getAttribute('data-number1')

    if (DisplayNumber2 === 0) {
      console.log('this si the 0 to be checked ')
      setDisplayNumber2(value)
    } else {
      setDisplayNumber2(DisplayNumber2 + value)
    }

    console.log(`this is the value clicked ${value}`)
  } 

    // function for the opeartion
    const HandleTheCalculation = (event) =>{
      const value = event.target.getAttribute('data-calculation')
      setOperation(value)
      console.log(`this is the value clicked ${value}`)
    }
  

  // function to clear the panel of both 1 NDS 2
  const ClearThePanel = (event) => {
    const ClearPanel1 = event.target.getAttribute('data-clear1')
    const ClearPanel2 = event.target.getAttribute('data-clear2')
    const ClearPanel3 = event.target.getAttribute('data-clear3')

    if (ClearPanel1 === 'clear1') {
      setDisplayNumber(0)
    } 

    if (ClearPanel2 === 'clear2') {
      setDisplayNumber2(0)
    }

    if (ClearPanel3 === 'clear3') {
      setFinalAnswer(0)
    }
    console.log('i am being clicked to clear the page')
  }


  return (
    <div className="calculator">
      <div className="panel">
        <p>{DisplayNumber}</p>
        <div className="numbers">
          <button onClick={handleClickEvent} data-number='1'>1</button>
          <button onClick={handleClickEvent} data-number='2'>2</button>
          <button onClick={handleClickEvent} data-number='3'>3</button>
          <button onClick={handleClickEvent} data-number='4'>4</button>
          <button onClick={handleClickEvent} data-number='5'>5</button>
          <button onClick={handleClickEvent} data-number='6'>6</button>
          <button onClick={handleClickEvent} data-number='7'>7</button>
          <button onClick={handleClickEvent} data-number='8'>8</button>
          <button onClick={handleClickEvent} data-number='9'>9</button>
          <button onClick={handleClickEvent} data-number='0'>0</button>
          <button onClick={ClearThePanel} data-clear1='clear1'>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{Operation}</p>
        <div className="numbers">
          <button onClick={HandleTheCalculation} data-calculation='+'>+</button>
          <button onClick={HandleTheCalculation} data-calculation='-'>-</button>
          <button onClick={HandleTheCalculation} data-calculation='*'>*</button>
          <button onClick={HandleTheCalculation} data-calculation='÷'>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{DisplayNumber2}</p>
        <div className="numbers">
          <button onClick={HanddleDisplayNumber2} data-number1='1'>1</button>
          <button onClick={HanddleDisplayNumber2} data-number1='2'>2</button>
          <button onClick={HanddleDisplayNumber2} data-number1='3'>3</button>
          <button onClick={HanddleDisplayNumber2} data-number1='4'>4</button>
          <button onClick={HanddleDisplayNumber2} data-number1='5'>5</button>
          <button onClick={HanddleDisplayNumber2} data-number1='6'>6</button>
          <button onClick={HanddleDisplayNumber2} data-number1='7'>7</button>
          <button onClick={HanddleDisplayNumber2} data-number1='8'>8</button>
          <button onClick={HanddleDisplayNumber2} data-number1='9'>9</button>
          <button onClick={HanddleDisplayNumber2} data-number1='0'>0</button>
          <button onClick={ClearThePanel} data-clear2='clear2'>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{FinalAnswer}</p>
        <div>
          <button onClick={FinalAnswerHandler}>=</button>
          <button onClick={ClearThePanel} data-clear3='clear3'> Clear</button>
        </div>
      </div>
    </div>
  )
}

export default App
