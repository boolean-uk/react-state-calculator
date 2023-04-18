import "./App.css"

import { useState } from 'react'
import Button from './Button'
import Operators from './Operators'

function App() { 
  const [firstP, setFirstP] = useState(0)
  // to display sympols (+, *) make them 'strings'
  // if its not a number or a boolean make it a string! 
  const [firstO, setFirstO] = useState('+')

  return (
    <div className="calculator">
        <div className="panel">
          <p>{firstP}</p>
          <div className="numbers">
            {/*
              Button component needs 
                1) a value as a display name
                2) a function that will be called when it is clicked
                  We pass the setFirstP function as a parameter to our
                  Button component and assign it to the onClick function
                  So, when the button is clicked, the firstP function is called
            */}
            <Button value={1} fun={setFirstP} />
            <Button value={2} fun={setFirstP} />
            <Button value={3} fun={setFirstP} />
            <Button value={4} fun={setFirstP} />
            <Button value={5} fun={setFirstP} />
            <Button value={6} fun={setFirstP} />
            <Button value={7} fun={setFirstP} />
            <Button value={8} fun={setFirstP} />
            <Button value={9} fun={setFirstP} />
            <Button value={0} fun={setFirstP} />
            <Button value={'Clear'} fun={setFirstP} />
          </div>
        </div>
        
        <div className="panel">
          <p>{firstO}</p>
          <div className="numbers">
            <Operators value={'+'} fun={setFirstO} />
            <Operators value={'-'} fun={setFirstO} />
            <Operators value={'*'} fun={setFirstO} />
            <Operators value={'÷'} fun={setFirstO} />
          </div>
        </div>

        <div className="panel">
          <p>0</p>
          <div className="numbers">
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
        </div>
        <div className="panel answer">
          <p>0</p>
          <div>
            <button>=</button>
          </div>
        </div>
    </div>
  )
}

export default App
