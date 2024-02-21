import { useState } from "react"
function Numbers({state})
{
    const [currentState, newState] = state
    const changeState = (number) => {
        newState(number)
    }
    const buttonArray = []
    for (let i = 1; i< 10; i++){
        buttonArray.push(<button onClick={() => changeState(i)}>{i}</button>)
    }
    

    return (
        <div className="panel">
        <p>{currentState}</p>
        <div className="numbers">
            {buttonArray}
            <button onClick={() => changeState(0)}>0</button>
            <button onClick={() => changeState(0)}>Clear</button>
        </div>
      </div>
    )
}

export default Numbers
