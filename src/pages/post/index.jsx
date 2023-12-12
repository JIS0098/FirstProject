import React, { useState } from "react";
import styled from "styled-components";
import downImg from "../../assets/icon/arrow_down.svg";
import addEmojiImg from "../../assets/icon/add-24.svg";
import shareImg from "../../assets/icon/share-24.svg";
import MoreCardImg from "../../assets/icon/plus.svg";
import shareFin from "../../assets/icon/check.svg";

function Post() {
  const [emojiAdd, setEmojiAdd] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const addEmoji = () => {
    setEmojiAdd((prev) => !prev);
  };
  const shareToggle = () => {
    setShowShare((prev) => !prev);
  };
  const modalToggle = () => {
    setshowModal((prev) => !prev);
  };

  return (
    <PostBack>
      <WhiteBack>
        <HeaderService>
          <ToName>To. Ashley Kim</ToName>

          <HeaderServiceBox>
            <HeaderServicePost>
              <ServiceImgBox>
                <ServiceImg />
                <ServiceImg />
                <ServiceImg />
              </ServiceImgBox>
              <ServiceP>
                <ServiceSpan>23</ServiceSpan> 명이 작성했어요!
              </ServiceP>
            </HeaderServicePost>

            <EmojiWrap>
              <Emoji>😀 8</Emoji>
              <Emoji>🥶 10</Emoji>
              <Emoji>🤢 13</Emoji>

              <EmojiButton src={downImg} onClick={addEmoji} />

              <ButtonWrap>
                <img src={addEmojiImg} />
                <ButtonWrapP>추가</ButtonWrapP>
              </ButtonWrap>
              <ButtonWrap onClick={shareToggle}>
                <img src={shareImg} />
              </ButtonWrap>
            </EmojiWrap>
          </HeaderServiceBox>
        </HeaderService>
      </WhiteBack>

      <PostWrap>
        <PostDeleteButton>삭제하기</PostDeleteButton>
        <PostCard>
          <ImgBox>
            <img src={MoreCardImg} />
          </ImgBox>
        </PostCard>
        <PostCard>
          <ImgBox>
            <img src={MoreCardImg} />
          </ImgBox>
        </PostCard>
        <PostCard>
          <ImgBox>
            <img src={MoreCardImg} />
          </ImgBox>
        </PostCard>
        <PostCard>
          <ImgBox>
            <img src={MoreCardImg} />
          </ImgBox>
        </PostCard>
        <PostCard>
          <ImgBox>
            <img src={MoreCardImg} />
          </ImgBox>
        </PostCard>

        <PostCard onClick={modalToggle}>
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
      </PostWrap>

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
          <Share>URL 공유</Share>
        </ShareBox>
      ) : null}

      {/* modal */}
      {showModal ? (
        <Modal>
          <ModalInner>
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
              <Ago>2023.07.08</Ago>
            </From>
            <ModalText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse quae at cumque corporis culpa
              atque nulla corrupti voluptatibus error!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
              esse quae at cumque corporis culpa atque nulla corrupti voluptatibus error!
            </ModalText>
            <div onClick={modalToggle}>확인</div>
          </ModalInner>
        </Modal>
      ) : null}

      {/* URL이 복사되었습니다. */}
      <ShareFinish>
        <ShareImg src={shareFin} />
        <ShareP>URL이 복사 되었습니다.</ShareP>
        <ShareClose>X</ShareClose>
      </ShareFinish>
    </PostBack>
  );
}

const WhiteBack = styled.div`
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
  @media all and (max-width: 900px) {
    display: none;
  }
`;
const ServiceImgBox = styled.div`
  min-width: 7.6rem;
  height: 2.8rem;
  display: flex;
`;
const ServiceImg = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: pink;
  /* background-image */
  border-radius: 100px;
  border: 1px solid white;
  position: relative;

  &:nth-child(1) {
    left: 20px;
    background-color: greenyellow;
  }
  &:nth-child(2) {
    left: 10px;
    background-color: peru;
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
const Emoji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
const EmojiWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: relative;
`;
const EmojiButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
const ToggleAddEmoji = styled.div`
  max-width: 26.4rem;
  display: flex;
  padding: 24px;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: beige;
  position: absolute;
  top: 13rem;
  right: 25rem;
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
`;
const ButtonWrapP = styled.p`
  font-size: 1.6rem;
`;
const PostBack = styled.div`
  background-color: #ffe2ad;
  width: 100vw;
  min-height: 100vh;
`;
const DeleteButton = styled.div`
  width: 9.2rem;
  height: 3.9rem;
  line-height: 3.9rem;
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 6px;
  background: #9935ff;
  cursor: pointer;
`;
const PostDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 8rem;
  right: 2.5rem;
`;
const PostWrap = styled.div`
  max-width: 124.8rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 13rem 2.4rem;
  gap: 2.4rem;
  position: relative;
  justify-content: space-evenly;
`;
const PostCard = styled.div`
  display: flex;
  width: 38.4rem;
  height: 28rem;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 2.8rem 2.4rem;
  cursor: pointer;
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
const PostCardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
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
const Ago = styled.div`
  color: #999;
  font-size: 1.2rem;
`;
const ShareBox = styled.div`
  width: 13.8rem;
  height: 10rem;
  position: absolute;
  top: 13rem;
  right: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  /* z-index: 2; */
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
const Modal = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  margin: 0 auto;
`;
const ModalInner = styled.div`
  width: 60rem;
  height: 47.6rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 3.9rem;
`;
const ModalText = styled.div`
  margin: 2.4rem;
  width: 50rem;
  height: 24rem;
  color: #5a5a5a;
  font-size: 1.8rem;
  overflow: scroll;
`;
// share
const ShareFinish = styled.div`
  display: flex;
  max-width: 52.4rem;
  width: 100%;
  height: 6.4rem;
  padding: 1.9rem 3rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  gap: 1.6rem;
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

export default Post;
