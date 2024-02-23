import { useState } from "react";

export const NumberPanel = ({ num, setNum, saved }) => {
  const [hasDecimal, setHasDecimal] = useState(false)

  const handleNumberClick = (clickedNum) => {
    if(num === 0 && !hasDecimal)
      setNum(clickedNum)
    else {
      setNum(parseFloat(num.toString() + clickedNum.toString()));
    }
  };

  const addDecimal = () =>{
    if (!hasDecimal){
      setHasDecimal(true)
      setNum(num + '.')
    }
  }

  const clear = () => {
    setNum(0);
    setHasDecimal(false)
  };

  const loadSaved = () => {
    if ((saved !== null))
      setNum(saved)
  }

  return (
    <div className="panel">
      <p>{num}{(hasDecimal && Number.isInteger(num)) ? '.' : null}</p>
      <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleNumberClick(number)}>
            {number}
          </button>
        ))}
        <button onClick={addDecimal}>.</button>
        <button onClick={clear}>Clear</button>
        <button onClick={loadSaved}>Load stored</button>
      </div>
    </div>
  );
};
