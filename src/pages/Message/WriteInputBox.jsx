import React from "react";
import styled from "styled-components";
import { TitleStyled } from "./CommonStyled";

const WriteInputBox = () => {
  return (
    <StyledWriteInputBox>
      <h2>내용을 입력해주세요</h2>
      <div>메세지 작성 에디터 들어갈 곳</div>
    </StyledWriteInputBox>
  );
};

const StyledWriteInputBox = styled.div`
  & h2 {
    ${TitleStyled};
  }

  & div {
    width: 100%;
    height: 26rem;
    border: 0.1rem solid;
    border-radius: 8px;
    border: 1px solid var(--gray-300, #ccc);
  }
`;

export default WriteInputBox;
