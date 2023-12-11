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
  width: 6.5rem;
  height: 3.6rem;
  font-size: 1.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.54);
`;

const Count = styled.span`
  color: white;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
`;
