import React from "react";
import styled from "styled-components";

export function CardContent({ name, messages, messageCount, $bgUrl }) {
  return (
    <Container>
      <Name $bgUrl={$bgUrl}>To. {name}</Name>
      <ProfileImages>
        {messages.slice(0, 3).map((_, index) => (
          <ProfileImg key={index} $left={index * 1.4} />
        ))}
        {messageCount > 3 && (
          <AdditionalProfiles $left={4.2}>
            {`+${messageCount - 3}`}
          </AdditionalProfiles>
        )}
      </ProfileImages>
      <Author $bgUrl={$bgUrl}>
        <AuthorCount $bgUrl={$bgUrl}>{messageCount}</AuthorCount>명이
        작성했어요!
      </Author>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Name = styled.div`
  overflow: hidden;
  color: ${({ $bgUrl, theme }) => ($bgUrl ? "white" : theme.nameColor)};
  text-overflow: ellipsis;

  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.24px;
`;

const Author = styled.span`
  color: ${({ $bgUrl, theme }) => ($bgUrl ? "white" : theme.authorColor)};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.16px;
`;

const AuthorCount = styled(Author)`
  color: ${({ $bgUrl, theme }) => ($bgUrl ? "white" : theme.authorColor)};
  font-weight: 700;
`;

const ProfileIcon = styled.div`
  position: absolute;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  border: 2px solid white;
  left: ${({ $left }) => $left}rem;
`;

const ProfileImg = styled(ProfileIcon)`
  background-color: gray;
`;

const AdditionalProfiles = styled(ProfileIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ProfileImages = styled.div`
  width: 10rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
`;
