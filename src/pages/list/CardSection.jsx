import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ALeft } from "../../assets/icon/arrow_left.svg";
import { ReactComponent as ARight } from "../../assets/icon/arrow_right.svg";
import { CARD_WIDTH, DEVICE_MAX_SIZE, ITEMS_PER_PAGE } from "../../constants";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import { CardList } from "./CardList";

function CardSection({ title, recipients }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const maxIndex = recipients.length - ITEMS_PER_PAGE;

  const updateOffset = (index) => {
    setOffset(-index * CARD_WIDTH);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - ITEMS_PER_PAGE, 0);
      updateOffset(newIndex);
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = Math.min(prevIndex + ITEMS_PER_PAGE, maxIndex);
      updateOffset(newIndex);
      return newIndex;
    });
  };

  //드래그 이벤트
  const handleMouseDown = (e) => {
    console.log("down", e.pageX);
    setStartX(e.pageX);
  };

  const handleMouseUp = (e) => {
    console.log("up", e.pageX);
    setEndX(e.pageX);

    const deltaX = endX - startX;

    // If deltaX is negative, it's a swipe to the left, call handlePrevClick
    if (deltaX < 0) {
      console.log("0");
      handlePrevClick();
    }
    // If deltaX is positive, it's a swipe to the right, call handleNextClick
    else if (deltaX > 0) {
      console.log("1");
      handleNextClick();
    }
  };

  const renderItems = recipients.map((recipient, index) => <CardItem key={index} recipient={recipient} />);

  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <Relative>
        <ArrowButton $left onClick={handlePrevClick} $hide={currentIndex === 0}>
          <ALeft />
        </ArrowButton>
        <Wrapper onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          <CardList offset={offset}>{renderItems}</CardList>
        </Wrapper>
        <ArrowButton onClick={handleNextClick} $hide={currentIndex >= maxIndex}>
          <ARight />
        </ArrowButton>
      </Relative>
    </Container>
  );
}

export default React.memo(CardSection);

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

const Relative = styled.div`
  position: relative;
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
