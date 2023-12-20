import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function Btn({ onClick }) {
  const isDark = localStorage.getItem("theme") === "dark";
  const [isOn, setIsOn] = useState(isDark);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
    onClick();
  };

  return (
    <StyledContainer
      data-is-on={isOn}
      onClick={toggleSwitch}
      initial={false}
      animate={{ backgroundColor: isOn ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.2)" }}
    >
      <Handle data-is-on={isOn} layout transition={spring} />
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  width: 45px;
  height: 27px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  border-radius: 50px;
  cursor: pointer;

  &[data-is-on="true"] {
    justify-content: flex-end;
  }
`;

const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
`;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default Btn;
