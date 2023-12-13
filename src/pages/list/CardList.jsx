import React from "react";
import styled from "styled-components";

export function CardList({ offset, children }) {
  return <Container offset={offset}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 116rem;
  height: 26rem;
  align-items: start;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ offset }) => offset}rem);
`;
