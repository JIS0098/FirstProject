import React, { useState } from "react";
import styled from "styled-components";
import color from "../../styles/color";

const NameInput = ({ children, onChange, placeholder }) => {
  const [isName, setIsName] = useState(null);

  return (
    <Create>
      <p>{children}</p>
      <StyledInput
        type="text"
        value={isName || ""}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
          setIsName(e.target.value);
        }}
        onBlur={(e) => setIsName(e.target.value)}
      />
      {isName !== null && !isName && <ErrorText>값을 입력해 주세요.</ErrorText>}
    </Create>
  );
};

export default NameInput;

const Create = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  p {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${color.gray[900]};
    line-height: 150%;
  }
`;

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
