function AnswerComponent({ value, setValue, numbers, operator }) {
    function calculateAnswer() {
        let answer = value
        switch (operator) { 
            case'+': 
            answer = numbers[0] + numbers[1]
            break
            case '-':
            answer = numbers[0] - numbers[1]
            break
            case '*': 
            answer = numbers[0] * numbers[1]
            break
            case '÷': 
            answer = numbers[0] / numbers[1]
            break
        }
        setValue(answer)
    }

    return (
        <div className="panel answer">
            <p>{value}</p>
            <div>
                <button onClick={() => calculateAnswer()}>=</button>
            </div>
        </div>
    )
}

export default AnswerComponent