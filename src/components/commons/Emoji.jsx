import React from "react";
import styled from "styled-components";

function Emoji({ children }) {
  return <StyleEmoji>{children}</StyleEmoji>;
}
const StyleEmoji = styled.div`
  min-width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: #fff;
  font-size: 16px;
  @media all and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
export default Emoji;
