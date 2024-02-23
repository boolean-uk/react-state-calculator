import {useState} from 'react'

function CalculatorButton({ setValue, value }) {
    function updateValue() {
     
        if (['+', '-', '*', '÷'].includes(value)) {
          
          setValue(value);
        } else {
        
          setValue((prevValue) => {
            if (prevValue === 0) {
              return value;
            } else {
             
              return value === '.' && prevValue.includes('.') ? prevValue : `${prevValue}${value}`;
            }
          });
        }
      }
  
    return (
      <button onClick={updateValue}>{value}</button>
    );
  }
  

export default CalculatorButton