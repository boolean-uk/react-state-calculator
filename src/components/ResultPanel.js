const ResultPanel = ({ result, setResult, calc, leftNumber, rightNumber, setStoredAnswer }) => {

    const calculateResult = () => {
        switch (calc) {
            case '+':
                setResult(leftNumber + rightNumber)
                break
            case '-':
                setResult(leftNumber - rightNumber)
                break
            case '*':
                setResult(leftNumber * rightNumber)
                break
            case '÷':
                rightNumber !== 0 ? setResult(leftNumber / rightNumber) : setResult('Cannot divide with 0')
                break
        }
    }

    return (
        <div className="panel answer">
            <p>{result}</p>
            <div>
                <button onClick={() => calculateResult()}>=</button>
                <button onClick={() => setStoredAnswer(result)}>Store</button>
            </div>
        </div>
    )
}

export default ResultPanel