import DecimalButtonComponent from "./numpad/DecimalButton"
import ButtonComponent from "./numpad/button"

function NumpadComponent({ value, setValue, store, setStore }) {

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
                <DecimalButtonComponent value={value} setValue={setValue}/>
                <button onClick={() => setValue(0)}>Clear</button>
            </div>
                <button onClick={() => setValue(store)}>Recall</button>
                <button onClick={() => setStore(value)}>Store</button>
        </div>
    )
}

export default NumpadComponent