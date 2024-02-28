import { useState } from 'react'
import PropTypes from "prop-types";

var operation = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '÷': function (x, y) { return x / y },
}

function AnswerPanelComponent({ _operator, _num1, _num2 }) {
    const [ answerNum, setAnswerNum ] = useState(0)

    const CalculateAnswerNum = () => {
        setAnswerNum(operation[_operator](_num1, _num2))
    }

    return (
    <div className="panel answer">
      <p>{answerNum}</p>
      <div>
        <button onClick={CalculateAnswerNum}>=</button>
      </div>
    </div>
    )
}

AnswerPanelComponent.propTypes = {
    _operator: PropTypes.string.isRequired,
    _num1: PropTypes.number.isRequired,
    _num2: PropTypes.number.isRequired,
};

export default AnswerPanelComponent