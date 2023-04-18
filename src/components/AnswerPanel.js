import Button from './Button'

export default function AnswerPanel({ answer, setAnswer, operator, firstNumber, secondNumber, setStore }) {
    
    return (
        <div className="panel answer">
            <p>{answer}</p>
            <div>
                <Button value={'='} fun={function() {
                    // eslint-disable-next-line no-lone-blocks
                    {/*
                        To convert a string to a number:
                            1) use the Number object
                            2) use the + or - sign at the beginning of the string
                            3) Number.parseInt('string')
                            4) Number.parseFloat('string')
                    */}
                    let result = 0
                    switch(operator) {
                        case '+':
                            result = +firstNumber + +secondNumber
                            break;
                        case '-':
                            result = +firstNumber - +secondNumber
                            break;
                        case '*':
                            result = +firstNumber * +secondNumber
                            break;
                        case '÷':
                            result = +firstNumber / +secondNumber
                            break;
                        default:
                            break;
                    }

                    // eslint-disable-next-line no-lone-blocks
                    {/*
                        call the setResult function and pass the answer
                        as a parameter to change the value of the result
                        1)result is the result of the previous operation
                        2)to precision is a method of the Number object that keeps that many significant digits
                            in this case 7
                        3)String is an object that converts its input to string
                        4)setAnser is the function that updates the setAnswer variable
                    */}
                    
                    setAnswer(String(result.toPrecision(7)))
                    
                }} />

                <Button value={'Store'} fun={(_) => { setStore(answer) }} />
            </div>
        </div>
    )
}