
// value is used as the number of the button e.g 1, 2, 3, 4
// setButtonValue is a user defined 
export default function Button({ value, fun }) {

    const setButtonValue = () => { fun(value) }

    return (
        <button onClick={setButtonValue}>{value}</button>
    )
}