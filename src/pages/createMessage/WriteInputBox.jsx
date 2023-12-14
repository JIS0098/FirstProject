import React from "react";
import styled from "styled-components";
import { TitleStyled } from "./CommonStyled";
import WriteInput from "./WriteInput";

const WriteInputBox = () => {
  return (
    <StyledWriteInputBox>
      <h2>내용 작성하기</h2>
      <WriteInput />
    </StyledWriteInputBox>
  );
};

const StyledWriteInputBox = styled.div`
  & h2 {
    ${TitleStyled};
  }
`;

export default WriteInputBox;
