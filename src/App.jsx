import { useState } from "react";
import "./App.css";

function App() {
  const [panelOne, setPanelOne] = useState("0");
  const [panelTwo, setPanelTwo] = useState("0");
  const [panelMath, setPanelMath] = useState("+");
  const [answer, setAnswer] = useState(0);

  const addToPanelOne = (event) => {
    console.log(event.currentTarget.value);
    console.log("panel one is", panelOne);
    if (panelOne === "0") {
      setPanelOne(event.currentTarget.value);
    } else if (event.currentTarget.value === "Clear") {
      setPanelOne("0");
    } else {
      setPanelOne(panelOne.toString() + event.currentTarget.value.toString());
    }
  };

  const addToPanelMath = (event) => {
    console.log(event.currentTarget.value);
    console.log("panel math is", panelMath);
    setPanelMath(event.currentTarget.value);
  };

  const addToPanelTwo = (event) => {
    console.log(event.currentTarget.value);
    console.log("panel Two is", panelTwo);
    if (panelTwo === "0") {
      setPanelTwo(event.currentTarget.value);
    } else if (event.currentTarget.value === "Clear") {
      setPanelTwo("0");
    } else {
      setPanelTwo(panelTwo.toString() + event.currentTarget.value.toString());
    }
  };

  const getAnswer = () => {
    console.log(`calculating: ${panelOne} ${panelMath} ${panelTwo}`);
    switch (panelMath) {
      case "+":
        setAnswer(Number(panelOne) + Number(panelTwo));
        break;
      case "-":
        setAnswer(Number(panelOne) - Number(panelTwo));
        break;
      case "*":
        setAnswer(Number(panelOne) * Number(panelTwo));
        break;
      case "÷":
        setAnswer(Number(panelOne) / Number(panelTwo));
        break;
      default:
        break;
    }
  };

  function resetCalculator() {
    setPanelOne("0");
    setPanelTwo("0");
    setPanelMath("+");
  }

  function calculateAndReset() {
    getAnswer();
    resetCalculator();
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{panelOne}</p>
        <div className="numbers">
          <button value={1} onClick={addToPanelOne}>
            1
          </button>
          <button value={2} onClick={addToPanelOne}>
            2
          </button>
          <button value={3} onClick={addToPanelOne}>
            3
          </button>
          <button value={4} onClick={addToPanelOne}>
            4
          </button>
          <button value={5} onClick={addToPanelOne}>
            5
          </button>
          <button value={6} onClick={addToPanelOne}>
            6
          </button>
          <button value={7} onClick={addToPanelOne}>
            7
          </button>
          <button value={8} onClick={addToPanelOne}>
            8
          </button>
          <button value={9} onClick={addToPanelOne}>
            9
          </button>
          <button value={0} onClick={addToPanelOne}>
            0
          </button>
          <button value={"Clear"} onClick={addToPanelOne}>
            Clear
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{panelMath}</p>
        <div className="numbers">
          <button value={"+"} onClick={addToPanelMath}>
            +
          </button>
          <button value={"-"} onClick={addToPanelMath}>
            -
          </button>
          <button value={"*"} onClick={addToPanelMath}>
            *
          </button>
          <button value={"÷"} onClick={addToPanelMath}>
            ÷
          </button>
        </div>
      </div>

      <div className="panel">
        <p>{panelTwo}</p>
        <div className="numbers">
          <button value={1} onClick={addToPanelTwo}>
            1
          </button>
          <button value={2} onClick={addToPanelTwo}>
            2
          </button>
          <button value={3} onClick={addToPanelTwo}>
            3
          </button>
          <button value={4} onClick={addToPanelTwo}>
            4
          </button>
          <button value={5} onClick={addToPanelTwo}>
            5
          </button>
          <button value={6} onClick={addToPanelTwo}>
            6
          </button>
          <button value={7} onClick={addToPanelTwo}>
            7
          </button>
          <button value={8} onClick={addToPanelTwo}>
            8
          </button>
          <button value={9} onClick={addToPanelTwo}>
            9
          </button>
          <button value={0} onClick={addToPanelTwo}>
            0
          </button>
          <button value={"Clear"} onClick={addToPanelTwo}>
            Clear
          </button>
        </div>
      </div>
      <div className="panel answer">
        <p>{answer}</p>
        <div>
          <button onClick={calculateAndReset}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
