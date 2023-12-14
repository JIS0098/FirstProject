import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from './CommonStyled';
import WriteInput from './WriteInput';

const WriteInputBox = () => {
  return (
    <StyledWriteInputBox>
      <StyledTitle>내용 작성하기</StyledTitle>
      <WriteInput />
    </StyledWriteInputBox>
  );
};

const StyledWriteInputBox = styled.div``;

export default WriteInputBox;
