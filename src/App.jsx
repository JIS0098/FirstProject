<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./Main";
import ThemaTest from "./ThemaTest";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme["default"]);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {/* 여기 밑으로 컴포넌트 사용 */}
        <Main />
        {/* 필요에따라 주석처리 !  */}
        <ThemaTest
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
>>>>>>> 753ded51e1da88e2d541e6637c692211bb8a6992
