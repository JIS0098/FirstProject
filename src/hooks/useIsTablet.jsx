import { useState, useEffect } from "react";
import { DEVICE_MIN_SIZE } from "../constants";

function useIsTablet() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < DEVICE_MIN_SIZE.PC);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < DEVICE_MIN_SIZE.PC);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export default useIsTablet;
