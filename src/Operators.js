// you can do it like this if it's a small file
export default function Operators ({ value, fun }) { // event is normally used as a parameter 
    // 
    const setOperatorValue = () => { fun(value) }

   
    return (
        <button onClick={setOperatorValue}>{value}</button>
    )
}


// export default Operators
// if you export this as a object use { } to call exact information out of the object
// otherwise use this for every component