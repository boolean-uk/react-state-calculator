import { useState } from "react";

function FirstDigit (props) {
return(
    <div className="panel">
    <p placeholder="0">{props.count1}</p>
    <button onClick={props.displaySaved} >Recall</button>
    <div className="numbers">
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '1',10).toString())}}>1</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '2',10).toString())}}>2</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '3',10).toString())}}>3</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '4',10).toString())}}>4</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '5',10).toString())}}>5</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '6',10).toString())}}>6</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '7',10).toString())}}>7</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '8',10).toString())}}>8</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '9',10).toString())}}>9</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '0',10).toString())}}>0</button>
      <button onClick={() => { props.setCount1('0' )}}>Clear</button>
      <button onClick={() => { props.setCount1(parseInt(props.count1 + '.',10).toString())}}>.</button>
    </div>
  </div>
)

}

export default FirstDigit