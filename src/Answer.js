import React from "react"

function Answer ({num1, num2, operator, answer, setAnswer, stored, setStored}) {

  const num1x = parseFloat(num1)
  const num2x = parseFloat(num2)

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

  const handleStore = (event) => {
    setStored(answer)
  }


  
    return (        
        <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={handleClick}>=</button>
          <button onClick={handleStore}>Store</button>
        </div>
        </div>)
}

export default Answer
