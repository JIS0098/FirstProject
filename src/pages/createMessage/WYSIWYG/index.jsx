import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../CommonStyled";
import WriteEditorBox from "./WriteEditorBox";

const WriteInputBox = ({ data, setData }) => {
  return (
    <StyledWriteInputBox>
      <StyledTitle>내용 작성하기</StyledTitle>
      <WriteEditorBox data={data} setData={setData} />
    </StyledWriteInputBox>
  );
};

const StyledWriteInputBox = styled.div``;

export default WriteInputBox;
