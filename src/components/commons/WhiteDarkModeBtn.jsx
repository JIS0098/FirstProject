import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <StyledContainer
      data-isOn={isOn}
      onClick={toggleSwitch}
      initial={false}
      animate={{ backgroundColor: isOn ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.2)" }}
    >
      <Handle data-isOn={isOn} layout transition={spring} />
    </StyledContainer>
  );
}

const StyledContainer = styled(motion.div)`
  width: 45px;
  height: 27px;

  display: flex;
  justify-content: flex-start;
  border-radius: 50px;
  padding: 4px;
  cursor: pointer;

  &[data-isOn="true"] {
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
