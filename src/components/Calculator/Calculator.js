import { Result } from "../Result"
import { FirstNumber } from "../FirstNumber"
import {OperationButton } from "../OperationButton"
import { SecondNumber } from "../SecondNumber"
import { useState } from 'react' 

function Calculator () {

  const [firstNum, setFirstNum] = useState(`0`)
  const [secondNum, setSecondNum] = useState(`0`)
  const [operator, setOperator] = useState(`+`)
  const [result, setResult] = useState(`0`)

  console.log(`first:`, firstNum)
  console.log(`second:`, secondNum)
  console.log(`operator:`, operator)
    return (
       <div className="calculator">
       
            <FirstNumber setFirstNum={setFirstNum} firstNum={firstNum}/>

            <OperationButton setOperator={setOperator} operator={operator}/>

            <SecondNumber setSecondNum={setSecondNum} secondNum={secondNum}/>

            <Result firstNum={firstNum} secondNum={secondNum} operator={operator} result={result} setResult={setResult} />

        </div>
    )
}
export default Calculator