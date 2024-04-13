import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NameInput from "components/commons/NameInput";
import CreateButton from "components/commons/CreateButton";
import ProfileLayout from "components/domains/createMessage/components/ProfileLayout";
import RelationshipInputBox from "components/domains/createMessage/components/RelationshipInputBox";
import WriteInputBox from "components/domains/createMessage/WYSIWYG";
import { postMessage } from "api";
import { WARNING_MESSAGE } from "constants";

const CreateMessage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const defaultProfileImgUrl = "https://i.ibb.co/SJHdNkL/profile.webp";
  const [isName, setIsName] = useState("");
  const [data, setData] = useState({
    team: "2-1",
    recipientId: +id,
    sender: null,
    profileImageURL: defaultProfileImgUrl,
    relationship: "지인",
    content: "",
    font: "Pretendard",
  });
  const [isAlert, setIsAlert] = useState({
    from: false,
    text: false,
  });

  const handleCreateMessage = async () => {
    try {
      const resData = await postMessage(data);
      navigate(`/post/${resData?.recipientId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (name) => {
    if (name.length < 9) {
      setIsName(name);
      setIsAlert({ ...isAlert, from: false });
      setData({ ...data, sender: name });
    } else if (name.length === 9) {
      alert("8글자 이하로 입력해 주세요.");
      setIsAlert({ ...isAlert, from: true });
    } else {
      setIsAlert({ ...isAlert, from: true });
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = defaultProfileImgUrl;
  }, []);

  return (
    <MessageLayout>
      <MessageBox>
        <NameInput
          onChange={handleNameChange}
          placeholder={WARNING_MESSAGE.POST_MESSAGE}
        >
          From.
        </NameInput>
        <ProfileLayout data={data} setData={setData} />
        <RelationshipInputBox data={data} setData={setData} />
        <WriteInputBox
          isAlert={isAlert}
          setIsAlert={setIsAlert}
          data={data}
          setData={setData}
        />
        <CreateButtonBox>
          <CreateButton
            mobileWidth="100%"
            tabletWidth="100%"
            disabled={!isName || isAlert.from || isAlert.text}
            onClick={handleCreateMessage}
          />
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
