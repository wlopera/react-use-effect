import React, { useEffect, useState } from "react";
import CountForm from "../components/CountForm";
import ColorForm from "../components/ColorForm";

const Count = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("Ocultar Color");
  const [color, setColor] = useState("orange");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const mouseMoveHandler = (event) => {
    if (event.clientX < window.innerWidth / 2) {
      setColor("orange");
    } else {
      setColor("blue");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  const changeColorHandler = () => {
    setShow(!show);
    if (show) {
      setTitle("Mostrar Color");
    } else {
      setTitle("Ocultar Color");
    }
  };

  return (
    <div>
      <div>
        <span>
          Valor actual: <strong>{count}</strong>
        </span>
        <CountForm add={() => setCount(count + 1)} subtract={() => setCount((prevCount) => prevCount - 1)} />
      </div>
      <hr />
      <div>
        <ColorForm title={title} color={color} show={show} colorHandler={changeColorHandler} />
      </div>
    </div>
  );
};

export default Count;
