import { useState } from 'react' 

function FirstNumber (props) {

  // const [firstNum, setFirstNum] = useState(`0`)

  function handleClear() {
    props.setFirstNum('0')
  }

  function FirstNumberDisplay(event) {
    const value = event.target.innerText
      if (props.firstNum === `0`) {
        props.setFirstNum(value)
      } else {
        props.setFirstNum(props.firstNum + value)
      }
  }
  
    return (
        <div className="panel">
         <p>{props.firstNum}</p>
         <div className="numbers">
           <button
           onClick={(FirstNumberDisplay)}>1</button>
           <button
           onClick={(FirstNumberDisplay)}>2</button>
           <button
           onClick={(FirstNumberDisplay)}>3</button>
           <button
           onClick={(FirstNumberDisplay)}>4</button>
           <button
           onClick={(FirstNumberDisplay)}>5</button>
           <button
           onClick={(FirstNumberDisplay)}>6</button>
           <button
           onClick={(FirstNumberDisplay)}>7</button>
           <button
           onClick={(FirstNumberDisplay)}>8</button>
           <button
           onClick={(FirstNumberDisplay)}>9</button>
           <button
           onClick={(FirstNumberDisplay)}>0</button>
           <button
           onClick={handleClear}
           >Clear</button>
         </div>
       </div>
    )
}

export default FirstNumber