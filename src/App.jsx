import GlobalStyles from "./styles/GlobalStyles";
import React from "react";
import StyleReference from "./styles/StyleReference";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* 여기 밑으로 컴포넌트 사용 */}
      <StyleReference />
    </>
  );
}

export default App;
