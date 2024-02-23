export const OperationPanel = ({operator, setOperator}) => {
    const HandleButtonClick = (input) => {
      setOperator(input);
    };

    return (
      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => HandleButtonClick('+')}>+</button>
          <button onClick={() => HandleButtonClick('-')}>-</button>
          <button onClick={() => HandleButtonClick('*')}>*</button>
          <button onClick={() => HandleButtonClick('÷')}>÷</button>
        </div>
      </div>
    );
}