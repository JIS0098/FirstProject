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
  margin-top: 5rem;
  display: block;
  color: ${({ theme }) => theme.subtitle};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.24px;
  font-style: normal;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  ${(props) => (props.$left ? "left: -2rem" : "right: -2rem")};

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: white;

  cursor: pointer;
`;
