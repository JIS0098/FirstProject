import React from "react";
import styled from "styled-components";

function ProfileImgs({ list }) {
  const leng = list.length - 2;
  return (
    <ProfileImgBox>
      <ProfileImg src={list[0].img} />
      <ProfileImg src={list[1].img} />
      <ProfileDiv>+ {leng}</ProfileDiv>
    </ProfileImgBox>
  );
}

const ProfileImgBox = styled.div`
  min-width: 7.6rem;
  height: 2.8rem;
  display: flex;
`;
const ProfileDiv = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #fff;
  border-radius: 100px;
  border: 1px solid white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
const ProfileImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 100px;
  border: 1px solid white;
  position: relative;

  &:nth-child(1) {
    left: 20px;
  }
  &:nth-child(2) {
    left: 10px;
  }
`;
export default ProfileImgs;
