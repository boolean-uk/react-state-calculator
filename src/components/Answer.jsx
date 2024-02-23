import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Answer = ({ number1, number2, operator, setSavedNumber }) => {
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
    const saveAnswer = () => {
        setSavedNumber(answer);
    }

    return (
        <>
            <p>{answer}</p>
            <div>
                <button onClick={calculateAnswer}>=</button>
                <button onClick={saveAnswer}>Store</button>
            </div>
        </>
    );
};

export default Answer;
