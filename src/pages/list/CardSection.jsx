import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ALeft } from "../../assets/icon/arrow_left.svg";
import { ReactComponent as ARight } from "../../assets/icon/arrow_right.svg";
import { CARD_WIDTH, DEVICE_MAX_SIZE, DEVICE_MIN_SIZE, ITEMS_PER_PAGE } from "../../constants";
import CardItem from "./CardItem";
import { CardList } from "./CardList";

function CardSection({ title, recipients }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

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

  const handleMouseDown = (e) => {
    console.log("down", e.pageX);
    setStartX(e.pageX);
    setIsDrag(true);
  };

  const handleMouseMove = (e) => {
    if (isDrag) {
      const currentX = e.pageX;
      const swipeX = currentX - startX;

      if (swipeX < -50) {
        handleNextClick();
        setIsDrag(false);
      } else if (swipeX > 50) {
        handlePrevClick();
        setIsDrag(false);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDrag(false);
  };

  const handleTouchStart = (e) => {
    const touchX = e.touches[0].clientX;
    setStartX(touchX);
    setIsDrag(true);
  };

  const handleTouchMove = (e) => {
    if (isDrag) {
      const touchX = e.touches[0].clientX;
      setEndX(touchX);
    }
  };

  const handleTouchEnd = () => {
    const swipeX = endX - startX;
    if (swipeX < 0) {
      handleNextClick();
    } else if (swipeX > 0) {
      handlePrevClick();
    }
    setIsDrag(false);
  };

  const renderItems = recipients.map((recipient, index) => <CardItem key={index} recipient={recipient} />);

  return (
    <Container>
      <SubTitle>{title}</SubTitle>
      <Relative>
        <ArrowButton $left onClick={handlePrevClick} $hide={currentIndex === 0}>
          <ALeft />
        </ArrowButton>
        <Wrapper
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
  @media screen and (max-width: ${DEVICE_MIN_SIZE.TABLET}px) {
    -webkit-overflow-scrolling: touch;
  }
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
