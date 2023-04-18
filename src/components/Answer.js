function Answer ({num1,num2,operator,setNum1,setNum2,setOperator,answer,setAnswer,storedAnswer,setStoredAnswer}) {

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

  function storeAnswer () {
    setStoredAnswer(answer)
  }

    return (
        <div className="panel answer">
          <p>{answer}</p>
          <div>
            <button onClick={resultHandle}>=</button>
            <button onClick={storeAnswer}>Store</button>
            <p className="p3">{storedAnswer}</p>
          </div>
        </div>
    )
}

export default Answer