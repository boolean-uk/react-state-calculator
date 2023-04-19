import React from "react"

function Answer ({num1, num2, operator, answer, setAnswer}) {

  const num1x = parseInt(num1)
  const num2x = parseInt(num2)

  const handleClick = (event) => {
    switch (operator) {
      case "+":
        setAnswer(num1x+num2x)
        break;
      case "-":
        setAnswer(num1x-num2x);
        break;
      case "*":
        setAnswer(num1x*num2x);
        break;
      case "÷":
        if(num2x==0){
          setAnswer("can't divide by 0")
        }else{
          setAnswer(num1x/num2x);
        }
        break;
      default:
        console.log("Not good")
    }
  }
    return (        
        <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleClick}>=</button>
        </div>
        </div>)
}

export default Answer
