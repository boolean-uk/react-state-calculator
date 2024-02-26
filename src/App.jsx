import "./App.css"
import React, {useState} from 'react';

function App() {
  const [display, setDisplay] = useState('0'); // State to keep track of the current display value
  const [display2, setDisplay2] = useState('0'); // State to keep track of the current display value
  const [display3, setDisplay3] = useState('0'); // State to keep track of the current display value
  const [operation, setOperation] = useState(''); // State to keep track of the current operation
  const [storedValue, setStoredValue] = useState(null); // State to store a value
  const numberClick = (num) => {
    if(display === '0') {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
  }


  const numberClick2 = (num) => {
    if(display2 === '0' || display2 === 'Error') {
      setDisplay2(num ==='0' ? '0' : num)
    } else {
      setDisplay2(display2 + num)
    }
  }


  const equalsClick = () => {
    const currentValue = parseFloat(display2);
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(display) + currentValue;
        break;
      case '-':
        result = parseFloat(display) - currentValue;
        break;
      case '*':
        result = parseFloat(display) * currentValue;
        break;
      case '/':
        if (currentValue !== 0) {
          result = parseFloat(display) / currentValue;
        } else {
          console.error("Division By Zero");
          return;
        }
        break;
      default:
        return;
    }
    setDisplay3(result.toString());
  };

  const handleStore = () => {
    setStoredValue(display3)
  }

  const recall = () => {
    setDisplay(storedValue)
  }
  const recall2 = () => {
    setDisplay2(storedValue)
  }
  

  const clearClick = () => {
    console.log("Clear button clicked"); 
    setDisplay('0')
    setDisplay2('0')
    setOperation('');
    setStoredValue(null);
    console.log("Display:", display); 
    console.log("Display2:", display2); 
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display}</p>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => numberClick(num.toString())}>{num}</button>
            ))}
          <button onClick={clearClick}>Clear</button>
          <button onClick={recall}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
           <button onClick={() => setOperation('+')}>+</button>
          <button onClick={() => setOperation('-')}>-</button>
          <button onClick={() => setOperation('*')}>*</button>
          <button onClick={() => setOperation('/')}>/</button>
        </div>
      </div>

      <div className="panel">
        <p>{display2}</p>
        <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => numberClick2(num.toString())}>{num}</button>
          ))}
          <button onClick={clearClick}>Clear</button>
          <button onClick={recall2}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{display3}</p>
        <div>
          <button onClick={equalsClick}>=</button>
          <button onClick={handleStore}>Store Answer</button>
        </div>
      </div>
    </div>
  )
}

export default App
