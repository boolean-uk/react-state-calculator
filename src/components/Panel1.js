import { useState } from 'react'



function Panel1({ value, setValue }) {

  const setDigit = (number) => {
  }

  console.log('panel1', value)

  return(
        <div className="panel">
          <p>{value}</p>
          <div className="numbers">
            <button onClick={() => {setValue(1)}}>1</button>
            <button onClick={() => {setValue(2)}}>2</button>
            <button onClick={() => {setValue(3)}}>3</button>
            <button onClick={() => {setValue(4)}}>4</button>
            <button onClick={() => {setValue(5)}}>5</button>
            <button onClick={() => {setValue(6)}}>6</button>
            <button onClick={() => {setValue(7)}}>7</button>
            <button onClick={() => {setValue(8)}}>8</button>
            <button onClick={() => {setValue(9)}}>9</button>
            <button onClick={() => {setValue(0)}}>0</button>
            <button onClick={() => {setValue(0)}}>Clear</button>
          </div>
        </div>
  )
}

export { Panel1 }
