const ResultPanel = ({ result, setResult, calc, leftNumber, rightNumber, setStoredAnswer }) => {

    const calculateResult = () => {

        //get the number of digits after the comma for both numbers and round the result up accordingly to hide floating point precision errors from the user
        //ex 0.025 * 3 will result in 0.075 instead of 0.07500000000000001
        let leftFloats = 0
        let rightFloats = 0
        try {
            leftFloats = leftNumber.toString().split('.')[1].split('').length
        }
        catch (error) { }

        try {
            rightFloats = rightNumber.toString().split('.')[1].split('').length
        }
        catch (error) { }

        const resultFloats = leftFloats + rightFloats
        console.log(resultFloats)
        switch (calc) {
            case '+':
                setResult(leftNumber + rightNumber)
                break
            case '-':
                setResult(leftNumber - rightNumber)
                break
            case '*':
                setResult((leftNumber * rightNumber).toFixed(resultFloats))
                break
            case '÷':
                rightNumber !== 0 ? setResult(leftNumber / rightNumber) : setResult('Cannot divide with 0')
                break
            default:
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