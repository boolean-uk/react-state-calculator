import { useState } from "react";

function Clear() {
  const [clear, setClear] = useState(0);

  const zero = () => {
    setClear(clear);
  };

  return <button className="clear-button" onClick={zero}>
    Clear
  </button>;
}

export default Clear;
