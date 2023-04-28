import { EqualsNumber } from "../EqualsNumber"
import { FirstNumber } from "../FirstNumber"
import {OperationButton } from "../OperationButton"
import { SecondNumber } from "../SecondNumber"

function Calculator () {
    return (
       <div className="calculator">
       
            <FirstNumber />

            <OperationButton />

            <SecondNumber />

            <EqualsNumber />

        </div>
    )
}
export default Calculator