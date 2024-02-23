/* eslint-disable react/prop-types */
function First({ updateValue, setFirst, handleRecallFirst, first }) {
    return (
      <div className="panel">
        <p>{first}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].map((number) => (
            <button key={number} onClick={() => updateValue(number, false)}>
              {number}
            </button>
          ))}
          <button onClick={() => setFirst("")}>Clear</button>
          <button onClick={handleRecallFirst}>Recall</button>
        </div>
      </div>
    )
  }
  
export default First;
  