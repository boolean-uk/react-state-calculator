import "./App.css"
import {useState} from 'react'


function App() { 
<<<<<<< HEAD
const [number1, setNumber1] = useState(0) 
//const [number2, setNumber2] = useState(0)

//const [addcount , setAddCount ] = useState(0)



const clickNumber1 = (event) => {
  event.preventDefault()
  console.log(event)
const number11 = event.target[1]._reactProps$7fx6lcrc3dj.id
console.log(number11)
}
=======
  const [number1, setNumber1] = useState(0);

  const handleNumberClick = (num) => {
    setNumber1((prevNumber) => {
      const newNumber = prevNumber === 0 ? num : Number(`${prevNumber}${num}`);
      return newNumber;
    });
  };

  const handleClearClick = () => {
    setNumber1(0);
  }; 


>>>>>>> 6d4f8c9a4c1d7b2c72ed4870e6b66b8aca062ffd
  return (
    <div className="calculator">
        <div className="panel">
          <p>{number1}</p>
          <div className="numbers">
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={handleClearClick}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>+</p>
          <div className="numbers">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>÷</button>
          </div>
        </div>

        <div className="panel">
          <p>0</p>
          <div className="numbers">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>0</p>
          <div>
            <button>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
