import { useState } from 'react'
import NumberPanelComponent from './Panel/NumberPanel';
import OperatorPanelComponent from './Panel/OperatorPanel';
import AnswerPanelComponent from './Panel/AnswerPanel';

function CalculatorComponent() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('+');

    return (
    <div className="calculator">
      <NumberPanelComponent setNumFunc={setNum1} num={num1}/>
      <OperatorPanelComponent setOperatorFunc={setOperator} operator={operator}/>
      <NumberPanelComponent setNumFunc={setNum2} num={num2}/>
      <AnswerPanelComponent _operator={operator} _num1={num1} _num2={num2}/>
    </div>
    )
}

export default CalculatorComponent