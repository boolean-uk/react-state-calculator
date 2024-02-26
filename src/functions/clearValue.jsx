//import React from "react"

const ClearValue = (props) => {
    const handleClear = () => {
        props.setValue('0');
    }

    return (
        <button onClick={handleClear}>Clear</button>
    )
 
};

export default ClearValue;


