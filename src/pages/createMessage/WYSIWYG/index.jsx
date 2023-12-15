import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../CommonStyled';
import WriteEditorBox from './WriteEditorBox';

const WriteInputBox = () => {
  return (
    <StyledWriteInputBox>
      <StyledTitle>내용 작성하기</StyledTitle>
      <WriteEditorBox />
    </StyledWriteInputBox>
  );
};

const StyledWriteInputBox = styled.div``;

export default WriteInputBox;
