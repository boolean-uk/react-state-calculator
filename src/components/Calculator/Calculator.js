
import { NumberPad } from "../NumberPad"
import { OperationButton } from "../OperationButton"
import { EqualsButton } from "../EqualsButton"
import { useState } from "react"


function Calculator () {

const [firstNumState, setFirstNum] = useState(0)

const [whichOp, setWhichOp] = useState(null)

const [secondNumState, setSecondNum] = useState(0)

const [equals, setEquals] = useState(null)


    console.log('firstNum returned', firstNumState)
    console.log('operator returned', whichOp)
    console.log('secondNum returned', secondNumState)
    console.log('equals returned', equals)



    return (

       <div className="calculator">
       
            <NumberPad NumState={firstNumState} setValue={setFirstNum}/>

            <OperationButton whichOp={whichOp} setWhichOp={setWhichOp}/>

            <NumberPad NumState={secondNumState} setValue={setSecondNum}/>

            <EqualsButton equals={equals} setEquals={setEquals}/>

        </div>
    )
}
export default Calculator