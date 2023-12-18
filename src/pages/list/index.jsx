import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getRollingPaperAll } from "../../api";
import { Button } from "../../components/commons/Button";
import { Link, useSearchParams } from "react-router-dom";
import CardSection from "../../components/domains/list/CardSection";
import SearchBar from "components/commons/SearchBar";

function ListPage() {
  const LIST_TITLE = ["인기 롤링 페이퍼 🔥", "최근에 만든 롤링 페이퍼 ⭐️", "검색 결과 🔍"];
  const [loading, setLoading] = useState(false);
  const [sortByMost, setSortByMost] = useState([]);
  const [sortByRecent, setSortByRecent] = useState([]);
  const [searchDatas, setSearchDatas] = useState([]); // 검색한 값
  const [searchParams, setSearchParams] = useSearchParams();
  const qureyValue = searchParams.get("name");
  const [searchValue, setSearchValue] = useState(qureyValue || ""); // 입력한 값

  const getSerchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(searchValue ? { name: searchValue } : {});
  };

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
        //검색 필터
        const searchResults = qureyValue ? data.filter(({ name }) => name.includes(qureyValue.toLowerCase())) : [];
        console.log("이거는", searchResults);
        setSearchDatas(searchResults);
      })
      .finally(() => setLoading(false));
  }, [qureyValue, searchParams]);

  //스켈레톤 UI 만들어지면 작업할 곳.
  if (loading) return <div>loading...</div>;
  return (
    <>
      <SearchBar onChange={getSerchValue} value={searchValue} onSubmit={handleSubmit} />
      <Layout>
        {searchDatas.length === 0 ? (
          <StyledTest>테스트 입니다. (값 없을시 표시화면)</StyledTest>
        ) : (
          <CardSection title={LIST_TITLE[2]} recipients={searchDatas} />
        )}
        <CardSection title={LIST_TITLE[0]} recipients={sortByMost} />
        <CardSection title={LIST_TITLE[1]} recipients={sortByRecent} />
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

const StyledTest = styled.p`
  margin-top: 5rem;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  background-color: violet;
`;

// const FloatingButton = styled.button`
//   position: fixed;
//   bottom: 2rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 28rem;
//   padding: 1.4rem 2.4rem;
//   gap: 1rem;

//   color: white;
//   font-size: 1.8rem;
//   font-weight: 700;
//   text-align: center;
//   border-radius: 1.2rem;
//   background-color: ${({ theme }) => theme.button.primary.enabled};
//   cursor: pointer;

//   &:disabled {
//     background-color: ${({ theme }) => theme.button.primary.disabled};
//   }
//   &:hover {
//     background-color: ${({ theme }) => theme.button.primary.hover};
//   }
// `;
