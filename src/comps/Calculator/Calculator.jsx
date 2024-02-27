import { useState } from 'react'
import Manipulators from "./CalculatorSubComps/Manipulators"
import PanelAnswer from "./CalculatorSubComps/PanelAnswer"
import Numbers from "./CalculatorSubComps/Numbers"

function Calculator() {
    const [num1, setNum1] = useState('0')
    const [man, setMan] = useState('+')
    const [num2, setNum2] = useState('0')
    const [ans, setAns] = useState('0')

    {/* The code duplication lol */}
    const handleNumberClick1 = (number) => {

        if(number === '.' && num1.includes('.')) {
            return
        }

        if(num1 === '0' && number ==='.') {
            setNum1(num1 + number.toString())
        }
        else if (number === 'Clear') {
            setNum1('0')
        }
        else {
            setNum1(prevNum1 => prevNum1 === '0' ? number.toString() : prevNum1 + number.toString())
        }

    }
    const handleNumberClick2 = (number) => {

        if(number === '.' && num2.includes('.')) {
            return
        }

        if(num2 === '0' && number ==='.') {
            setNum2(num2 + number.toString())
        }
        else if (number === 'Clear') {
            setNum2('0')
        }
        else {
            setNum2(prevNum2 => prevNum2 === '0' ? number.toString() : prevNum2 + number.toString())
        }

    }

    const handleManipulatorClick = (manipulator) => {
        setMan(manipulator)
    }

    const handleAnswerClick = () => {
        let result
        if (man === '+') {
            result = parseFloat(num1) + parseFloat(num2)
        } else if (man === '-') {
            result = parseFloat(num1) - parseFloat(num2)
        } else if (man === 'x') {
            result = parseFloat(num1) * parseFloat(num2)
        } else if (man === '÷') {
            result = parseFloat(num1) / parseFloat(num2)
        }
        setAns(result.toString())
    }

    return (
        <div className="calculator">

            <div className="panel">
                <p>{num1}</p>
                <Numbers onNumberClick={handleNumberClick1} />
            </div>

            <div className="panel">
                <p>{man}</p>
                <Manipulators onManipulatorClick={handleManipulatorClick} />
            </div>

            <div className="panel">
                <p>{num2}</p>
                <Numbers  onNumberClick={handleNumberClick2} />
            </div>

            <div className="panel answer">
                <p>{ans}</p>
                <PanelAnswer onClickToAnswer={handleAnswerClick} />
            </div>

        </div>
    )
}

export default Calculator