import { useState } from 'react' 

function SecondNumber(props) {


  function handleClear() {
    props.setSecondNum('0')
  }

  function SecondNumberDisplay(event) {
    const value = event.target.innerText
      if (props.secondNum === `0`) {
        props.setSecondNum(value)
      } else {
        props.setSecondNum(props.secondNum + value)
      }
  }

  return (

<div className="panel">
         <p>{props.secondNum}</p>
         <div className="numbers">
           <button
           onClick={(SecondNumberDisplay)}>1</button>
           <button
           onClick={(SecondNumberDisplay)}>2</button>
           <button
           onClick={(SecondNumberDisplay)}>3</button>
           <button
           onClick={(SecondNumberDisplay)}>4</button>
           <button
           onClick={(SecondNumberDisplay)}>5</button>
           <button
           onClick={(SecondNumberDisplay)}>6</button>
           <button
           onClick={(SecondNumberDisplay)}>7</button>
           <button
           onClick={(SecondNumberDisplay)}>8</button>
           <button
           onClick={(SecondNumberDisplay)}>9</button>
           <button
           onClick={(SecondNumberDisplay)}>0</button>
           <button
           onClick={handleClear}
           >Clear</button>
         </div>
       </div>

  )

}

export default SecondNumber
