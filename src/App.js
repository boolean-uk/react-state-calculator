import "./App.css"

import { useState } from 'react'
import Button from './Button'
import Operators from './Operators'

function App() { 
  const [firstNumber, setFirstP] = useState(0)
  // to display sympols (+, *) make them 'strings'
  // if its not a number or a boolean make it a string! 
  const [operator, setFirstO] = useState('+')
  const [secondNumber, setSecondNumber] = useState(0)
  const [result, setResult] = useState(0)


  return (
    <div className="calculator">
        <div className="panel">
          <p>{firstNumber}</p>
          <div className="numbers">
            {/*
              Button component needs 
                1) a value as a display name
                2) a function that will be called when it is clicked
                  We pass the setFirstP function as a parameter to our
                  Button component and assign it to the onClick function
                  So, when the button is clicked, the firstP function is called
            */}
            <Button value={1} fun={setFirstP} />
            <Button value={2} fun={setFirstP} />
            <Button value={3} fun={setFirstP} />
            <Button value={4} fun={setFirstP} />
            <Button value={5} fun={setFirstP} />
            <Button value={6} fun={setFirstP} />
            <Button value={7} fun={setFirstP} />
            <Button value={8} fun={setFirstP} />
            <Button value={9} fun={setFirstP} />
            <Button value={0} fun={setFirstP} />
            <Button value={'Clear'} fun={setFirstP} />
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <Operators value={'+'} fun={setFirstO} />
            <Operators value={'-'} fun={setFirstO} />
            <Operators value={'*'} fun={setFirstO} />
            <Operators value={'÷'} fun={setFirstO} />
          </div>
        </div>

        <div className="panel">
          <p>{secondNumber}</p>
          <div className="numbers">
            <Button value={1} fun={setSecondNumber} />
            <Button value={2} fun={setSecondNumber} />
            <Button value={3} fun={setSecondNumber} />
            <Button value={4} fun={setSecondNumber} />
            <Button value={5} fun={setSecondNumber} />
            <Button value={6} fun={setSecondNumber} />
            <Button value={7} fun={setSecondNumber} />
            <Button value={8} fun={setSecondNumber} />
            <Button value={9} fun={setSecondNumber} />
            <Button value={0} fun={setSecondNumber} />
            {/* we have to make a buttun with the clear function*/}
            <Button value={'Clear'} fun={setSecondNumber(0)} />
              {/* function clear = 0 value of secondNumber*/}
              {/*  clear turns the value of the secondNumber to zero */}
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <Button value={'='} fun={function() {
              let answer = 0
              if (operator === '+')
                answer = firstNumber + secondNumber
              else if (operator === '-')
                answer = firstNumber - secondNumber
              else if (operator === '*')
                answer = firstNumber * secondNumber
              else if (operator === '÷')
                answer = firstNumber / secondNumber
              
              {/*call the setResult function and pass the answer*/}
              {/* as a parameter to change the value of the result*/}
              setResult(answer)
            }} />
          </div>
        </div>
    </div>
  )
}

export default App
