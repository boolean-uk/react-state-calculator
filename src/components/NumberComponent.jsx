import React from 'react'
import { useState } from 'react'
import ButtonComponent from './ButtonComponent'
function NumberComponent({value, setValue, stored}) {
    const buttons = []

    const decimals = () => {
        if(Number(value) && value % 1 === 0 || value ===0){
            setValue(`${value}.`)
        }
    } 
      
    for (let i = 0; i <= 9; i++) {
        buttons.push(
            <ButtonComponent setValue = {setValue} value = {value} >
                {i}
            </ButtonComponent>
        )
    }
    buttons.push(buttons.shift())
    
  return (
    <div className="panel">
        <p>{value}</p>
        <div className="numbers">
            {buttons}
            <button onClick={()=> decimals()}>.</button>
            <button onClick={()=> setValue(0)}>Clear</button>
            <button onClick={()=> setValue(stored)}>Recall</button>
        </div>
      </div>
  )
}

export default NumberComponent