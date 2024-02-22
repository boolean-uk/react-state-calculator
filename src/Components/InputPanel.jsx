import { useState } from 'react'

const InputPanel = ({panelId, number, setNumber, numberDecimal, setNumberDecimal, storedNumber}) => {

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
            setNumber(storedNumber)
            if (storedNumber.toString().includes(".")) {
                setNumberDecimal(true)
            }
        }
      }

    return (
        <div className="panel">
        <p>{number}</p>
        <div className="numbers" id={panelId}>
          <button onClick={(e) => ChangeNumber(e)}>1</button>
          <button onClick={(e) => ChangeNumber(e)}>2</button>
          <button onClick={(e) => ChangeNumber(e)}>3</button>
          <button onClick={(e) => ChangeNumber(e)}>4</button>
          <button onClick={(e) => ChangeNumber(e)}>5</button>
          <button onClick={(e) => ChangeNumber(e)}>6</button>
          <button onClick={(e) => ChangeNumber(e)}>7</button>
          <button onClick={(e) => ChangeNumber(e)}>8</button>
          <button onClick={(e) => ChangeNumber(e)}>9</button>
          <button onClick={(e) => ChangeNumber(e)}>0</button>
          <button onClick={() => AddDecimal()}>.</button>
          <button onClick={(e) => ChangeNumber(e)}>Clear</button>
          <button onClick={() => RecallNumber()}>Recall</button>
        </div>
      </div>
    )
}

export default InputPanel