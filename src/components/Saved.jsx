const Saved = ({ state, setNumber1, setNumber2, setOperation, setResult }) => {
    console.log(state);

    return (
        <>
            <h2>Saved Results</h2>
            {state.map((item, index) => (
                <button
                    key={index}
                    onClick={() => {
                        setNumber1(item.number1);
                        setNumber2(item.number2);
                        setOperation(item.operation);
                        setResult(item.result);
                    }}
                >
                    {item.result}
                </button>
            ))}
        </>
    );
};

export default Saved;
