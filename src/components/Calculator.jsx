import {useState} from 'react'
import CalculatorValuePanel from './CalculatorValuePanel'
import CalculatorOperatorPanel from './CalculatorOperatorPanel'


function Calculator() {

    const [firstValue,setFirstValue] = useState(0)
    const [secondValue,setSecondValue] = useState(0)
    const [operatorValue,setOperatorValue] = useState('+')
    const [sumValue,setSumValue] = useState(0)
    const [savedValue,setSavedValue] = useState(0)

    function calulate(){
        const first = parseFloat(firstValue)
        const second = parseFloat(secondValue)
        switch(operatorValue){
            case "+":
                setSumValue(first + second);
                break;
            case "-":
                setSumValue(first - second);
                break;
            case "*":
                setSumValue(first * second);
                break;
            case "÷":
                setSumValue(first / second);
                break;
        }
    }

  return (
    <div className="calculator">
      <CalculatorValuePanel value={firstValue} setValue={setFirstValue} savedValue={savedValue}/>

      <CalculatorOperatorPanel value={operatorValue} setValue={setOperatorValue}/>

      <CalculatorValuePanel value={secondValue} setValue={setSecondValue} savedValue={savedValue}/>
      <div className="panel answer">
        <p>{sumValue}</p>
        <div>
          <button onClick={()=>{calulate()}}>=</button>
          <button onClick={()=>{setSavedValue(sumValue)}}>Store</button>
        </div>
      </div>
    </div>

  )
}

export default Calculator