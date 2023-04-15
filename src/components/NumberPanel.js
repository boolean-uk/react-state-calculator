const NumberPanel = ({ number, setNumber }) => {
    return (
        <div className="panel">
            <p>{number}</p>
            <div className="numbers">
                <NumberButton value={1} />
                <NumberButton value={2} />
                <NumberButton value={3} />
                <NumberButton value={4} />
                <NumberButton value={5} />
                <NumberButton value={6} />
                <NumberButton value={7} />
                <NumberButton value={8} />
                <NumberButton value={9} />
                <NumberButton value={0} />
                <button onClick={() => setNumber(0)}>Clear</button>
            </div>
        </div>
    )

    function NumberButton({ value }) {
        return (
            <button onClick={() => {
                const prevNum = number.toString()
                const nextNum = value.toString()
                if (number === 0) setNumber(value)
                else {
                    setNumber(Number(prevNum + nextNum))
                }
            }}>{value}</button>
        );
    }
}

export default NumberPanel