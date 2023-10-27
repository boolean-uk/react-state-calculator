const Result = ({ result, setResult, numbers, operation, state, setState }) => {
    const res = eval(`${numbers.number1}${operation}${numbers.number2}`);

    return (
        <div className="panel answer">
            <p>{result}</p>
            <div>
                <button onClick={() => setResult(res)}>=</button>
                <button
                    onClick={() => {
                        const obj = {
                            number1: numbers.number1,
                            number2: numbers.number2,
                            operation,
                            result: res,
                        };

                        if (
                            !state.find(
                                (item) =>
                                    item.number1 === obj.number1 &&
                                    item.number2 === obj.number2 &&
                                    item.operation === obj.operation &&
                                    item.result === obj.result
                            )
                        ) {
                            setState([...state, obj]);
                        }
                    }}
                >
                    store
                </button>
            </div>
        </div>
    );
};

export default Result;
