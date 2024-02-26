import "./App.css"
import Panel1 from "./components/Panel1"
import Panel2 from "./components/Panel2"
import Operation from "./components/Operation"
import Answer from "./components/Answer"
import { useState } from "react"

function App() {

  const [panel1, setPanel1] = useState("0");
  const [operation, setOperation] = useState("+");
  const [panel2, setPanel2] = useState("0");
  const [answer, setAnswer] = useState(0);
  const [store, setStore] = useState("");


  return (
    <div className="calculator">


      <Panel1 {...{store, panel1, setPanel1}}/>
      <Operation {...{operation, setOperation}}/>
      <Panel2 {...{store, panel2, setPanel2}}/>
      <Answer {...{panel1, operation, panel2, answer, setAnswer, setStore}}/>
    </div>
  )
}

export default App
