import { useRef, useState } from "react"

const NumberPanel = ({ setNumber, storedAnswer }) => {

    const numStr = useRef('0')

    const [num, setNum] = useState('0');

    const generateNumber = (value) => {
        const prevNum = numStr.current
        const nextDigit = value.toString()

        if (nextDigit !== '.') {
            if (prevNum === '0') {
                numStr.current = nextDigit
                setNum(numStr.current)
                setNumber(Number(numStr.current))
                return
            }
            numStr.current += nextDigit
            setNum(numStr.current)
            setNumber(Number(numStr.current))
        } else {
            if (!isNaN(numStr.current + '.')) {
                numStr.current += '.';

                numStr.current.split('.')[1] === '' ? setNum(numStr.current + '0') : setNum(numStr.current)

                setNumber(Number(numStr.current))
            }
        }
    }

    return (
        <div className="panel">
            <p>{num}</p>
            <div className="numbers">
                <NumberButton value={1} />
                <NumberButton value={2} />
                <NumberButton value={3} />
                <NumberButton value={4} />
                <NumberButton value={5} />
                <NumberButton value={6} />
                <NumberButton value={7} />
                <NumberButton value={8} />
                <NumberButton value={9} />
                <NumberButton value={0} />
                <NumberButton value={'.'} />
                <button onClick={() => { setNumber(0); setNum('0'); numStr.current = '0' }}>Clear</button>
                <button onClick={() => { setNumber(storedAnswer); numStr.current = storedAnswer.toString(); setNum(storedAnswer.toString()) }}>Recall</button>
            </div>
        </div>
    )
    function NumberButton({ value }) {
        return (
            <button onClick={() => {
                generateNumber(value)
            }}>{value}</button>
        );
    }

}

export default NumberPanel