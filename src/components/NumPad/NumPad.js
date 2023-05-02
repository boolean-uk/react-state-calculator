import { useState } from "react";

function NumPad (props) {
    
    return (
        <div className="panel">
        <p placeholder="0">{props.count}</p>
        <button onClick={props.displaySaved} >Recall</button>
        <div className="numbers">
          <button onClick={() => { props.setCount(parseInt(props.count + '1',10).toString())}}>1</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '2',10).toString())}}>2</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '3',10).toString())}}>3</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '4',10).toString())}}>4</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '5',10).toString())}}>5</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '6',10).toString())}}>6</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '7',10).toString())}}>7</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '8',10).toString())}}>8</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '9',10).toString())}}>9</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '0',10).toString())}}>0</button>
          <button onClick={() => { props.setCount('0' )}}>Clear</button>
          <button onClick={() => { props.setCount(parseInt(props.count + '.',10).toString())}}>.</button>
        </div>
      </div>
    )
}

export default NumPad