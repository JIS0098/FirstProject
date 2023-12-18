
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import ProfileImgs from "../../components/commons/ProfileImages";
import downImg from "../../assets/icon/arrow_down.svg";
import addEmojiImg from "../../assets/icon/add-24.svg";
import shareImg from "../../assets/icon/share-24.svg";
import Emoji from "../../components/commons/Emoji";
import EmojiPicker from "emoji-picker-react";
import { emojiPost } from "../../api/testFeatData";
import { useLocation } from "react-router-dom";

function PostHeader({
  data,
  toggleShare,
  toggleEmoji,
  dataEmoji,
  emojiAdd,
  setEmojiUp,
  selectedPost,
  pageId,
  showShare,
  setShare,
}) {
  const [emojiPick, toggleEmojiPick] = useToggle(false);
  const [selectEmoji, setSelectEmoji] = useState(null);

  const handleEmojiSelect = (e) => {
    setSelectEmoji({ emoji: e.emoji, type: "increase" });
    // console.log(e.emoji);
  };
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
  useEffect(() => {
    if (selectEmoji !== null) {
      const emojiUpdate = async () => {
        try {
          const result = await emojiPost(selectEmoji, pageId);
          console.log(result);
          setEmojiUp(selectEmoji);
        } catch (e) {
          console.log(e);
        }
      };
      emojiUpdate();
    }
  }, [selectEmoji]);

  return (
    <PostHead>
      <HeaderService>
        <ToName>To. {selectedPost?.name || "Loding..."}</ToName>

        <HeaderServiceBox>
          <HeaderServicePost>
            <ProfileImgs list={data} count={data.length} />
            <ServiceP>
              <ServiceSpan>{data.length}</ServiceSpan> 명이 작성했어요!
            </ServiceP>
          </HeaderServicePost>

          <EmojiWrap>
            {dataEmoji.slice(0, 3).map((item) => (
              <Emoji key={item.id}>
                {item.emoji} {item.count}
              </Emoji>
            ))}

            <EmojiButton src={downImg} onClick={toggleEmoji} />
            {emojiAdd ? (
              <ToggleAddEmoji>
                {dataEmoji.slice(0, 6).map((item) => (
                  <Emoji key={item.id}>
                    {item.emoji} {item.count}
                  </Emoji>
                ))}
              </ToggleAddEmoji>
            ) : null}
            <ButtonWrap onClick={toggleEmojiPick}>
              <img src={addEmojiImg} />
              <ButtonWrapP>추가</ButtonWrapP>
            </ButtonWrap>

            {emojiPick ? (
              <EmojiPickerWrap>
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              </EmojiPickerWrap>
            ) : null}

            <Line />
            <ButtonWrap onClick={toggleShare}>
              <img src={shareImg} />
            </ButtonWrap>

            {showShare ? (
              <ShareBox>
                <Share>카카오톡 공유</Share>
                <Share onClick={() => urlShare(`${baseUrl}${location.pathname}`)}>URL 공유</Share>
              </ShareBox>
            ) : null}
          </EmojiWrap>
        </HeaderServiceBox>
      </HeaderService>
    </PostHead>
  );
}
const ToggleAddEmoji = styled.div`
  min-width: 26.4rem;
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
  right: 19rem;
  top: 6rem;
  z-index: 1;
  /* @media all and (max-width: 1248px) {
    right: 20rem;
  } */
  @media all and (max-width: 768px) {
    right: 8rem;
  }
`;

const EmojiPickerWrap = styled.div`
  position: absolute;
  top: 6rem;
  z-index: 1;
`;
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
  width: 23rem;
  @media all and (max-width: 1248px) {
    display: none;
  }
`;
const ServiceSpan = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 0.5rem;
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
const ShareBox = styled.div`
  width: 13.8rem;
  height: 10rem;
  position: absolute;
  top: 6rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;
  @media all and (max-width: 1248px) {
    right: 0rem;
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

export default PostHeader;

