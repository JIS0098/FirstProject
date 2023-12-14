import React from "react";
import styled from "styled-components";
import ProfileImgs from "../../components/commons/ProfileImages";
import downImg from "../../assets/icon/arrow_down.svg";
import addEmojiImg from "../../assets/icon/add-24.svg";
import shareImg from "../../assets/icon/share-24.svg";
import Emoji from "../../components/commons/Emoji";

function PostHeader({ toggleShare, toggleEmoji, dataEmoji }) {
  const list = [{ img: { addEmojiImg } }, { img: { shareImg } }, { img: { shareImg } }];
  return (
    <PostHead>
      <HeaderService>
        <ToName>To. Ashley Kim</ToName>

        <HeaderServiceBox>
          <HeaderServicePost>
            <ProfileImgs list={list} />
            <ServiceP>
              <ServiceSpan>23</ServiceSpan> 명이 작성했어요!
            </ServiceP>
          </HeaderServicePost>

          <EmojiWrap>
            {dataEmoji.slice(0, 3).map((item) => (
              <Emoji key={item.id}>
                {item.emoji} {item.count}
              </Emoji>
            ))}

            <EmojiButton src={downImg} onClick={toggleEmoji} />

            <ButtonWrap>
              <img src={addEmojiImg} />
              <ButtonWrapP>추가</ButtonWrapP>
            </ButtonWrap>
            <Line></Line>
            <ButtonWrap onClick={toggleShare}>
              <img src={shareImg} />
            </ButtonWrap>
          </EmojiWrap>
        </HeaderServiceBox>
      </HeaderService>
    </PostHead>
  );
}
const PostHead = styled.div`
  width: 100%;
  background-color: #fff;
`;

const HeaderService = styled.div`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 1.3rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }
`;
const ToName = styled.h2`
  color: #2b2b2b;
  font-size: 2.8rem;
`;
const HeaderServiceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.8rem;
`;
const HeaderServicePost = styled.div`
  display: flex;
  gap: 1.1rem;
  font-size: 1.8rem;
  color: #181818;
  width: 21rem;
  @media all and (max-width: 1248px) {
    display: none;
  }
`;
const ServiceSpan = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`;
const ServiceP = styled.p`
  display: flex;
  align-items: center;
`;

const EmojiWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: relative;
  @media all and (max-width: 768px) {
    gap: 0.8rem;
  }
`;
const EmojiButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  @media all and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  @media all and (max-width: 768px) {
    padding: 0.6rem 0.8rem;
  }
`;
const ButtonWrapP = styled.p`
  font-size: 1.6rem;
  @media all and (max-width: 768px) {
    display: none;
  }
`;
const Line = styled.div`
  width: 1px;
  height: 2.8rem;
  background-color: #eee;
`;

export default PostHeader;
