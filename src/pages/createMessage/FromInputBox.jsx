import React from "react";
import styled from "styled-components";
import { TitleStyled } from "./CommonStyled";

const FromInputBox = () => {
  return (
    <StyledFontSelectBox>
      <h2>From.</h2>
      <input placeholder="이름을 입력해 주세요." />
    </StyledFontSelectBox>
  );
};

const StyledFontSelectBox = styled.div`
  & h2 {
    ${TitleStyled};
  }

  & input {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-300, #ccc);
  }

  & input::-webkit-input-placeholder {
    color: var(--gray-500, #555);
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.16rem;
  }
`;

export default FromInputBox;
