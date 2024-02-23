import { useState } from 'react'
import PropTypes from 'prop-types';

const InputPanel = ({panelId, number, setNumber, storedNumber}) => {
    const [numberDecimal, setNumberDecimal] = useState(false)
    const inputNumbers = [1,2,3,4,5,6,7,8,9,0]

    const AddDecimal = () => {
        if (!numberDecimal) {
            setNumber(number + ".")
            setNumberDecimal(true)
        }
      }

    const ChangeNumber = (e) => {
        if (e.target.innerText === "Clear") {
            setNumber("0")
            setNumberDecimal(false)
        } else {
            if (number === "0") {
                setNumber(e.target.innerText)
            } else {
                setNumber(number + e.target.innerText)
            }
        }
    }

    const RecallNumber = () => {
        if (storedNumber !== -1) {
            const storedNumberAsString = storedNumber.toString()
            setNumber(storedNumberAsString)
            if (storedNumberAsString.includes(".")) {
                setNumberDecimal(true)
            }
        }
      }

    return (
        <div className="panel">
        <p>{number}</p>
        <div className="numbers" id={panelId}>
            {inputNumbers.map((val, key) => {
                return(
                <button key={key} onClick={(e) => ChangeNumber(e)}>{val}</button>
                )
            })}
          <button onClick={() => AddDecimal()}>.</button>
          <button onClick={(e) => ChangeNumber(e)}>Clear</button>
          <button onClick={() => RecallNumber()}>Recall</button>
        </div>
      </div>
    )
}

InputPanel.propTypes = {
    panelId: PropTypes.string,
    number: PropTypes.string,
    setNumber: PropTypes.func,
    storedNumber: PropTypes.number
}

export default InputPanel