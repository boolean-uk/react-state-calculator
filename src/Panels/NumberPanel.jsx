export const NumberPanel = ({ num, setNum, saved }) => {
  const handleButtonClick = (number) => {
    if(num === 0)
      setNum(number)
    else {
      setNum(Number(num.toString() + number.toString()));
    }
  };

  const handleClearClick = () => {
    setNum(0);
  };

  const loadSaved = () => {
    if ((saved !== null))
      setNum(saved)
  }

  return (
    <div className="panel">
      <p>{num}</p>
      <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleButtonClick(number)}>
            {number}
          </button>
        ))}
        <button onClick={handleClearClick}>Clear</button>
        <button onClick={loadSaved}>Load stored</button>
      </div>
    </div>
  );
};
