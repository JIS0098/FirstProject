import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import CardSection from "./CardSection";
function ListPage() {
  const dumyRecipients = Array.from({ length: 8 }, () => ({
    id: 1,
    name: "SuWon",
    backgroundColor: "beige",
    backgroundImageURL:
      // "https://i.namu.wiki/i/mDxs3a-tvkEP_qP8OB70xjLhEwhsCJwsj1s3wjx6p-v0s3upa6mHPUoKW-ppCZvnJ8zn4AoGp1o1YOlbTeRbWg.webp",
      "",
    messageCount: 11,
    recentMessages: [
      {
        id: 2785,
        recipientId: 831,
        sender: "44",
        profileImageURL: "",
        relationship: "지인",
        content: "<p>44</p>",
        font: "Noto Sans",
        createdAt: "2023-12-11T07:33:18.062311Z",
      },
      {
        id: 2784,
        recipientId: 831,
        sender: "33",
        profileImageURL: "",
        relationship: "지인",
        content: "<p>33</p>",
        font: "Noto Sans",
        createdAt: "2023-12-11T07:33:11.216796Z",
      },
      {
        id: 2783,
        recipientId: 831,
        sender: "22",
        profileImageURL: "",
        relationship: "지인",
        content: "<p>22</p>",
        font: "Noto Sans",
        createdAt: "2023-12-11T07:33:03.601610Z",
      },
    ],
    reactionCount: 11,
    topReactions: [
      {
        id: 928,
        emoji: "😀",
        count: 4,
      },
      {
        id: 1030,
        emoji: "😅",
        count: 2,
      },
      {
        id: 799,
        emoji: "😆",
        count: 1,
      },
    ],
  }));
  const navigation = useNavigate();
  const LIST_TITLE = ["인기 롤링 페이퍼 🔥", "최근에 만든 롤링 페이퍼 ⭐️"];
  return (
    <Layout>
      <CardSection title={LIST_TITLE[0]} recipients={dumyRecipients} />
      <CardSection title={LIST_TITLE[1]} recipients={dumyRecipients} />
      <Footer>
        <CreateButton onClick={() => navigation("/post")}>
          나도 만들어보기
        </CreateButton>
      </Footer>
    </Layout>
  );
}

export default ListPage;

const Layout = styled.div`
  margin: 0px auto 13.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
  max-width: 116rem;
  margin-top: 4rem;
  padding: 2.4rem 0.8rem;
  justify-content: center;
  align-items: center;
`;

const CreateButton = styled.button`
  position: fixed;
  bottom: 10rem;
  display: flex;
  width: 28rem;
  padding: 1.4rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;

  border-radius: 1.2rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.button.primary.enabled};

  &:disabled {
    background-color: ${({ theme }) => theme.button.primary.disabled};
  }
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;
