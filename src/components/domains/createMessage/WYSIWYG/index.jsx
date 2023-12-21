import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../commonStyled";
import WriteEditorBox from "./WriteEditorBox";

const WriteInputBox = ({ data, setData, isAlert, setIsAlert }) => {
  return (
    <StyledWriteInputBox>
      <StyledTitle>내용 작성하기</StyledTitle>
      <WriteEditorBox isAlert={isAlert} setIsAlert={setIsAlert} data={data} setData={setData} />
    </StyledWriteInputBox>
  );
};

const StyledWriteInputBox = styled.div``;

export default WriteInputBox;
