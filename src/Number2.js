import React from "react"

function Number2 ({num2, setNum2, stored}) {

  const handleClick = (event) => {
    if (event.target.innerText === "Clear") {
      setNum2('0')
    }else if (event.target.innerText === "0" && num2==="0") {
      setNum2('0')
    } else if (num2==='0') {
      setNum2(event.target.innerText)
    } else {
      setNum2(num2 + event.target.innerText)
    }
  }

  const handleRecall = (event) => {
    if (typeof stored !== 'undefined'){
      setNum2(stored)
    }
  }
    return ( 
        <div className="panel">
          <p>{num2}</p>
          <div className="numbers" onClick={handleClick}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>Clear</button>
          </div>
          <button onClick={handleRecall}>Recall</button>
        </div>)
}

export default Number2