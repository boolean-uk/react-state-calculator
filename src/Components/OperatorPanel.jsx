/* eslint-disable react/prop-types */
export default function OperatorPanel({operator, setOperator}) {
  return (
    <div className="panel">
    <p>{operator}</p>
    <div className="numbers">
      <button onClick={() => setOperator('+')}>+</button>
      <button onClick={() => setOperator('-')}>-</button>
      <button onClick={() => setOperator('*')}>*</button>
      <button onClick={() => setOperator('÷')}>÷</button>
    </div>
  </div>
  )
}
