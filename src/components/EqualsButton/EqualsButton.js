function EqualsButton (props) {

const firstNum = Number(props.firstNum)
const operator = String(props.whichOp)
const secondNum = Number(props.secondNum)

function Equals() {
  console.log('equals clicked')
  console.log('first', firstNum)
  console.log('operator', operator)
  console.log('second', secondNum)

  if (operator === '+') {
    props.setEquals(firstNum + secondNum)
  }

  else if (operator === '-') {
    props.setEquals(firstNum - secondNum)
  }

  else if (operator === '*') {
    props.setEquals(firstNum * secondNum)
  }

  else if (operator === '÷') {
    props.setEquals(firstNum / secondNum)
  }

  else {
    console.log('error')
  }

}

    return (

      <div className="panel answer">
        <p>{props.equals}</p>
        <div>
           <button onClick={Equals}>=</button>
        </div>
      </div>

    )

}

export default EqualsButton