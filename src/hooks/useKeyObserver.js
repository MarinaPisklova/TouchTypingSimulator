import { useState, useLayoutEffect } from "react";

export const useKeyObserver = () => {
  const [sign, setSign] = useState("");

  useLayoutEffect(() => {
    function updateSign(event) {
      setSign(event.key)
    }

    window.addEventListener("keydown", updateSign);

    return () => window.removeEventListener("resize", updateSign);
  }, []);

  return sign;
};
