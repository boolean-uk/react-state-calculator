

const CalculationPanel = ({ calc, setCalc }) => {

    return (
        <div className="panel">
            <p>{calc}</p>
            <div className="numbers">
                <CalcButton value={'+'} />
                <CalcButton value={'-'} />
                <CalcButton value={'*'} />
                <CalcButton value={'÷'} />
            </div>
        </div>
    )

    function CalcButton({ value }) {
        return (
            <button onClick={() => setCalc(value)}>{value}</button>
        );
    }
}

export default CalculationPanel