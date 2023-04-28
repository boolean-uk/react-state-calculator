export default function OperatorPanel({value, setValue}) {
  return(
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">
        <button onClick={() => {setValue('+')}}>+</button>
        <button onClick={() => {setValue('-')}}>-</button>
        <button onClick={() => {setValue('*')}}>*</button>
        <button onClick={() => {setValue('÷')}}>÷</button>
      </div>
    </div>
  )
}
