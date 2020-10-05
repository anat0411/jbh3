import React, { useState, useEffect, useContext } from "react";
import ColorContext from "../../contexts/ColorContext";
import useMobile from "../../hooks/useMobile";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [countB, setCountB] = useState(2);
  const context = useContext(ColorContext);
  const isMobile = useMobile();

  useEffect(() => {
    document.title = `My Clicks ${count} B: ${countB}`;
  }, [count, countB]);

  useEffect(() => {
    // document.title = `My Clicks ${count} B: ${countB}`;
  }, [isMobile]);

  return (
    <>
      <h1 style={{ color: context }}>My Clicks: {count}</h1>
      <h2>Count B: {countB}</h2>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCountB(countB + 1)}>Inc B</button>
      {isMobile && <h1>MOBILE</h1>}
    </>
  );
};

export default Counter;
