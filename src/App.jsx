import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Main from "./Main";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  const [themeState, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", themeState);
  }, [themeState]);

  const onToggleTheme = () => {
    setTheme(themeState === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider theme={theme[themeState]}>
        <GlobalStyles />
        {/* 여기 밑으로 컴포넌트 사용 */}
        <Main onToggleTheme={onToggleTheme} />
      </ThemeProvider>
    </>
  );
}

export default App;
