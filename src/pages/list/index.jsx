import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import CardSection from "./CardSection";
import { dumyRecipients } from "../../utils/dummyData";
function ListPage() {
  const navigation = useNavigate();
  const LIST_TITLE = ["인기 롤링 페이퍼 🔥", "최근에 만든 롤링 페이퍼 ⭐️"];
  return (
    <Layout>
      <CardSection title={LIST_TITLE[0]} recipients={dumyRecipients} />
      <CardSection title={LIST_TITLE[1]} recipients={dumyRecipients} />
      <FloatingButton onClick={() => navigation("/post")}>나도 만들어보기</FloatingButton>
    </Layout>
  );
}

export default ListPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
  margin: 0px auto 10rem;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
  padding: 1.4rem 2.4rem;
  gap: 1rem;

  color: white;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.button.primary.enabled};
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.button.primary.disabled};
  }
  &:hover {
    background-color: ${({ theme }) => theme.button.primary.hover};
  }
`;
