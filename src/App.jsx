import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './Main';
import ThemaTest from './ThemaTest';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState(theme['default']);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {/* 여기 밑으로 컴포넌트 사용 */}
        <Main />
        {/* 필요에따라 주석처리 !  */}
        {/* <ThemaTest currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
