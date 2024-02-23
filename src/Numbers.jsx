import { useState } from "react"
import PropTypes from "prop-types"

function Numbers({currentNumber, setNumber, ans})
{
    const [isBeforeSeparator, toggleBeforeSeparator] = useState(true)
    const changeState = (number) => {
        if (currentNumber === 0) {
            setNumber(number)
            return
        }
        setNumber(`${currentNumber}${number}`)
    }

    const clear = () =>{
        toggleBeforeSeparator(true)
        setNumber(0)
    }

    const buttonArray = []
    for (let i = 1; i< 10; i++){
        buttonArray.push(<button onClick={() => changeState(i)}>{i}</button>)
    }
    const recall = () => {
        toggleBeforeSeparator(Number.isInteger(ans))
        setNumber(ans)
    }

    const addDecimalPoint = () =>{
        //Checks if there is already a separator, if yes, returns without doing anything
        if (!isBeforeSeparator) return
        toggleBeforeSeparator(false)
        setNumber(`${currentNumber}.`)
        //
    }
    return (
        <div className="panel">
        <p>{currentNumber}</p>
        <div className="numbers">
            {buttonArray}
            <button onClick={() => changeState(0)}>0</button>
            <button onClick={() => addDecimalPoint()}>.</button>
            <button onClick={() => clear()}>Clear</button>
            <button onClick={() => recall()}> Recall</button>
        </div>
      </div>
    )
}

Numbers.propTypes = {
    currentNumber:PropTypes.Number,
    setNumber:PropTypes.func,
    ans : PropTypes.Number
}

export default Numbers
