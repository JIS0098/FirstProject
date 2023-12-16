import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useParams } from "react-router-dom";
import Emoji from "../../components/commons/Emoji";
import Card from "../../components/commons/Card";
import { deleteCard, deletePage } from "../../api/testFeatData";

function PostWrap({ data, showShare, emojiAdd, setShare, toggleModal, dataEmoji, setModalClick, modalClick }) {
  const [deleteList, setDeleteList] = useState([]);
  const location = useLocation();
  const baseUrl = window.location.host;
  const urlShare = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShare(true);
      setTimeout(() => {
        setShare(false);
      }, 4000);
    } catch (err) {
      console.log(err);
    }
  };

  const clickCard = (i) => {
    setModalClick(i);
  };

  const Delete = async () => {
    try {
      await deleteCard(deleteList);
      setDeleteList([]);
    } catch (e) {
      console.error(e);
    }
  };

  const DeleteCardClick = () => {
    setDeleteList((prev) => Array.from(new Set([...prev, modalClick])));
  };

  console.log(deleteList);

  return (
    <PostInner>
      <PageDeleteButton onClick={deletePage}>페이지 삭제</PageDeleteButton>
      <PostDeleteButton onClick={Delete}>삭제하기</PostDeleteButton>
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

      {emojiAdd ? (
        <ToggleAddEmoji>
          {dataEmoji.slice(0, 6).map((item) => (
            <Emoji key={item.id}>
              {item.emoji} {item.count}
            </Emoji>
          ))}
        </ToggleAddEmoji>
      ) : null}
      {showShare ? (
        <ShareBox>
          <Share>카카오톡 공유</Share>
          <Share onClick={() => urlShare(`${baseUrl}${location.pathname}`)}>URL 공유</Share>
        </ShareBox>
      ) : null}
    </PostInner>
  );
}

const PostCard = styled.div`
  width: 38.4rem;
  height: 28rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 2.8rem 2.4rem;
  cursor: pointer;
  @media all and (max-width: 1248px) {
    width: 100%;
    max-width: 50rem;
  }
  @media all and (max-width: 768px) {
    width: 100%;
  }
`;
const ToggleAddEmoji = styled.div`
  max-width: 26.4rem;
  display: flex;
  padding: 24px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: beige;
  position: absolute;
  top: 0rem;
  right: 23rem;
  @media all and (max-width: 1248px) {
    right: 20rem;
  }
  @media all and (max-width: 768px) {
    right: auto;
    left: 1rem;
  }
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
const EditDeleteButton = styled(DeleteButton)`
  display: none;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  color: black;
  @media all and (max-width: 1248px) {
    display: flex;
    position: absolute;
    top: 8rem;
    right: 2.5rem;
  }
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

const ShareBox = styled.div`
  width: 13.8rem;
  height: 10rem;
  position: absolute;
  top: 0;
  right: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  @media all and (max-width: 1248px) {
    right: 2rem;
  }
  @media all and (max-width: 768px) {
    right: auto;
    left: 22rem;
  }
`;
const Share = styled.div`
  width: 100%;
  text-align: center;
  padding: 12px 16px;
  color: #181818;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
`;

// 공통된거

const ImgBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 100px;
  background-color: #555;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default PostWrap;
