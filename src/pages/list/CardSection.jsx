import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ALeft } from "../../assets/icon/arrow_left.svg";
import { ReactComponent as ARight } from "../../assets/icon/arrow_right.svg";
import { DEVICE_MAX_SIZE } from "../../constants";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { CardList } from "./CardList";

function CardSection({ title, recipients }) {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const cardWidth = 29.5;

  const maxIndex = recipients.length - itemsPerPage;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - itemsPerPage : 0;
      setOffset(-newIndex * cardWidth);
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < maxIndex ? prevIndex + itemsPerPage : maxIndex;
      setOffset(-newIndex * cardWidth);
      return newIndex;
    });
  };

  const renderItems = recipients.map((recipient, index) => (
    <Link key={index} to={`/post/${recipient.id}`}>
      <CardItem recipient={recipient} />
    </Link>
  ));

  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <div style={{ position: "relative" }}>
        <ArrowButton $left onClick={handlePrevClick} $hide={currentIndex === 0}>
          <ALeft />
        </ArrowButton>
        <Wrapper>
          <CardList offset={offset}>{renderItems}</CardList>
        </Wrapper>
        <ArrowButton onClick={handleNextClick} $hide={currentIndex >= maxIndex}>
          <ARight />
        </ArrowButton>
      </div>
    </Container>
  );
}

export default CardSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 116rem;
  width: 100%;
  @media screen and (max-width: ${DEVICE_MAX_SIZE.TABLET}px) {
    align-self: flex-start;
    margin-left: 2rem;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const SubTitle = styled.span`
  margin-top: 5rem;
  display: block;
  color: ${({ theme }) => theme.subtitle};
  font-family: Pretendard;
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
  ${(props) => (props.$left ? "left: -2rem" : "right: -2rem")};

  display: ${({ $hide }) => ($hide ? "none" : "flex")};
  align-items: center;
  justify-content: center;

  z-index: 1;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: white;

  cursor: pointer;
`;
