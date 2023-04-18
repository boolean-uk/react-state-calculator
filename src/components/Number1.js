import { useState } from "react"

function Number1 ({num1, setNum1, storedAnswer}) {

  function handleClick(event) {
    const paragraph = document.querySelector('.p1')
    if(paragraph.innerText === '0'){
      
      setNum1(event.target.innerHTML)
    }else{
      setNum1(paragraph.innerHTML + event.target.innerHTML)

    }
  }

  function clear(){
    setNum1(0)
  }

  function answerRecall () {
    setNum1(storedAnswer)
  }

    return (
        <div className="panel">
          <p className="p1">{num1}</p>
          <div className="numbers">
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>0</button>
            <button onClick={clear}>Clear</button>
            <button onClick={answerRecall}>Recall</button>
          </div>
        </div>
    )
}

export default Number1

