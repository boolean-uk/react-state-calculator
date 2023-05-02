import { useState } from 'react' 

function NumberPad (props) {
    function handleClear() {
        props.setNum('0')
      }
    
      function numberDisplay(event) {
        const value = event.target.innerText
          if (props.Num === `0`) {
            props.setNum(value)
          } else {
            props.setNum(props.Num + value)
          }
      }

      function recallSavedValue() {
        props.setNum(props.saveResult)
      }

      function decimalPoint() {
        if (!props.Num.includes('.')) {
          props.setNum(props.Num + '.')
        }        
      }
      
        return (
            <div className="panel">
             <p>{props.Num}</p>
             <div className="numbers">
               <button
               onClick={(numberDisplay)}>1</button>
               <button
               onClick={(numberDisplay)}>2</button>
               <button
               onClick={(numberDisplay)}>3</button>
               <button
               onClick={(numberDisplay)}>4</button>
               <button
               onClick={(numberDisplay)}>5</button>
               <button
               onClick={(numberDisplay)}>6</button>
               <button
               onClick={(numberDisplay)}>7</button>
               <button
               onClick={(numberDisplay)}>8</button>
               <button
               onClick={(numberDisplay)}>9</button>
               <button
               onClick={(numberDisplay)}>0</button>
               <button
               onClick={handleClear}
               >Clear</button>
               <button onClick={decimalPoint}>.</button>
               <button
               onClick={(recallSavedValue)}
               >Recall</button>
             </div>
           </div>
        )
}

export default NumberPad