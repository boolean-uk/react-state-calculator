//import React, { useState } from 'react';
//import displayValue from '../functions/displayValue.jsx'
import ClearValue from '../functions/clearValue.jsx';
import PropTypes from 'prop-types'; // Import PropTypes

export default function PanelComponent(props) {
  
  // Define prop types for PanelComponent
  // (By adding prop validation, you ensure that the component receives the expected props, and it helps prevent potential bugs in your application.)
  PanelComponent.propTypes = {
  value: PropTypes.string.isRequired, //  'value' is a string
  setValue: PropTypes.func.isRequired, //  'setValue' is a function
};

  // Destructed from props.
  const {value, setValue} = props;
  
  // DEFINE displayValue here instead.
  const displayValue = (value, setValue, number) => {
    // Handle click:
    if (value === '0') {
        setValue(number)
    }
    else{
        setValue(number + value)
    }
  };

  return (
    <>
      {/* PANEL 1 */}
    <div className="panel">
      <p>{value}</p>
      <div className="numbers">
        <button onClick={() => displayValue( value, setValue ,'1')}>1</button>
        <button onClick={() => displayValue( value, setValue ,'2')}>2</button>
        <button onClick={() => displayValue( value, setValue ,'3')}>3</button>
        <button onClick={() => displayValue( value, setValue ,'4')}>4</button>
        <button onClick={() => displayValue( value, setValue ,'5')}>5</button>
        <button onClick={() => displayValue( value, setValue ,'6')}>6</button>
        <button onClick={() => displayValue( value, setValue ,'7')}>7</button>
        <button onClick={() => displayValue( value, setValue ,'8')}>8</button>
        <button onClick={() => displayValue( value, setValue ,'9')}>9</button>
        <button onClick={() => displayValue( value, setValue ,'0')}>0</button>

        {/* To to use props properly: */}
        <ClearValue value={value} setValue={setValue}/>
        {/* <button onClick={() => learValue={setValue}}>Clear</button> */}
      </div>
    </div>

   

     
    </>
   
  
  )
}
