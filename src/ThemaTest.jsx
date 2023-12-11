import React from "react";
import styled from "styled-components";
import { theme } from "./styles/theme";

function ThemaTest({ currentTheme, setCurrentTheme }) {
  const toggleTheme = () => {
    const newTheme = currentTheme === theme["default"] ? "years" : "default";
    setCurrentTheme(theme[newTheme]);
  };

  return <Button onClick={toggleTheme} />;
}

const Button = styled.button`
  width: 200px;
  height: 100px;
  background-color: ${({ theme }) => theme.button.primary.enabled};
  &:disabled {
    background-color: ${({ theme }) => theme.button.primary.disabled};
  }
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;

export default ThemaTest;
