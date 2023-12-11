import React from "react";
import styled, { keyframes } from "styled-components";
import AddPostPreview from "../assets/img/AddPostPreview.png";
import PostPreview from "../assets/img/PostPreview.png";
import EmojiPreview from "../assets/img/EmojiPreview.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <StyledMainContainer>
        <StyledLandingSectionFirst>
          <StyledPageIntroContainer>
            <StyledPagePointContainer>
              <StyledPagePointText>Point. 01</StyledPagePointText>
            </StyledPagePointContainer>
            <StyledPageMainIntroText>
              누구나 손쉽게, 온라인
              <StyledBr />
              롤링 페이퍼를 만들 수 있어요
            </StyledPageMainIntroText>
            <StyledPagSideIntroText>
              로그인 없이 자유롭게 만들어요.
            </StyledPagSideIntroText>
          </StyledPageIntroContainer>
          <StyledCardContainer>
            <StyledPostCard src={PostPreview} alt="PostPreview" />
            <StyledPostCard src={PostPreview} alt="PostPreview" />
            <StyledPostCard src={AddPostPreview} alt="AddPostPreview" />
          </StyledCardContainer>
        </StyledLandingSectionFirst>

        <StyledLandingSectionSecond>
          <StyledCardContainer>
            <StyledEmojiCard src={EmojiPreview} alt="EmojiPreview" />
          </StyledCardContainer>
          <StyledPageIntroContainer>
            <StyledPagePointContainer>
              <StyledPagePointText>Point. 02</StyledPagePointText>
            </StyledPagePointContainer>
            <StyledPageMainIntroText>
              서로에게 이모지로 감정을
              <StyledBr />
              표현해보세요
            </StyledPageMainIntroText>
            <StyledPagSideIntroText>
              롤링 페이퍼에 이모지를 추가할 수 있어요.
            </StyledPagSideIntroText>
          </StyledPageIntroContainer>
        </StyledLandingSectionSecond>
        <Link to="/list">
          <StyledGoToListButtonContainer>
            <StyledGoToListButton>구경해보기</StyledGoToListButton>
          </StyledGoToListButtonContainer>
        </Link>
      </StyledMainContainer>
    </>
  );
}

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledMainContainer = styled.main`
  padding: 0 24px;
`;
const StyledLandingSection = styled.section`
  display: flex;
  background-color: #f6f8ff;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 0;
  border-radius: 16px;
  margin-bottom: 3rem;
  min-height: 30rem;
  min-width: 360px;
  @media screen and (max-width: 1248px) {
    display: grid;
    padding: 4rem 0;
    gap: 3rem;
    grid-template-areas:
      "a"
      "b";
  }
`;
const StyledLandingSectionFirst = styled(StyledLandingSection)`
  justify-content: space-around;
  margin-top: 6rem;
  animation: ${fadeInLeft} 1s ease-in-out forwards;

  @media screen and (max-width: 1248px) {
    justify-content: center;
  }
`;
const StyledLandingSectionSecond = styled(StyledLandingSection)`
  justify-content: space-evenly;
  animation: ${fadeInRight} 1s ease-in-out forwards;

  @media screen and (max-width: 1248px) {
    justify-content: center;
  }
`;
const StyledPageIntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1248px) {
    grid-area: a;
  }

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
`;
const StyledPagePointContainer = styled.div`
  display: flex;
  margin-bottom: 1.6rem;
`;
const StyledPagePointText = styled.p`
  border-radius: 5rem;
  background: #9935ff;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
`;
const StyledPageMainIntroText = styled.h2`
  color: #181818;
  font-family: Pretendard;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  margin-bottom: 0.8rem;
`;
const StyledPagSideIntroText = styled.p`
  color: var(--gray-500, #555);
  font-size: 1.8rem;
  font-weight: 400;
`;
const StyledCardContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1248px) {
    grid-area: b;
  }
`;
const StyledPostCard = styled.img`
  width: 20.5rem;
`;
const StyledEmojiCard = styled.img`
  width: 47rem;
`;
const StyledGoToListButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
  min-width: 360px;
`;
const StyledGoToListButton = styled.button`
  width: 28rem;
  padding: 1.4rem 2.4rem;
  border-radius: 12px;
  background: #9935ff;
  color: white;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #861dee;
  }

  @media screen and (max-width: 1248px) {
    width: 100%;
  }
`;
const StyledBr = styled.br`
  display: block;

  @media screen and (max-width: 1248px) {
    display: none;
  }
`;

export default Landing;
