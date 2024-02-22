import React from 'react'
import ButtonComponent from './ButtonComponent'
function OperatorComponent({value, setValue}) {
  return (
    <div className="panel">
        <p>{value}</p>
        <div className="numbers">
        <ButtonComponent setValue = {setValue}>
                +
        </ButtonComponent>
        <ButtonComponent setValue = {setValue}>
                -
        </ButtonComponent>
        <ButtonComponent setValue = {setValue}>
                *
        </ButtonComponent> <ButtonComponent setValue = {setValue}>
                ÷
        </ButtonComponent>
        </div>
      </div>
  )
}

export default OperatorComponent