import React from "react";
import styled from "styled-components";
import ProfileImgs from "../../commons/ProfileImages";

export function CardContent({ name, messages, messageCount, $bgUrl }) {
  return (
    <Container>
      <div>
        <Name $bgUrl={$bgUrl}>To. {name}</Name>
      </div>
      <ProfileImgs list={messages} count={messageCount} $ignore />
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
  color: ${({ theme }) => theme.nameColor};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.24px;
  font-style: normal;

  ${({ $bgUrl }) =>
    $bgUrl &&
    `
    padding: 0.2rem 1rem;
    color: white;
  `}
`;

const Author = styled.span`
  color: ${({ $bgUrl, theme }) => ($bgUrl ? "white" : theme.authorColor)};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.16px;
  font-style: normal;
  /* Style */
  ${({ $bgUrl }) =>
    $bgUrl &&
    `
  padding: 0 0.5rem;
  `}
`;

const AuthorCount = styled(Author)`
  font-weight: 700;
  background: none;
`;
