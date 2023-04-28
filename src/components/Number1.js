function Number1 ({num, setNum}) {


const getNum = (event) => {
    const input = event.target.innerText

    if(num === '0' && input === '0') {
        setNum('0')
    }
        else if(num === '0') {
            setNum(input)
        }
        else {
            setNum(num + input)
        }
}


const clear = () => {
    setNum('0')
}


return (
        <div className="panel">
          <p>{num}</p>
          <div className="numbers">
            <button onClick={getNum}>1</button>
            <button onClick={getNum}>2</button>
            <button onClick={getNum}>3</button>
            <button onClick={getNum}>4</button>
            <button onClick={getNum}>5</button>
            <button onClick={getNum}>6</button>
            <button onClick={getNum}>7</button>
            <button onClick={getNum}>8</button>
            <button onClick={getNum}>9</button>
            <button onClick={getNum}>0</button>
            <button onClick={clear}>Clear</button>
          </div>
        </div>
        )}

export {
 Number1 
} 
        