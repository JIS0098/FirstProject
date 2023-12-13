import React, { useState } from "react";
import styled from "styled-components";
import color from "../../styles/color";

const CreateInput = ({ value, onChange }) => {
  const [isName, setIsName] = useState(true);
  return (
    <>
      <StyledInput
        type="text"
        value={value}
        placeholder="받는 사람 이름을 입력해 주세요."
        onChange={(e) => {
          onChange(e.target.value);
          setIsName(e.target.value);
        }}
        onBlur={() => setIsName(value)}
      />
      {!isName && <ErrorText>값을 입력해 주세요.</ErrorText>}
    </>
  );
};

export default CreateInput;

const StyledInput = styled.input`
  width: 72rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: none;
  outline: 0.1rem solid ${color.gray[300]};
  background: ${color.white};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;

  &:focus {
    outline: 0.2rem solid ${color.gray[500]};
  }

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

const ErrorText = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${color.error};
`;
