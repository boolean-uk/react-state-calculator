function Answer ({symbol, num1, num2, result, setResult}) {


   const calculateAnswer = () => {

        if (symbol === "+") {
            setResult(Number(num1) + Number(num2))
        }
            else if (symbol === "-") {
                setResult(Number(num1) - Number(num2))
            }
            else if (symbol === "*") {
                setResult(Number(num1) * Number(num2))
            }
            else if (symbol === "÷") {
                setResult(Number(num1) / Number(num2))
            }
    }

    console.log(setResult)

    return (

        <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={calculateAnswer}>=</button>
        </div>
      </div>

    )
}

export {
    Answer
}