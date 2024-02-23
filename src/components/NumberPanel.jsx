export default function NumberPanel({num, setNum}) {


const handleClick = (number) => {
  setNum(number)
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
      </div>
    </div>
  )
}