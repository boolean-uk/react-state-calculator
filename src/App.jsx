import { useState } from "react";
import "./App.css";

// components
import Number from "./components/Number";
import Operation from "./components/Operation";
import Result from "./components/Result";

function App() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operation, setOperation] = useState("+");
    const [result, setResult] = useState(0);

    return (
        <div className="calculator">
            <Number number={number1} setNumber={setNumber1} />

            <Operation operation={operation} setOperation={setOperation} />

            <Number number={number2} setNumber={setNumber2} />

            <Result
                result={result}
                setResult={setResult}
                numbers={{ number1, number2 }}
                operation={operation}
            />
        </div>
    );
}

export default App;
