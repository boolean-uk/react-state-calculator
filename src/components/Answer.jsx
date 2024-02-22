import { useState } from "react";

const Answer = ({ number1, number2, operator }) => {
    const [answer, setAnswer] = useState(0);

    const calculateAnswer = () => {
        switch (operator) {
            case "+":
                setAnswer(number1 + number2);
                break;
            case "-":
                setAnswer(number1 - number2);
                break;
            case "*":
                setAnswer(number1 * number2);
                break;
            case "÷":
                if (number2 === 0) setAnswer("NaN");
                else setAnswer(number1 / number2);
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
