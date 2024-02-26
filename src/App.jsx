import "./App.css"
import PanelComponent4 from "./components/PanelComponent4"
import PanelComponent from "./components/panelComponent"
import PanelComponent3 from "./components/panelComponent3"

import { useState } from "react"

function App() {
  // define some usestates:
  const [value1,setValue1] = useState('0')
  const [value2, setValue2] = useState('0');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  // exention2: storevalue
  const [storeValue, setStoreValue] = useState(0);

  return (



    // Panels and numbers
    <div className="calculator">
      {/* Panels and numbers */}
      <PanelComponent value={value1} setValue={setValue1} storeValue={storeValue}  />
      <PanelComponent4 operation={operation} setOperation={setOperation}/>
      <PanelComponent value={value2} setValue={setValue2} storeValue={storeValue} />

      {/* Panel for result */}
      <PanelComponent3 value1={value1} value2={value2} operation={operation} result={result} setResult={setResult} storeValue={storeValue} setStoreValue={setStoreValue}/>
      
    
    </div>

  )
}

export default App
