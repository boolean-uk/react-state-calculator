import { useState } from "react";

function Result (props) {
    
    return (
    <div className="panel answer">
        <p>{props.result}</p>

        <div>
          <button onClick={props.handleResult}>=</button>
          <button onClick={props.saveResult}>&#9829;</button>
        </div>
    </div>
    )
}

export default Result