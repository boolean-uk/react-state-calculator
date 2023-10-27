import { useState } from "react";
import "./App.css";

// components
import Number from "./components/Number";
import Operation from "./components/Operation";
import Result from "./components/Result";
import Saved from "./components/Saved";

function App() {
    const [state, setState] = useState([]);
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
                state={state}
                setState={setState}
            />

            <Saved
                state={state}
                setNumber1={setNumber1}
                setNumber2={setNumber2}
                setOperation={setOperation}
                setResult={setResult}
            />
        </div>
    );
}

export default App;
