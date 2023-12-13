import { useState, useEffect } from "react";
import { DEVICE_MAX_SIZE } from "../constants";

function useDeviceSize() {
  const [device, setDevice] = useState("PC"); // 기본값을 'PC'로 설정

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      let currentDevice;
      switch (true) {
        case width < DEVICE_MAX_SIZE.MOBILE:
          currentDevice = "MOBILE";
          break;
        case width >= DEVICE_MAX_SIZE.MOBILE && width < DEVICE_MAX_SIZE.TABLET:
          currentDevice = "TABLET";
          break;
        case width >= DEVICE_MAX_SIZE.TABLET && width < DEVICE_MAX_SIZE.PC:
          currentDevice = "NOTEBOOK";
          break;
        case width >= DEVICE_MAX_SIZE.PC:
          currentDevice = "PC";
          break;
        default:
          currentDevice = "PC";
      }

      setDevice(currentDevice);
    };

    handleResize(); // 초기값 설정을 위해 호출
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: device === "MOBILE",
    isTablet: device === "TABLET",
    isNotebook: device === "NOTEBOOK",
    isPC: device === "PC",
  };
}

export default useDeviceSize;
