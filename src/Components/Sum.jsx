import { useState } from "react";
function CalculateSum(){

    let [sum, calculate] = useState(0);
    let [MS, storeValue] = useState(0);

    function handleClick(){
      let numbers = document.querySelectorAll('.value')
      let operator = document.querySelector('.operator')
      let newSum = 0;
  
  
      switch(operator.innerHTML){
        case '+': newSum = parseFloat(numbers[0].innerHTML) + parseFloat(numbers[1].innerHTML)
        break;
        case '-': newSum = parseFloat(numbers[0].innerHTML) - parseFloat(numbers[1].innerHTML)
        break;
        case '*': newSum = parseFloat(numbers[0].innerHTML) * parseFloat(numbers[1].innerHTML)
        break;
        case '÷': newSum = parseFloat(numbers[0].innerHTML) / parseFloat(numbers[1].innerHTML)
        break;
        default:
        newSum = 0;
        break;
      }
  
    return calculate(newSum)
  }

    return(
    <div className="panel answer">
        <p>{sum}</p>
        <div>
          <button onClick={()=>handleClick()}>=</button>
          <button onClick={()=>calculate(0)}>CE</button>
          <button onClick={()=>storeValue(sum)}>Store in memory</button>
         <button onClick={()=>storeValue(0)}>MC</button>
          <label htmlFor ="ms">Memory:</label>
          <p id="ms"className="MS">{MS}</p>
        </div>
      </div>
    )
}

export default CalculateSum





