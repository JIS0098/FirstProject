import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NameInput from "../../components/commons/NameInput";
import CreateButton from "../../components/commons/CreateButton";
import ProfileLayout from "./ProfileLayout";
import RelationshipInputBox from "./RelationshipInputBox";
import WriteInputBox from "./WYSIWYG";
import profileImg1 from "../../assets/img/profileImg1.png";
import profileImg2 from "../../assets/img/profileImg2.png";
import { Link } from "react-router-dom";

// import WriteInput from './WriteInput';

const CreateMessage = () => {
  const [testData, setTestData] = useState({
    relationship: ["지인", "동료", "가족", "친구"],
    profileImages: [profileImg1, profileImg2],
  });

  const [isName, setIsName] = useState("");

  const handleNameChange = (name) => {
    setIsName(name);
  };

  return (
    <MessageLayout>
      <MessageBox>
        <NameInput value={isName} onChange={handleNameChange} placeholder="이름을 입력해 주세요.">
          From.
        </NameInput>
        <ProfileLayout testData={testData} />
        <RelationshipInputBox testData={testData} />
        <WriteInputBox />
        <CreateButtonBox>
          <Link to="/post/2">
            <CreateButton mobileWidth="100%" tabletWidth="100%" disabled={!isName} />
          </Link>
        </CreateButtonBox>
      </MessageBox>
    </MessageLayout>
  );
};

const MessageLayout = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4.7rem;
`;

const MessageBox = styled.div`
  width: 72rem;
  flex-direction: column;
  gap: 5rem;
  color: var(--gray-900, #181818);
  display: flex;
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    max-width: 32rem;
  }
`;

const CreateButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default CreateMessage;
