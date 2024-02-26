import { useState } from "react";
function CalculateSum(){

    let [sum, calculate] = useState(0)

    function handleClick(){
      let numbers = document.querySelectorAll('.value')
      let operator = document.querySelector('.operator')
      let newSum = 0;
  
  
      switch(operator.innerHTML){
        case '+': newSum = parseInt(numbers[0].innerHTML) + parseInt(numbers[1].innerHTML)
        break;
        case '-': newSum = parseInt(numbers[0].innerHTML) - parseInt(numbers[1].innerHTML)
        break;
        case '*': newSum = parseInt(numbers[0].innerHTML) * parseInt(numbers[1].innerHTML)
        break;
        case '÷': newSum = parseInt(numbers[0].innerHTML) / parseInt(numbers[1].innerHTML)
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
        </div>
      </div>
    )
}

export default CalculateSum





