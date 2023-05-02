import { Result } from "../Result"
import { OperationButton } from "../OperationButton"
import { NumberPad } from "../NumberPad"
import { useState } from 'react' 

function Calculator () {

  const [firstNum, setFirstNum] = useState(`0`)
  const [secondNum, setSecondNum] = useState(`0`)
  const [operator, setOperator] = useState(`+`)
  const [result, setResult] = useState(`0`)
  const [saveResult, setSaveResult] = useState(`0`)

    return (
       <div className="calculator">
       
            <NumberPad setNum={setFirstNum} Num={firstNum} saveResult={saveResult}/>
            
            <OperationButton setOperator={setOperator} operator={operator}/>

            <NumberPad setNum={setSecondNum} Num={secondNum} saveResult={saveResult}/>

            <Result firstNum={firstNum} secondNum={secondNum} operator={operator} result={result} setResult={setResult} setSaveResult={setSaveResult}/>

        </div>
    )
}
export default Calculator