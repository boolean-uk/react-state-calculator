import { useState } from "react";

function NumberPanel(){
let [currentNumber, setNumber] = useState('0');

const handleClick = (num)=>{
    let newValue;
    if(num === '.' && currentNumber === '0'){
        newValue = '0' + num.toString();
    }else if(num !== '.' && currentNumber === '0') {
        newValue = num.toString();
    }else if(num === '.' && currentNumber !== '0'){
        
        if(currentNumber.indexOf(`.`) >=0){
            newValue = currentNumber.toString();
        }else{
            newValue = currentNumber + num; 
        }
    }else{
        newValue = currentNumber + num; 
    }
    
    return setNumber(newValue)
}
const setNumberFromMemory = () =>{

    let newValue = document.querySelector('.MS')
    return setNumber(newValue.innerHTML)
}

return(
    <div className="panel">
    <p className='value' value={currentNumber}>{currentNumber}</p>
    <div className="numbers">
      <button value='1' onClick={()=>handleClick(1)}>1</button>
      <button value='2' onClick={()=>handleClick(2)}>2</button>
      <button value='3' onClick={()=>handleClick(3)}>3</button>
      <button value='4' onClick={()=>handleClick(4)}>4</button>
      <button value='5' onClick={()=>handleClick(5)}>5</button>
      <button value='6' onClick={()=>handleClick(6)}>6</button>
      <button value='7' onClick={()=>handleClick(7)}>7</button>
      <button value='8' onClick={()=>handleClick(8)}>8</button>
      <button value='9' onClick={()=>handleClick(9)}>9</button>
      <button value='0' onClick={()=>handleClick(0)}>0</button>
      <button value='0' onClick={()=>handleClick('.')}>.</button>
      <button onClick={()=>setNumber('0')}>Clear</button>
      <button onClick={()=>setNumberFromMemory()}>Recall</button>
    </div>
  </div>
)
}




export default NumberPanel