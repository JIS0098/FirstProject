import React, { useState } from "react";
import styled from "styled-components";
import FromInputBox from "./FromInputBox";
import ProfileLayout from "./ProfileLayout";
import RelationshipInputBox from "./RelationshipInputBox";
import WriteInputBox from "./WriteInputBox";
import FontSelectBox from "./FontSelectBox";
import profileImg from "../../assets/img/profileImg.png";

// import WriteInput from './WriteInput';

const Message = () => {
  const [testData] = useState({
    font: ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"],
    relationship: ["지인", "동료", "가족", "친구"],
    profileImages: [
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
    ],
  });
  return (
    <MessageLayout>
      <MessageBox>
        <FromInputBox />
        <ProfileLayout testData={testData} />
        <RelationshipInputBox testData={testData} />
        <WriteInputBox />
        <FontSelectBox testData={testData} />
        {/* <MessageCreateButton>생성하기</MessageCreateButton> */}
      </MessageBox>
    </MessageLayout>
  );
};

const MessageLayout = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.7rem 0rem 6rem;

  @media (max-width: 1248px) {
    padding: 5rem 2.4rem 2.4rem;
  }
  @media (max-width: 768px) {
    padding: 5rem 2rem 2rem;
  }
`;

const MessageBox = styled.div`
  width: 72rem;
  height: 94.4rem;
  flex-direction: column;
  gap: 5rem;
  color: var(--gray-900, #181818);
  display: flex;
`;

export default Message;
