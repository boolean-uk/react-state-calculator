export const NumberPanel = ({ num, setNum }) => {
  const handleButtonClick = (number) => {
    setNum(number)
  };

  const handleClearClick = () => {
    setNum(0);
  };

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
      </div>
    </div>
  );
};
