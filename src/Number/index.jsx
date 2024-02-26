import { useState } from "react";

function Number() {
  const [number, setNumber] = useState(0);

  const numb = () => {
    setNumber(number);
  };

  return (
    <button className="number-button" onClick={numb}>
      Clear
    </button>
  );
}

export default Number;
