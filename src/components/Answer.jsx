import { useState } from "react";

const Answer = ({ number1, number2, operator }) => {
    const [answer, setAnswer] = useState(0);
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    const calculateAnswer = () => {
        switch (operator) {
            case "+":
                setAnswer(num1 + num2);
                break;
            case "-":
                setAnswer(num1 - num2);
                break;
            case "*":
                setAnswer(num1 * num2);
                break;
            case "÷":
                if (number2 === 0) setAnswer("NaN");
                else setAnswer(num1 / num2);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <p>{answer}</p>
            <div>
                <button onClick={calculateAnswer}>=</button>
            </div>
        </>
    );
};

export default Answer;
