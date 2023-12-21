import React from "react";
import styled, { keyframes } from "styled-components";
import shareFin from "assets/icon/check.svg";

function ShareComplete() {
  return (
    <ShareFinish>
      <ShareImg src={shareFin} alt="shareFin" />
      <ShareP>URL이 복사 되었습니다.</ShareP>
      <ShareClose>X</ShareClose>
    </ShareFinish>
  );
}

const fadeInTop = keyframes`
  0%,100% {
    opacity: 0;
    transform: translateY(30px) translateX(-50%);
  }
  10%,90% {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
`;
const ShareFinish = styled.div`
  display: flex;
  max-width: 52.4rem;
  width: calc(100% - 48px);
  height: 6.4rem;
  padding: 1.9rem 3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  gap: 1.6rem;
  animation: ${fadeInTop} 4s ease-in-out forwards;
  z-index: 1;
`;
const ShareImg = styled.img`
  background-color: green;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 100px;
`;
const ShareP = styled.div`
  width: 100%;
  color: #fff;
  font-size: 1.6rem;
`;
const ShareClose = styled.div`
  color: #fff;
  font-size: 1.6rem;
  font-weight: blod;
  cursor: pointer;
`;
export default ShareComplete;
