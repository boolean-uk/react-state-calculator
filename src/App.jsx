import { useState } from "react";
import "./App.css";
import SetButton from "./components/SetButton";
import Answer from "./components/Answer";

function App() {
    const [number1, setNumber1] = useState("0");
    const [number2, setNumber2] = useState("0");
    const [operator, setOperator] = useState("+");
    const [savedNumber, setSavedNumber] = useState("0");

    const numberValues = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Clear",
        "0",
        ".",
        "Recall",
    ];
    const operators = ["+", "-", "*", "÷"];

    return (
        <div className="calculator">
            <div className="panel">
                <p>{number1}</p>
                <div className="numbers">
                    {numberValues.map((value) => (
                        <SetButton
                            key={value}
                            onClick={setNumber1}
                            value={value}
                            currentValue={number1}
                            savedNumber={savedNumber}
                        />
                    ))}
                </div>
            </div>

            <div className="panel">
                <p>{operator}</p>
                <div className="numbers">
                    {operators.map((value) => (
                        <SetButton
                            key={value}
                            onClick={setOperator}
                            value={value}
                        />
                    ))}
                </div>
            </div>

            <div className="panel">
                <p>{number2}</p>
                <div className="numbers">
                    {numberValues.map((value) => (
                        <SetButton
                            key={value}
                            onClick={setNumber2}
                            value={value}
                            currentValue={number2}
                            savedNumber={savedNumber}
                        />
                    ))}
                </div>
            </div>
            <div className="panel answer">
                <Answer
                    number1={number1}
                    number2={number2}
                    operator={operator}
                    setSavedNumber={setSavedNumber}
                />
            </div>
        </div>
    );
}

export default App;
