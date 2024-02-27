import ButtonComponent from "./numpad/button"

function NumpadComponent({ value, setValue }) {

    const buttons = []
    for (let i = 1; i <= 9; i++) {
        buttons.push(<ButtonComponent value={value} setValue={setValue}>{i}</ButtonComponent>)
    }
    buttons.push(<ButtonComponent value={value} setValue={setValue}>0</ButtonComponent>)

    return (
        <div className="panel">
            <p>{value}</p>
            <div className="numbers">
                {buttons}
                <button onClick={() => setValue(0)}>Clear</button>
            </div>
        </div>
    )
}

export default NumpadComponent