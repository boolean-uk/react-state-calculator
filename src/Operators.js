function Operators ({operator, setOperator}) {
    
  const handleClick = (event) => {
    setOperator(event.target.innerText)
  }
  
  return ( 
        <div className="panel">
          <p>{operator}</p>
          <div onClick={handleClick} className="numbers">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>÷</button>
          </div>
        </div>)
}

export default Operators