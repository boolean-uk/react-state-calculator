import React from "react";

function Buttons(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Buttons;
