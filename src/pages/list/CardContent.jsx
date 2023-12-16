import React from "react";
import styled from "styled-components";
import ProfileImgs from "../../components/commons/ProfileImages";

export function CardContent({ name, messages, messageCount, $bgUrl }) {
  return (
    <Container>
      <div>
        <Name $bgUrl={$bgUrl}>To. {name}</Name>
      </div>
      <ProfileImgs list={messages} count={messageCount} />
      <Author $bgUrl={$bgUrl}>
        <AuthorCount $bgUrl={$bgUrl}>{messageCount}</AuthorCount>명이 작성했어요!
      </Author>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Name = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ $bgUrl, theme }) => ($bgUrl ? "white" : theme.nameColor)};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.24px;
  font-style: normal;
  /* Style */
  background: rgba(0, 0, 0, 0.5);
  padding: 0.2rem 1rem;
  border-radius: 1.5rem;
`;

const Author = styled.span`
  color: ${({ $bgUrl, theme }) => ($bgUrl ? "white" : theme.authorColor)};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.16px;
  font-style: normal;
  /* Style */
  background: rgba(0, 0, 0, 0.5);
  padding: 0 0.5rem;
  border-radius: 1.5rem;
`;

const AuthorCount = styled(Author)`
  font-weight: 700;
  background: none;
`;

// const ProfileIcon = styled.div`
//   position: absolute;
//   left: ${({ $left }) => $left}rem;
//   width: 2.8rem;
//   height: 2.8rem;
//   border-radius: 50%;
//   border: 2px solid white;
// `;

// const ProfileImg = styled(ProfileIcon)`
//   background-color: gray;
// `;

// const AdditionalProfiles = styled(ProfileIcon)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
// `;

// const ProfileImages = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   width: 10rem;
//   height: 3rem;
// `;
