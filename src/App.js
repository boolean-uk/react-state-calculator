import "./App.css";
import Calculator from "./components/Calculator";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() { 

  return (
    <div className="calculator">
     <Calculator/>
      <Display/>
     <Buttons/>
    </div>
  )
}

export default App
