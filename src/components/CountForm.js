import React from "react";

const CountForm = (props) => {
  return (
    <div>
      <button onClick={() => props.add()}>+</button>
      <button onClick={() => props.subtract()}>-</button>
    </div>
  );
};

export default CountForm;
