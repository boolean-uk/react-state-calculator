

function Numpad ({number, setFirstNum, setSecondNum, operator}) {
    
    /*Wasnt sure how to add these, but they are here for later use
    const decimal = (string) => {
        if (!string.includes('.')) {
            return string + '.'
        }
        return string
    }
    const addZero = (string) => {
        if (string !== '0' && string !== '') {
            return string + '0'
        }
        return string
    }
    */

    const handleNumberClick = (digit) => {
        if (!operator) {
            setFirstNum ((prevFirstNum) => prevFirstNum + digit)
        } else {
            setSecondNum ((prevSecondNum) => prevSecondNum + digit)
        }
    }

    return (
        <div className="panel">
             <p>{number || 0}</p>
             <button onClick={() => handleNumberClick('1')}>1</button>
             <button onClick={() => handleNumberClick('2')}>2</button>
             <button onClick={() => handleNumberClick('3')}>3</button>
             <button onClick={() => handleNumberClick('4')}>4</button>
             <button onClick={() => handleNumberClick('5')}>5</button>
             <button onClick={() => handleNumberClick('6')}>6</button>
             <button onClick={() => handleNumberClick('7')}>7</button>
             <button onClick={() => handleNumberClick('8')}>8</button>
             <button onClick={() => handleNumberClick('9')}>9</button>
             
        </div>
    )
}

export default Numpad