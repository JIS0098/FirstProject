import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import MoreCardImg from "../../assets/icon/plus.svg";

function PostWrap({ showShare, emojiAdd, setShare, toggleModal }) {
  const location = useLocation();
  const baseUrl = window.location.host;

  const urlShare = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShare(true);
      setTimeout(() => {
        setShare(false);
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PostInner>
      <PostDeleteButton>삭제하기</PostDeleteButton>
      <EditDeleteButton>편집하기</EditDeleteButton>
      <PostCard>
        <ImgBox>
          <img src={MoreCardImg} />
        </ImgBox>
      </PostCard>

      <PostCard onClick={toggleModal}>
        <PostCardWrap>
          <From>
            <ImgBox>
              <img src={MoreCardImg} />
            </ImgBox>
            <FromBox>
              <FromP>
                From. <FromSpan>김동훈</FromSpan>
              </FromP>
              <FromTag>가족</FromTag>
            </FromBox>
          </From>
          <PostCardDescrip>코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!</PostCardDescrip>
          <Ago>2023.07.08</Ago>
        </PostCardWrap>
      </PostCard>

      {emojiAdd ? (
        <ToggleAddEmoji>
          <Emoji>😀 8</Emoji>
          <Emoji>🥶 10</Emoji>
          <Emoji>🤢 13</Emoji>
          <Emoji>😂 7</Emoji>
          <Emoji>💩 21</Emoji>
          <Emoji>☠️ 2</Emoji>
        </ToggleAddEmoji>
      ) : null}
      {showShare ? (
        <ShareBox>
          <Share>카카오톡 공유</Share>
          <Share onClick={() => urlShare(`${baseUrl}${location.pathname}`)}>URL 공유</Share>
        </ShareBox>
      ) : null}
    </PostInner>
  );
}
const Emoji = styled.div`
  min-width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  @media all and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
const ToggleAddEmoji = styled.div`
  max-width: 26.4rem;
  display: flex;
  padding: 24px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: beige;
  position: absolute;
  top: 0rem;
  right: 23rem;
  @media all and (max-width: 1248px) {
    right: 20rem;
  }
  @media all and (max-width: 768px) {
    right: auto;
    left: 1rem;
  }
`;

const DeleteButton = styled.div`
  width: 9.2rem;
  height: 3.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 6px;
  background: #9935ff;
  cursor: pointer;
`;
const EditDeleteButton = styled(DeleteButton)`
  display: none;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  color: black;
  @media all and (max-width: 1248px) {
    display: flex;
    position: absolute;
    top: 8rem;
    right: 2.5rem;
  }
`;
const PostDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 8rem;
  right: 2.5rem;
  @media all and (max-width: 1248px) {
    max-width: 72rem;
    width: calc(100% - 48px);
    height: 5.6rem;
    position: fixed;
    padding: 0 2.4rem;
    top: auto;
    bottom: 6rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const PostInner = styled.div`
  max-width: 124.8rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  padding: 13rem 2.4rem;
  gap: 2.4rem;
  position: relative;
  /* justify-content: space-evenly; */
  @media all and (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PostCard = styled.div`
  width: 38.4rem;
  height: 28rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 2.8rem 2.4rem;
  cursor: pointer;
  @media all and (max-width: 1248px) {
    width: 100%;
    max-width: 50rem;
  }
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const PostCardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const PostCardDescrip = styled.div`
  width: 100%;
  height: 10.6rem;
  font-size: 1.8rem;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const ShareBox = styled.div`
  width: 13.8rem;
  height: 10rem;
  position: absolute;
  top: 0;
  right: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media all and (max-width: 1248px) {
    right: 2rem;
  }
  @media all and (max-width: 768px) {
    right: auto;
    left: 22rem;
  }
`;
const Share = styled.div`
  width: 100%;
  text-align: center;
  padding: 12px 16px;
  color: #181818;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
`;

// 공통된거
const From = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1.5rem;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #eee;
`;
const FromBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
const FromTag = styled.div`
  width: 4.1rem;
  height: 2rem;
  display: flex;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--green-100, #e4fbdc);
  color: var(--green-500, #2ba600);
  font-size: 1.4rem;
`;
const FromP = styled.p`
  font-size: 2rem;
`;
const FromSpan = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;
const ImgBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 100px;
  background-color: #555;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Ago = styled.div`
  color: #999;
  font-size: 1.2rem;
`;

export default PostWrap;
