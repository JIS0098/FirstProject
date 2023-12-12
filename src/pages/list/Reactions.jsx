import React from "react";
import styled from "styled-components";
import { DEVICE_MAX_SIZE } from "../../constants";

export function Reactions({ emoji, count }) {
  return (
    <Badge>
      {emoji}
      <Count>{count}</Count>
    </Badge>
  );
}
const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 6.5rem;
  height: 3.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  font-size: 1.6rem;

  @media screen and (max-width: ${DEVICE_MAX_SIZE.MOBILE}px) {
    width: 3.9rem;
    height: 2rem;
    padding: 0.6rem 0.8rem;
    justify-content: space-around;
    font-size: 1.4rem;
  }
`;

const Count = styled.span`
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  font-style: normal;
  @media screen and (max-width: ${DEVICE_MAX_SIZE.MOBILE}px) {
    font-size: 1.4rem;
  }
`;
