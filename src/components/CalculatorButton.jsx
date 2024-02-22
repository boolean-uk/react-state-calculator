import React from 'react'

function CalculatorButton({setValue,value}) {
  return (
    <button onClick={() => setValue(value)}>{value}</button>
  )
}

export default CalculatorButton