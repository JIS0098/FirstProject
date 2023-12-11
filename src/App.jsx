import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Main from "./Main";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme["default"]);

  const toggleTheme = () => {
    const newTheme = currentTheme === theme["default"] ? "years" : "default";
    setCurrentTheme(theme[newTheme]);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Button onClick={toggleTheme} />
        {/* 여기 밑으로 컴포넌트 사용 */}
        <div>header</div>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;

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
