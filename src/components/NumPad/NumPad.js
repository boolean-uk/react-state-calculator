import { useState } from "react";

function NumPad (props) {

    function numDisplay (event) {
        const value = event.target.innerText
        if (props.count === 0) {
            props.setCount(value)
          } else {
            props.setCount(props.count + value)
          }
          
      }

      function clearDisplay () {
        props.setCount(0)
      }

      function decimals() {
        if (!props.count.includes('.')) {
          props.setCount(props.count + '.')
        }        
      }
    
    
    return (
        <div className="panel">
        <p>{props.count}</p>
        <button onClick={props.displaySaved} >Recall</button>
        <div className="numbers">
          <button onClick={numDisplay}>1</button>
          <button onClick={numDisplay}>2</button>
          <button onClick={numDisplay}>3</button>
          <button onClick={numDisplay}>4</button>
          <button onClick={numDisplay}>5</button>
          <button onClick={numDisplay}>6</button>
          <button onClick={numDisplay}>7</button>
          <button onClick={numDisplay}>8</button>
          <button onClick={numDisplay}>9</button>
          <button onClick={numDisplay}>0</button>
          <button onClick={clearDisplay}>Clear</button>
          <button onClick={decimals}>.</button>

  
        </div>
      </div>
    )
}

export default NumPad