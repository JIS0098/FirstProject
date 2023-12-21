import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../commons/Card";
import { deletePage, deleteCardFromPage } from "api";
import SkPostCard from "components/commons/SkPostCard";
import { AnimatePresence, motion } from "framer-motion";

function Loading() {
  const renderItems = Array.from({ length: 6 }).map((_, index) => <SkPostCard key={index} />);
  return <>{renderItems}</>;
}

function PostWrap({ data, pageId, loading, thema }) {
  const [deleteList, setDeleteList] = useState([]);
  const navigate = useNavigate();

  const Delete = async () => {
    try {
      await Promise.all(
        deleteList.map(async (data) => {
          await deleteCardFromPage(data.id);
        })
      );
      setDeleteList([]);
    } catch (e) {
      console.error(e);
    } finally {
      window.location.reload();
    }
  };

  const deleteCardClick = (id) => {
    const isNotDelete = deleteList.some((item) => item.id === id);

    if (isNotDelete) {
      setDeleteList((prev) => prev.filter((item) => item.id !== id));
    } else {
      setDeleteList((prev) => [
        ...prev,
        {
          id: id,
        },
      ]);
    }
  };

  const clickdeletePage = async () => {
    const deleteconfirm = confirm("페이지를 삭제하시겠습니까?");
    if (deleteconfirm) {
      try {
        await deletePage(pageId);
      } catch (e) {
        console.log(e);
      } finally {
        navigate("/list");
      }
    }
  };

  return (
    <PostInner>
      <BackListLink to={`/post/${pageId}`}>
        <BackList animate={{ x: [0, 10, 0] }} transition={{ ease: "easeInOut", repeat: Infinity, duration: 1.5 }}>
          ← 뒤로가기
        </BackList>
      </BackListLink>
      <PageDeleteButton onClick={clickdeletePage}>포스트 삭제</PageDeleteButton>
      <AnimatePresence>
        {deleteList.length > 0 ? (
          <PostDeleteButton
            onClick={Delete}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            선택한 항목 삭제
          </PostDeleteButton>
        ) : null}
      </AnimatePresence>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((item) => (
            <Card
              onClick={() => {}}
              thema={thema}
              key={item.id}
              id={item.id}
              profileImg={item.profileImageURL}
              name={item.sender}
              description={item.content}
              tag={item.relationship}
              ago={item.createdAt}
              deleteCard={false}
              deleteCardClick={deleteCardClick}
            />
          ))}
        </>
      )}
    </PostInner>
  );
}
const BackListLink = styled(Link)`
  position: absolute;
  top: 8rem;
  left: 2rem;
  cursor: pointer;
`;
const BackList = styled(motion.button)`
  width: 12.2rem;
  height: 3.9rem;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: white;
  cursor: pointer;
  //   border-radius: 6px;
  //   border: 1px solid #ccc;
  //   background: ${({ $thema }) => ($thema ? "#000" : "#fff")};
  //   color: ${({ $thema }) => (!$thema ? "#000" : "#fff")};
`;

const DeleteButton = styled.button`
  height: 3.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  border-radius: 6px;
  background: #fa0f0e;
  cursor: pointer;

  &:hover {
    background-color: #c61010;
  }
`;

const PostDeleteButton = styled(motion.button)`
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  border-radius: 1.2rem;
  font-size: 1.6rem;
  color: white;
  background-color: #9935ff;
  cursor: pointer;
  z-index: 99;

  &:hover {
    background-color: #861dee;
  }
`;
const PageDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: 8rem;
  right: 2.5rem;
  z-index: 1;
`;
const PostInner = styled.div`
  width: 124.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  padding: 13rem 2.4rem;
  gap: 2.4rem;
  position: relative;
  /* justify-content: space-evenly; */
  @media all and (max-width: 1248px) {
    max-width: 108rem;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and (max-width: 768px) {
    max-width: 50rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default PostWrap;
