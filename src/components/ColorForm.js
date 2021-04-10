import React from "react";

const colorForm = (props) => {
  return (
    <div>
      <button onClick={() => props.colorHandler()}>{props.title}</button>
      {props.show ? <div style={{ height: "100vh", backgroundColor: props.color }} /> : null}
    </div>
  );
};

export default colorForm;
