const Result = ({ result, setResult, numbers, operation }) => {
    return (
        <div className="panel answer">
            <p>{result}</p>
            <div>
                <button
                    onClick={() =>
                        setResult(
                            eval(
                                `${numbers.number1}${operation}${numbers.number2}`
                            )
                        )
                    }
                >
                    =
                </button>
            </div>
        </div>
    );
};

export default Result;
