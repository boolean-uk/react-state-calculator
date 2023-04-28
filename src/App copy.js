import "./App.css";
import ButtonComponent from "./ButtonComponent";
// import { useState } from "react";

const App = () => {
  const addAndMinusClear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Clear"];
  const operationSign = ["+", "-", " *", "/"];

  // const [add, setAdd] = useState("");
  // const [minus, minusAdd] = useState("");
  // const [operation, setOperation] = useState("+");
  // const [result, setResult] = useState(0);

  return (
    <div className="calculator">
      <div className="panel">
        <p>0</p>
        <div className="numbers">
          {addAndMinusClear.map((buttonLabel, index) => {
            return <ButtonComponent buttonLabel={buttonLabel} key={index} />;
          })}
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          {operationSign.map((buttonLabel, index) => {
            return <ButtonComponent buttonLabel={buttonLabel} key={index} />;
          })}
        </div>
      </div>

      <div className="panel">
        <p>0</p>
        <div className="numbers">
          {addAndMinusClear.map((buttonLabel, index) => {
            return <ButtonComponent buttonLabel={buttonLabel} key={index} />;
          })}
        </div>
      </div>

      <div className="panel answer">
        <p>0</p>
        <div>
          <ButtonComponent buttonLabel={"="} />
        </div>
      </div>
    </div>
  );
};

export default App;
