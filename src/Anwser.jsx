import { useState } from "react"

function Answer({firstNumber, secondNumber, Operator, ans})
{
    const [answer, newAnswer] = useState(0)
    const calculateAnswer = () =>
    {
        newAnswer(Operator(firstNumber, secondNumber))
    }
    const store = ()=>
    {
        ans(answer)
    }
    return (
        <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculateAnswer()}>=</button>
          <button onClick={() => store()}>STORE</button>
        </div>
      </div>
    )
}

export default Answer