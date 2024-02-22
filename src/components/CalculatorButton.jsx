import React from 'react'

function CalculatorButton({ setValue, value }) {
    function updateValue() {
        // If the value is an operator, handle it separately
        if (['+', '-', '*', '÷'].includes(value)) {
          // Handle the operator
          setValue(value);
        } else {
          // If the current value is '0', replace it with the pressed number or dot
          setValue((prevValue) => {
            if (prevValue === 0) {
              return value;
            } else {
              // If the value is a dot, check if it already exists in the number
              // If true, return the current value; otherwise, append the dot
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