import React from "react";
import styled from "styled-components";

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
  justify-content: space-between;
  width: 6.5rem;
  height: 3.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);
  font-size: 1.6rem;
`;

const Count = styled.span`
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
  font-style: normal;
`;
