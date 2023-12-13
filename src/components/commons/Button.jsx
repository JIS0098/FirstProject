import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1.4rem 2.4rem;
  border-radius: 12px;
  background-color: #9935ff;
  width: ${({ width }) => width};
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #861dee;
  }

  @media screen and (max-width: 1248px) {
    width: ${({ tabletWidth }) => tabletWidth};
  }

  @media screen and (max-width: 768px) {
    width: ${({ MobileWidth }) => MobileWidth};
  }
`;

export function Button({ children, width, tabletWidth, MobileWidth }) {
  return (
    <StyledButton width={width} tabletWidth={tabletWidth} MobileWidth={MobileWidth}>
      {children}
    </StyledButton>
  );
}
