import React, { useState } from "react";
import styled from "styled-components";
import NameInput from "../../components/commons/NameInput";
import CreateButton from "../../components/commons/CreateButton";
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

  const [isName, setIsName] = useState("");
  const handleNameChange = (name) => {
    setIsName(name);
  };
  return (
    <MessageLayout>
      <MessageBox>
        <NameInput
          value={isName}
          onChange={handleNameChange}
          placeholder="이름을 입력해 주세요."
        >
          From.
        </NameInput>
        <ProfileLayout testData={testData} />
        <RelationshipInputBox testData={testData} />
        <WriteInputBox />
        <FontSelectBox testData={testData} />
        <CreateButton disabled={!isName} />
      </MessageBox>
    </MessageLayout>
  );
};

const MessageLayout = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.7rem;

  @media (max-width: 1248px) {
    padding: 5rem 2.4rem 2.4rem;
  }
  @media (max-width: 768px) {
    padding: 5rem 2rem 2rem;
  }
`;

const MessageBox = styled.div`
  width: 72rem;
  flex-direction: column;
  gap: 5rem;
  color: var(--gray-900, #181818);
  display: flex;
  margin-bottom: 6rem;
`;

export default Message;
