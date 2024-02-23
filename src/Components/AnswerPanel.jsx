// eslint-disable-next-line react/prop-types
function AnswerPanel({firstNumber, secondNumber, operator, answer, setAnswer, setStoredValue}) {
const Calculate = () => {
    let firstValue = parseFloat(firstNumber)
    let secondValue = parseFloat(secondNumber)

    if (operator === '+') {
        setAnswer((firstValue + secondValue).toString())
    } else if (operator === '-') {
        setAnswer((firstValue - secondValue).toString())
    } else if (operator === '*') {
        setAnswer((firstValue * secondValue).toString())
    } else if (operator === '÷') {
        setAnswer((firstValue / secondValue).toFixed())
    }
    }

  return (
    <div className="panel answer">
    <p>{answer}</p>
    <div>
      <button onClick={() => Calculate()}>=</button>
      <button onClick={() => setStoredValue(answer)}>Store</button>
    </div>
  </div>
  )
}

export default AnswerPanel
