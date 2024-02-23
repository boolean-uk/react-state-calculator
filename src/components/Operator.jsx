import CustomButton from "./CustomButton";

const operatorList = ['+', '-', '*', '÷']
function CalculatorOperators({ value, setValue }) {
    const buttons = []

    operatorList.forEach((operator) => {
        buttons.push(<CustomButton setValue={setValue}>{operator}</CustomButton>)
    })

    return (
        <div className="panel">
            <p>{value}</p>
            <div className="numbers">
                {buttons}
            </div>
        </div>
    )
};

export default CalculatorOperators;