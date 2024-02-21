import { useState } from "react"
function Numbers({state, ans})
{
    const [currentState, newState] = state
    const changeState = (number) => {
        if (currentState === 0) {
            newState(number)
            return
        }
        newState(`${currentState}${number}`)
    }

    const clear = () =>{
        newState(0)
    }

    const buttonArray = []
    for (let i = 1; i< 10; i++){
        buttonArray.push(<button onClick={() => changeState(i)}>{i}</button>)
    }
    const recall = () => {
        newState(ans)
    }

    return (
        <div className="panel">
        <p>{currentState}</p>
        <div className="numbers">
            {buttonArray}
            <button onClick={() => changeState(0)}>0</button>
            <button onClick={() => clear()}>Clear</button>
            <button onClick={() => recall()}> Recall</button>
        </div>
      </div>
    )
}

export default Numbers
