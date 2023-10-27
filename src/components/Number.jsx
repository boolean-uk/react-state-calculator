const Number = ({ number, setNumber }) => {
    const rangeOfNumbers = Array.from(
        { length: 9 },
        (value, index) => index + 1
    );
    rangeOfNumbers.push(0);
    rangeOfNumbers.push(".");

    return (
        <div className="panel">
            <p>{number}</p>
            <div className="numbers">
                {rangeOfNumbers.map((item) => (
                    <button
                        key={item}
                        onClick={() =>
                            setNumber(
                                item === "." && number.toString().includes(".")
                                    ? number
                                    : item === "." &&
                                      number.toString().startsWith(0)
                                    ? 0
                                    : number.toString().startsWith(0)
                                    ? item
                                    : number.toString() + item
                            )
                        }
                    >
                        {item}
                    </button>
                ))}
                <button onClick={() => setNumber(0)}>Clear</button>
            </div>
        </div>
    );
};

export default Number;
