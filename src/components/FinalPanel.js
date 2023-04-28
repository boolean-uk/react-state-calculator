function FinalPanel ({num, num2, operator, value, setValue, result, setStored}) {
    
    function calculator(num, num2, operator) {
        if(operator === '+'){
            return parseFloat(num) + parseFloat(num2)
        }
        if(operator === '-'){
            return parseFloat(num) - parseFloat(num2)
        }
        if(operator === '÷'){
            return parseFloat(num) / parseFloat(num2)
        }
        if(operator === '*'){
            return parseFloat(num) * parseFloat(num2)
        }
    }

    return (
        <div className="panel answer">
        <p> {value} </p>
        <div>
          <button onClick={() => {setValue(calculator(num, num2, operator))}} >=</button>
          <button onClick={() => {setStored(result.toString())}} >Store</button>
        </div>
      </div>
    )
}

export default FinalPanel