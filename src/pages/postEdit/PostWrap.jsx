import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/commons/Card";
import { deleteCard, deletePage } from "../../api/testFeatData";

function PostWrap({ data, setModalClick, modalClick, pageId }) {
  const [deleteList, setDeleteList] = useState([]);
  const navigate = useNavigate();

  const clickCard = (i) => {
    setModalClick(i);
  };

  const Delete = async (deleteList) => {
    try {
      await deleteCard(deleteList);
      setDeleteList([]);
    } catch (e) {
      console.error(e);
    } finally {
      navigate(`/post/${pageId}`);
    }
  };

  const DeleteCardClick = () => {
    setDeleteList((prev) => Array.from(new Set([...prev, modalClick])));
  };

  const clickdeletePage = async () => {
    try {
      await deletePage(pageId);
    } catch (e) {
      console.log(e);
    } finally {
      navigate("/list");
    }
  };

  return (
    <PostInner>
      <BackListLink to={"/list"}>
        <BackList>리스트로 이동</BackList>
      </BackListLink>
      <PageDeleteButton onClick={clickdeletePage}>페이지 삭제</PageDeleteButton>
      <PostDeleteButton onClick={Delete}>삭제 & 나가기</PostDeleteButton>
      {data.map((item) => (
        <Card
          onClick={() => {
            clickCard(item.id);
          }}
          key={item.id}
          profileImg={item.profileImageURL}
          name={item.sender}
          description={item.content}
          tag={item.relationship}
          ago={item.createdAt}
          deleteCard={false}
          DeleteCardClick={DeleteCardClick}
        />
      ))}
    </PostInner>
  );
}
const BackListLink = styled(Link)`
  position: absolute;
  top: 8rem;
  left: 2.5rem;
  cursor: pointer;
`;
const BackList = styled.div`
  width: 11.2rem;
  height: 3.9rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  color: black;
`;

const DeleteButton = styled.div`
  width: 9.2rem;
  height: 3.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 6px;
  background: #9935ff;
  cursor: pointer;
`;

const PostDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 8rem;
  right: 2.5rem;
  @media all and (max-width: 1248px) {
    max-width: 72rem;
    width: calc(100% - 48px);
    height: 5.6rem;
    position: fixed;
    padding: 0 2.4rem;
    top: auto;
    bottom: 6rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const PageDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 8rem;
  right: 12.5rem;
  @media all and (max-width: 1248px) {
    right: 2.5rem;
  }
`;
const PostInner = styled.div`
  max-width: 124.8rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  padding: 13rem 2.4rem;
  gap: 2.4rem;
  position: relative;
  /* justify-content: space-evenly; */
  @media all and (max-width: 1248px) {
    max-width: 76.8rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 768px) {
    max-width: 50rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default PostWrap;
