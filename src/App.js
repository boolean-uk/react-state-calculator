import "./App.css"

import { useState } from 'react'
import Button from './Button'
import Operators from './Operators'

function App() { 
  const [firstNumber, setFirstNumber] = useState('0')
  // to display sympols (+, *) make them 'strings'
  // if its not a number or a boolean make it a string! 
  const [operator, setOperator] = useState('+')
  const [secondNumber, setSecondNumber] = useState(0)
  const [result, setResult] = useState(0)

  // We use string instead of numbers, because we
  // can concatenate strings
  // e.g. '1' + '2' = '12'
  function fun(value) {
    if (firstNumber.length <= 8) {
      // if number is 0, overwrite it
      // with the value
      if (firstNumber === '0')
        setFirstNumber(value)
      // if the number is not equal to 0
      // concatenate with the value
      else
        setFirstNumber(firstNumber + value)
    }
  }

  function fun2(value) {
    if (secondNumber.length <= 8) {
      // if number is 0, overwrite it
      // with the value
      if (secondNumber === '0') {
        setSecondNumber(value)
      }
      // if the number is not equal to 0
      // concatenate with the value
      else {
        setSecondNumber(secondNumber + value)
      }
    }
  }

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
            <Button value={'1'} fun={fun} />
            <Button value={'2'} fun={fun} />
            <Button value={'3'} fun={fun} />
            <Button value={'4'} fun={fun} />
            <Button value={'5'} fun={fun} />
            <Button value={'6'} fun={fun} />
            <Button value={'7'} fun={fun} />
            <Button value={'8'} fun={fun} />
            <Button value={'9'} fun={fun} />
            <Button value={'0'} fun={fun} />
            {/*Clear change the value to the string '0'*/}
            <Button value={'Clear'} fun={(_) => setFirstNumber('0') } />
          </div>
        </div>
        
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            <Operators value={'+'} fun={setOperator} />
            <Operators value={'-'} fun={setOperator} />
            <Operators value={'*'} fun={setOperator} />
            <Operators value={'÷'} fun={setOperator} />
          </div>
        </div>

        <div className="panel">
          <p>{secondNumber}</p>
          <div className="numbers">
          <Button value={'1'} fun={fun2} />
            <Button value={'2'} fun={fun2} />
            <Button value={'3'} fun={fun2} />
            <Button value={'4'} fun={fun2} />
            <Button value={'5'} fun={fun2} />
            <Button value={'6'} fun={fun2} />
            <Button value={'7'} fun={fun2} />
            <Button value={'8'} fun={fun2} />
            <Button value={'9'} fun={fun2} />
            <Button value={'0'} fun={fun2} />
            {/*Clear change the value to the string '0' 
              we have to make a buttun with the clear function
              function clear = 0 value of secondNumber
              clear turns the value of the secondNumber to zero
              we pass as a parameter a function that takes an argument,
              but it doesn't use it
            */}
            <Button value={'Clear'} fun={(_) => setSecondNumber('0') } />
          </div>
        </div>
        <div className="panel answer">
          <p>{result}</p>
          <div>
            <Button value={'='} fun={function() {
              let answer = 0
              {/*
                To convert a string to a number:
                  1) use the Number object
                  2) use the + or - sign at the beginning of the string
                  3) Number.parseInt('string')
                  4) Number.parseFloat('string')
                */}
              if (operator === '+')
                answer = Number(firstNumber) + Number(secondNumber)
              else if (operator === '-')
                answer = +firstNumber - +secondNumber
              else if (operator === '*')
                answer = +firstNumber * +secondNumber
              else if (operator === '÷')
                answer = +firstNumber / +secondNumber
              {/*
                call the setResult function and pass the answer
                as a parameter to change the value of the result
              */}
              setResult(answer)
            }} />
          </div>
        </div>
    </div>
  )
}

export default App
