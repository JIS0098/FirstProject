import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
export function Button({ children, width, tabletWidth, mobileWidth, disabled, onClick }) {
  return (
    <StyledButton
      type="button"
      width={width}
      $tabletWidth={tabletWidth}
      $mobileWidth={mobileWidth}
      disabled={disabled}
      whileHover={!disabled && { scale: 1.05 }}
      whileTap={!disabled && { scale: 1 }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  padding: 1.4rem 2.4rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.button.enabled};
  width: ${({ width }) => width};
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.button.hover};
  }

  &:disabled {
    filter: opacity(50%);
    cursor: initial;
    background: ${({ theme }) => theme.button.disabled};
  }

  @media screen and (max-width: 1248px) {
    width: ${({ $tabletWidth }) => $tabletWidth};
  }

  @media screen and (max-width: 768px) {
    width: ${({ $mobileWidth }) => $mobileWidth};
  }
`;
