import { useState } from "react"

function Answer({firstNumber, secondNumber, Operator})
{
    console.log(Operator(firstNumber, secondNumber))
    const [answer, newAnswer] = useState(0)

    const calculateAnswer = () =>
    {
        newAnswer(Operator(firstNumber, secondNumber))
    }
    return (
        <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculateAnswer()}>=</button>
        </div>
      </div>
    )
}

export default Answer