function DecimalButtonComponent({value, setValue}){
    function addDecimalPoint(){
        if(!value.includes('.')){
            setValue(`${value}.`)
        }
    }
    
    return(
        <button onClick={() => addDecimalPoint()}>.</button>
    )
}

export default DecimalButtonComponent