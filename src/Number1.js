import React from "react"

function Number1 ({num1, setNum1}) {

  const handleClick = (event) => {
    if (event.target.innerText === "Clear") {
      setNum1('0')
    }else if (event.target.innerText === "0" && num1==="0") {
      setNum1('0')
    } else if (num1==='0') {
      setNum1(event.target.innerText)
    } else {
      setNum1(num1 + event.target.innerText)
    }

  }
    return ( 
        <div className="panel">
          <p>{num1}</p>
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
        </div>)
}

export default Number1