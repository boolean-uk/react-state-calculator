const Number = ({ number, setNumber }) => {
    const rangeOfNumbers = Array.from(
        { length: 9 },
        (value, index) => index + 1
    );
    rangeOfNumbers.push(0);

    return (
        <div className="panel">
            <p>{number}</p>
            <div className="numbers">
                {rangeOfNumbers.map((item) => (
                    <button
                        key={item}
                        onClick={() =>
                            setNumber(
                                number.toString().startsWith(0)
                                    ? item
                                    : parseInt(number.toString() + item)
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
