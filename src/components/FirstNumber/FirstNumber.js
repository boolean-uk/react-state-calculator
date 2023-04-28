import { useState } from 'react' 

function FirstNumber (props) {

  // const whichPad = props.whichPad
  // console.log(whichPad)

  const [firstNum, setFirstNum] = useState(`0`)
  
  function handleClear() {
    setFirstNum('0')
  }

  function FirstNumberDisplay(event) {
    const value = event.target.innerText
      if (firstNum === `0`) {
        setFirstNum(value)
      } else {
        setFirstNum(firstNum + value)
      }
  }

  // function FirstNumberDisplay(event) {
  //   const value = event.target.innerText
  //   if (whichPad === `first`) {
  //     if (firstNum === `0`) {
  //       setFirstNum(value)
  //     } else {
  //       setFirstNum(firstNum + value)
  //     }
  //   } 
  //   if (whichPad === `second`) {
  //     if (secondNum === `0`) {
  //       setSecondNum(value)
  //     } else {
  //       setSecondNum(secondNum + value)
  //     }
  //   }
  // }
  
    return (
        <div className="panel">
         <p>{firstNum}</p>
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