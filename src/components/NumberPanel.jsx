import {useState} from 'react';

export default function NumberPanel({num, setNum}) {
const [savedNum, setSavedNum] = useState(0)

const handleClick = (number) => {
  if(num === 0)
      setNum(number)
    else {
      setNum(num.toString() + number.toString());
    }
}

const handleSave = (num) => {
  setSavedNum(num)
  setNum(0)
}

const handleClear = () => {
  setNum(0)
}

  return (
    <div className="panel">
      <p>{num}</p>
      <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <button key={number} onClick={() => handleClick(number)}>{number}</button>
        ))}

        <button onClick={handleClear}>Clear</button>
        <button onClick={() => handleSave(num)}>Save</button>
        <button onClick={() => setNum(savedNum)}>Recall</button>
      </div>
    </div>
  )
}