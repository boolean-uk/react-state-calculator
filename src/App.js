import "./App.css"
import { Panel } from "./Calculator"
import { MiddlePanel } from "./Calculator"
import { Answer } from "./Calculator"

const keyStrokePanel = '0'
const middleKeyStrokePanel = '+'
const keyStrokeAnswer = '0'
function App() { 

  return (
    <div className="calculator">
        
        <Panel buttonValues = {keyStrokePanel}/>
        
        
        <MiddlePanel buttonValues = {middleKeyStrokePanel}/>

        
        <Panel buttonValues = {keyStrokePanel} />

      

        <Answer buttonValues = {keyStrokeAnswer}/>
    </div>
  )
}

export default App
