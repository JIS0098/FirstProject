import React from 'react';
import styled from 'styled-components';
import person from './person.svg';
import profileImg from './profileImg.png';
import WriteInput from './WriteInput';
import arrow_down from '../../assets/icon/arrow_down.svg';
import { css } from 'styled-components';

const Message = () => {
  const arr = {
    font: ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'],
    relationship: ['지인', '동료', '가족', '친구'],
    profileImages: [profileImg],
  };

  return (
    <MessageLayout>
      <MessageBox>
        <FromInputBox>
          <h2>From.</h2>
          <input placeholder="이름을 입력해 주세요." />
        </FromInputBox>
        <ProfileLayout>
          <h2>프로필 이미지</h2>
          <ProfileImgBox>
            <PreviewImg>
              <img src={person} />
            </PreviewImg>
            <ImgSelectBox>
              <p>프로필 이미지를 선택해주세요!</p>
              <ImgList>
                {arr.profileImages.map((item) => (
                  <img key={item} src={item} />
                ))}
              </ImgList>
            </ImgSelectBox>
          </ProfileImgBox>
        </ProfileLayout>
        <RelationshipInputBox>
          <h2>상대와의 관계</h2>
          <div>
            지인
            <img src={arrow_down} />
          </div>
          <ul>
            {arr.relationship.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </RelationshipInputBox>
        <WriteInputBox>
          <h2>내용을 입력해주세요</h2>
          <WriteInput />
        </WriteInputBox>
        <FontSelectBox>
          <h2>폰트 선택</h2>
          <div>
            Noto Sans
            <img src={arrow_down} />
          </div>
          <ul>
            {arr.font.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </FontSelectBox>
        <MessageCreateButton>생성하기</MessageCreateButton>
      </MessageBox>
    </MessageLayout>
  );
};

const TitleStyled = css`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.66rem;
  letter-spacing: -0.024rem;
  margin-bottom: 1.2rem;
`;

const SelectInputStyled = css`
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 32rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-300, #ccc);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
    margin-bottom: 1.2rem;
  }

  & ul {
    width: 32rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-300, #ccc);
    overflow: hidden;
  }

  & li {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
    list-style-type: none;
    padding: 1.2rem 1.6rem;

    &:hover {
      background-color: var(--gray-300, #f0f0f0);
    }
  }
`;

const MessageLayout = styled.form``;

const MessageBox = styled.div`
  color: var(--gray-900, #181818);
  width: 72rem;
  height: 94.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const FromInputBox = styled.div`
  & h2 {
    ${TitleStyled};
  }

  & input {
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-300, #ccc);
  }

  & input::-webkit-input-placeholder {
    color: var(--gray-500, #555);
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.16rem;
  }
`;

const ProfileLayout = styled.div`
  & h2 {
    ${TitleStyled};
  }
`;

const ProfileImgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

const PreviewImg = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: var(--gray-300, #ccc);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  & img {
    width: 3.2rem;
    height: 3.2rem;
    background-color: var(--gray-300, #ccc);
  }
`;

const ImgSelectBox = styled.div`
  & p {
    color: var(--gray-500, #555);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
  }
`;

const ImgList = styled.div`
  display: flex;
  gap: 0.4rem;
  & img {
    margin-top: 1.2rem;
    width: 5.6rem;
  }
`;

const RelationshipInputBox = styled.div`
  & h2 {
    ${TitleStyled};
  }
  ${SelectInputStyled}
`;

const WriteInputBox = styled.div`
  & h2 {
    ${TitleStyled};
  }
`;

const FontSelectBox = styled.div`
  & h2 {
    ${TitleStyled};
  }
  ${SelectInputStyled}
`;

const MessageCreateButton = styled.button`
  width: 72rem;
  padding: 1.4rem 2.4rem;
  color: white;
  border-radius: 1.2rem;
  background: var(--purple-600, #9935ff);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
`;

export default Message;
