import "./App.css"
import Answer from "./components/Answer"
import Number1 from "./components/Number1"
import Number2 from "./components/Number2"
import Operator from "./components/Operator"

function App() { 

  return (
    <div className="calculator">
        
        <Number1 />
        
        <Operator />

        <Number2 />

        <Answer />
        
    </div>
  )
}

export default App
