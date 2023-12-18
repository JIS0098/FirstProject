import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "./Main";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme["default"]}>
        <GlobalStyles />
        {/* 여기 밑으로 컴포넌트 사용 */}
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
