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

function PostHeader({ data, toggleShare, toggleEmoji, dataEmoji, setEmojiUp, selectedPost }) {
  const [emojiPick, toggleEmojiPick] = useToggle(false);
  const [selectEmoji, setSelectEmoji] = useState(null);

  const handleEmojiSelect = (e) => {
    setSelectEmoji({ emoji: e.emoji, type: "increase" });
    // console.log(e.emoji);
  };
  useEffect(() => {
    if (selectEmoji !== null) {
      const emojiUpdate = async () => {
        try {
          const result = await emojiPost(selectEmoji);
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
          </EmojiWrap>
        </HeaderServiceBox>
      </HeaderService>
    </PostHead>
  );
}
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

export default PostHeader;
