import React from 'react'
import CalculatorValuePanel from './CalculatorValuePanel'
import CalculatorOperatorPanel from './CalculatorOperatorPanel'

function Calculator() {
    const [firstValue,setFirstValue] = React.useState(0)
    const [secondValue,setSecondValue] = React.useState(0)
    const [operatorValue,setOperatorValue] = React.useState('+')
    const [sumValue,setSumValue] = React.useState(0)

    function calulate(){
        switch(operatorValue){
            case "+":
                setSumValue(firstValue + secondValue);
                break;
            case "-":
                setSumValue(firstValue - secondValue);
                break;
            case "*":
                setSumValue(firstValue * secondValue);
                break;
            case "÷":
                setSumValue(firstValue / secondValue);
                break;
        }
    }

  return (
    <div className="calculator">
      <CalculatorValuePanel value={firstValue} setValue={setFirstValue}/>

      <CalculatorOperatorPanel value={operatorValue} setValue={setOperatorValue}/>

      <CalculatorValuePanel value={secondValue} setValue={setSecondValue}/>
      <div className="panel answer">
        <p>{sumValue}</p>
        <div>
          <button onClick={()=>{calulate()}}>=</button>
        </div>
      </div>
    </div>

  )
}

export default Calculator