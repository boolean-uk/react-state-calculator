function Result (props) {

    function updateResult() {
      const firstValue = parseFloat(props.firstNum)
      const secondValue = parseFloat(props.secondNum)
      if (props.operator === `+`) {
        props.setResult(firstValue + secondValue)
      }
      if (props.operator === `-`) {
        props.setResult(firstValue - secondValue)
      }
      if (props.operator === `*`) {
        props.setResult(firstValue * secondValue)
      }
      if (props.operator === `÷`) {
        props.setResult(firstValue / secondValue)
      }
    }

    function storeResult() {
      props.setSaveResult(props.result)
    }

    return (

        <div className="panel answer">
         <p>{props.result}</p>
         <div>
           <button
           onClick={updateResult}
           >=</button>
           <button
           onClick={storeResult}
           >Store Result</button>
         </div>
       </div>

    )

}

export default Result