import "./App.css"
import { useState } from 'react';

function App() {

  const [elm0, setElm0] = useState('0');
  const [operator, setOperator] = useState('+');
  const [elm1, setElm1] = useState('0');
  const [ans, setAns] = useState(0.0);
  const [store, setStore] = useState(0.0);

  const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const operators = ['+', '-', '*', '÷']

  const calculate = () => {
    const a = parseFloat(elm0);
    const b = parseFloat(elm1);
    switch(operator){
      case('+'):
        setAns(a + b);
        break;
      case('-'):
        setAns(a - b);
        break;
      case('*'):
        setAns(a * b);
        break;
      case('÷'):
        setAns(a / b);
        break;
      default:
        console.log("Something went wrong")
      console.log(a, b, ans)
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{elm0}</p>
        <div className="numbers">{
          values.map((value) => (
          <button onClick={() => setElm0((elm0 == '0' ? '' : elm0) + value)}>{value}</button>
        ))}
          <button onClick={() => setElm0(elm0 + (elm0.includes('.') ? '' : '.'))}>.</button>
          <button onClick={() => setElm0('0')}>Clear</button>
          <button onClick={() => setElm0(String(store))}>recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">{
          operators.map((operator) =>(
            <button onClick={() => setOperator(operator)}>{operator}</button>
          ))
        }
        </div>
      </div>

      <div className="panel">
        <p>{elm1}</p>
        <div className="numbers">{
          values.map((value) => (
          <button onClick={() => setElm1((elm1 == '0' ? '' : elm1) + value)}>{value}</button>
        ))}
        <button onClick={() => setElm1(elm1 + (elm1.includes('.') ? '' : '.'))}>.</button>
          <button onClick={() => setElm1('0')}>Clear</button>
          <button onClick={() => setElm1(String(store))}>recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{ans}</p>
        <div>
          <button onClick={() => calculate()}>=</button>
          <button onClick={() => setStore(ans)}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
