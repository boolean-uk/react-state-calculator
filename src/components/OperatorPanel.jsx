export default function OperatorPanel({operator, setOperator}) {
  const handleClick = (op) => {
    setOperator(op)
  }

  return (
    <div className="panel">
      <p>{operator}</p>
      <div className="numbers">
        {['+', '-', '*', '÷'].map((op) => (
          <button key={op} onClick={() => handleClick(op)}>{op}</button>
        ))}
      </div>
    </div>
  )
}