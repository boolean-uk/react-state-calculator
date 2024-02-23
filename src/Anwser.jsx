import { useState } from "react"
import PropTypes from "prop-types"

function Answer({leftNumber, rightNumber, operator, setAns})
{
    const [answer, newAnswer] = useState(0)
    const calculateAnswer = () =>
    {
        newAnswer(operator(leftNumber, rightNumber))
    }
    const store = ()=>
    {
        setAns(answer)
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

Answer.propTypes = {
  leftNumber:PropTypes.number,
  rightNumber:PropTypes.number,
  operator:PropTypes.func,
  setAns:PropTypes.func
}

export default Answer