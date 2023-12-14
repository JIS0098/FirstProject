import React from "react";
import styled from "styled-components";

function ProfileImgs({ list, count }) {
  const leng = count - 3;
  const isVisable = count > 3;
  return (
    <ProfileBox>
      <ProfileImg url={list[0]?.profileImageURL} />
      <ProfileImg url={list[1]?.profileImageURL} />
      <ProfileImg url={list[2]?.profileImageURL} />
      <ProfileDiv $isVisible={isVisable}>+ {leng}</ProfileDiv>
    </ProfileBox>
  );
}

const ProfileBox = styled.div`
  position: relative;
  display: flex;
  min-width: 7.6rem;
  height: 2.8rem;
`;

const Profile = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid white;
  position: absolute;
`;

const ProfileImg = styled(Profile)`
  background: ${(props) => (props.url ? `url(${props.url})` : "gray")};
  background-size: cover;
  background-position: center;

  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(2) {
    left: 20px;
  }
  &:nth-child(3) {
    left: 40px;
  }
`;

const ProfileDiv = styled(Profile)`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  left: 60px;
`;

export default ProfileImgs;
