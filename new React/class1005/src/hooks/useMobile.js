import React, { useState, useEffect } from "react";

const useMobile = () => {
  const isMobile = () => window.innerWidth < 800;
  const [mobile, setMobile] = useState(isMobile());

  const setMobileState = () => {
    setMobile(isMobile());
  };

  useEffect(() => {
    window.addEventListener("resize", setMobileState);

    return () => {
      window.removeEventListener("resize", setMobileState);
    };
  }, []);

  return mobile;
};

export default useMobile;
