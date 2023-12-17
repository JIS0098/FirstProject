import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledTitle } from '../commonStyled';
import person from '../../../assets/icon/person.svg';
import color from '../../../styles/color';
import profileImg1 from '../../../assets/img/profileImg1.png';
import profileImg2 from '../../../assets/img/profileImg2.png';

const ProfileLayout = ({ data, setData }) => {
  const [profileImage, setProfileImage] = useState();
  const profileImageList = [profileImg1, profileImg2];
  const handleProfileImageChange = item => {
    setProfileImage(item);
    setData(() => ({ ...data, profileImageURL: item }));
  };

  return (
    <div>
      <StyledTitle>프로필 이미지</StyledTitle>
      <StyledProfileImgBox>
        <StyledPreviewImgBox>
          {profileImage ? <StyledImg src={profileImage} alt="프로필 이미지" /> : <StyledNoImg src={person} />}
        </StyledPreviewImgBox>
        <StyledImgSelectBox>
          <p>프로필 이미지를 선택해주세요!</p>
          <StyledImgList>
            {profileImageList.map(item => (
              <img key={item} src={item} onClick={() => handleProfileImageChange(item)} />
            ))}
          </StyledImgList>
        </StyledImgSelectBox>
      </StyledProfileImgBox>
    </div>
  );
};

const StyledProfileImgBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;
const StyledPreviewImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  background-color: ${color.gray[300]};
`;

const StyledImg = styled.img`
  width: 8rem;
  width: 8rem;
  cursor: pointer;
`;

const StyledNoImg = styled.img``;

const StyledImgSelectBox = styled.div`
  & p {
    color: ${color.gray[500]};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
  }
`;

const StyledImgList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.4rem;

  & img {
    margin-top: 1.2rem;
    width: 5.6rem;

    @media (max-width: 768px) {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`;

export default ProfileLayout;
