function Answer ({num1,num2,operator,setNum1,setNum2,setOperator,answer,setAnswer}) {

  function resultHandle(){

    if(operator === '+'){

      setAnswer(parseInt(num1) + parseInt(num2))
    }else if(operator === '-'){
      setAnswer(parseInt(num1) - parseInt(num2))

    }else if(operator === '*'){
      setAnswer(parseInt(num1) * parseInt(num2))

    }
    else {
      setAnswer(parseInt(num1) / parseInt(num2))

    }

  }

    return (
        <div className="panel answer">
          <p>{answer}</p>
          <div>
            <button onClick={resultHandle}>=</button>
          </div>
        </div>
    )
}

export default Answer