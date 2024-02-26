import { useEffect } from "react";
import "./App.css"
import { useState } from 'react';

function App() {
  //Starting with making state variables for display value, operation and answer
  //State variable for the value displayed on the calculator
  const [numOne, setNumOne] = useState('0'); 
  const [numTwo, setNumTwo] = useState('0')
  //State variable for the selected operations (+, -, *, /)
  const [operation, setOperation] = useState(null);

  //State variable for result of the given calculation
  const [answer, setAnswer] = useState('0');
   
  //Extension2
  const [storedAnswer, setStoreAnswer] = useState(null);

  const handleNumOne = (str) => {
    if (numOne === '0') {
      setNumOne(str);
    } else {
      setNumOne(prevNumOne => prevNumOne + str);
    }
  }

  const handleNumTwo = (str) => {
    if (numTwo === '0') {
      setNumTwo(str);
    } else {
      setNumTwo(prevNumTwo => prevNumTwo + str);
    }
  }


  //Extension2
  const handleRecall = (panel) => {
    if (panel === 'numOne') {
      setNumOne(storedAnswer.num1 || '0');
    } else {
      setNumTwo(storedAnswer.num2 || '0');
    }
  }

  //Extension3
  const handleDecimal = (panel) => {
    if (panel === 'numOne' && !numOne.includes('.')) {
      setNumOne(prevNumOne => prevNumOne + '.');
    } else if (panel === 'numTwo' && !numTwo.includes('.')) {
      setNumTwo(prevNumTwo => prevNumTwo + '.');
    }
  }

  const handleStore = () => {
    setStoreAnswer({num1: numOne, num2: numTwo, sum: answer})
    console.log(storedAnswer)
  }

  const handleRecallAll = () => {
    // sett handlestore sine verdier til å være numOne, numTwo osv
    setNumOne(storedAnswer.num1)
    setNumTwo(storedAnswer.num2)
    setAnswer(storedAnswer.sum)
  }

  useEffect(() => {
  },[setStoreAnswer, storedAnswer]) 

  const calculate = () => {
    const number1 = parseFloat(numOne);
    console.log(number1)
    //Now we convert the current display value to a number
    const number2 = parseFloat(numTwo)
    console.log(number2)
    let result;
    switch (operation){
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      case '/':
        result = number1 / number2;
        break;
      default:
        result = number2;
        break;        
    }

    setAnswer(result)

  }
    
  return (
    <div className="calculator">
      <div className="panel">
        <p>{numOne}</p>
        <div className="numbers">
          <button onClick={() => handleNumOne('1')}>1</button>
          <button onClick={() => handleNumOne('2')}>2</button>
          <button onClick={() => handleNumOne('3')}>3</button>
          <button onClick={() => handleNumOne('4')}>4</button>
          <button onClick={() => handleNumOne('5')}>5</button>
          <button onClick={() => handleNumOne('6')}>6</button>
          <button onClick={() => handleNumOne('7')}>7</button>
          <button onClick={() => handleNumOne('8')}>8</button>
          <button onClick={() => handleNumOne('9')}>9</button>
          <button onClick={() => handleNumOne('0')}>0</button>
          <button onClick={() => handleDecimal('numOne')}>.</button>  {/*Extension 3 */}
          <button onClick={() => setNumOne ('0')}>Clear</button>        
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
        <p>{numTwo}</p>
        <div className="numbers">
          <button onClick={() => handleNumTwo('1')}>1</button>
          <button onClick={() => handleNumTwo('2')}>2</button>
          <button onClick={() => handleNumTwo('3')}>3</button>
          <button onClick={() => handleNumTwo('4')}>4</button>
          <button onClick={() => handleNumTwo('5')}>5</button>
          <button onClick={() => handleNumTwo('6')}>6</button>
          <button onClick={() => handleNumTwo('7')}>7</button>
          <button onClick={() => handleNumTwo('8')}>8</button>
          <button onClick={() => handleNumTwo('9')}>9</button>
          <button onClick={() => handleNumTwo('0')}>0</button>
          <button onClick={() => handleDecimal('numTwo')}>.</button> {/*Extension 3 */}
          <button onClick={() => setNumTwo ('0')}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
        </div>
        {/*Extension 2 */}
        <div>
          <button onClick={handleStore}>Store</button>
        </div>
        <div>
          <button onClick={() => handleRecall('numOne')}>Recall (Num One)</button>
          <button onClick={() => handleRecall('numTwo')}>Recall (Num Two)</button>
        </div>
        <div>
          <button onClick={handleRecallAll}>Recall All</button>
          <button onClick={() => setAnswer ('0')}>Clear</button>

        </div>
      </div>
    </div>
  )
}

export default App
