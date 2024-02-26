import "./App.css"
import NumberPanel from "./Components/NumberPanel.jsx"
import Operators from "./Components/Operator.jsx"
import Sum from "./Components/Sum.jsx"

function App() {

  return (
    <>
    <div className="calculator">
      <NumberPanel/>

      <Operators/>

      <NumberPanel/>
      
      <Sum/>
      
    </div>
    </>
  )
  
}

export default App
