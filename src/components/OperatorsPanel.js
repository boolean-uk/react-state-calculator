import Button from './Button'

export default function OperatorsPanel({ operator, setOperator }) {
    const operators = ['+', '-', '*', '÷']
    
    return (
        <div className="panel">
          <p>{operator}</p>
          <div className="numbers">
            {
              operators.map(o => <Button key={o} value={o} fun={setOperator} />)
            }
          </div>
        </div>
    )
}