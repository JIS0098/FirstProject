import React from "react";
import styled from "styled-components";

function ProfileImgs() {
  return (
    <ProfileImgBox>
      <ProfileImg />
      <ProfileImg />
      <ProfileImg />
    </ProfileImgBox>
  );
}

const ProfileImgBox = styled.div`
  min-width: 7.6rem;
  height: 2.8rem;
  display: flex;
`;
const ProfileImg = styled.div`
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
export default ProfileImgs;
