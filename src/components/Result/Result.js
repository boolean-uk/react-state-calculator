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

    return (

        <div className="panel answer">
         <p>{props.result}</p>
         <div>
           <button
           onClick={updateResult}
           >=</button>
         </div>
       </div>

    )

}

export default Result