const Operation = ({ operation, setOperation }) => {
    const operations = ["+", "-", "*", "/"];

    return (
        <div className="panel">
            <p>{operation}</p>
            <div className="numbers">
                {operations.map((item) => (
                    <button key={item} onClick={() => setOperation(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Operation;
