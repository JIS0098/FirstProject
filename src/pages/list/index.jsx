import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRollingPaperAll } from "../../api";
import { Button } from "../../components/commons/Button";
import { Link } from "react-router-dom";
import CardSection from "../../components/domains/list/CardSection";
function ListPage() {
  const LIST_TITLE = ["인기 롤링 페이퍼 🔥", "최근에 만든 롤링 페이퍼 ⭐️"];
  const [loading, setLoading] = useState(false);
  const [sortByMost, setSortByMost] = useState([]);
  const [sortByRecent, setSortByRecent] = useState([]);

  useEffect(() => {
    setLoading(true);
    getRollingPaperAll()
      .then((res) => res.results)
      .then((data) => {
        //가장 메시지가 많은 순.
        const like = [...data].sort((a, b) => b.messageCount - a.messageCount).slice(0, 10);
        setSortByMost(like);
        //가장 최근에 만들어진 순.
        const recent = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 10);
        setSortByRecent(recent);
      })
      .finally(() => setLoading(false));
  }, []);

  //스켈레톤 UI 만들어지면 작업할 곳.
  return (
    <>
      <Layout>
        <CardSection loading={loading} title={LIST_TITLE[0]} recipients={sortByMost} />
        <CardSection loading={loading} title={LIST_TITLE[1]} recipients={sortByRecent} />
      </Layout>
      <Link to="/post">
        <StyledGoToListButtonContainer>
          <Button width="28rem" tabletWidth="100%">
            나도 만들어보기
          </Button>
        </StyledGoToListButtonContainer>
      </Link>
    </>
  );
}

export default ListPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
  margin: 0 auto 4rem;
`;

const StyledGoToListButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
  min-width: 360px;
`;
