import { useState } from "react";

const ButtonComponent = ({ buttonLabel }) => {
  // Write a handleClick function
  const [add, setAdd] = useState("");
  // const [minus, minusAdd] = useState("");
  // const [operation, setOperation] = useState("+");

  const handleClick = () => {
    console.log(buttonLabel);
    setAdd(add + 1);

    // text1.concat(" ", text2)
  };

  // When a button is clicked, an operation should be performed.
  return (
    <>
      <button onClick={handleClick}>{buttonLabel}</button>
    </>
  );
};

export default ButtonComponent;
