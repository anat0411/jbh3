import React, { useState, useEffect, useContext } from "react";
import ColorContext from "../../contexts/ColorContext";

const getTime = () => new Date().toLocaleTimeString();

function Clock() {
  const [time, setTime] = useState(getTime());
  const color = useContext(ColorContext);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return <h3 style={{ color: color }}>My Time: {time}</h3>;
}

export default Clock;
