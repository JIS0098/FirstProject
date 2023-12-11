import React from "react";
import styled from "styled-components";
import { ReactComponent as ALeft } from "../../assets/icon/arrow_left.svg";
import { ReactComponent as ARight } from "../../assets/icon/arrow_right.svg";
import { CardList } from "./CardList";

function CardSection({ title, recipients }) {
  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <Wrapper>
        <ArrowButton $left>
          <ALeft />
        </ArrowButton>
        <CardList recipients={recipients} />
        <ArrowButton>
          <ARight />
        </ArrowButton>
      </Wrapper>
    </Container>
  );
}

export default CardSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 116rem;
`;

const SubTitle = styled.span`
  color: ${({ theme }) => theme.subtitle};
  display: block;
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.24px;

  margin-top: 5rem;
`;

const ArrowButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translateY(-50%);
  top: 50%;
  z-index: 1;

  ${(props) => (props.$left ? "left: -2rem" : "right: -2rem")};

  fill: rgba(255, 255, 255, 0.9);
  stroke-width: 1px;
  stroke: var(--gray-300, #ccc);
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08));
  backdrop-filter: blur(2px);
`;
