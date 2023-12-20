import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import MoreCardImg from "../../assets/icon/plus.svg";
import Card from "../../components/commons/Card";
import { motion } from "framer-motion";
import setting from "../../assets/icon/setting.svg";
import SkPostCard from "components/commons/SkPostCard";

function Loading() {
  const renderItems = Array.from({ length: 5 }).map((_, index) => <SkPostCard key={index} />);
  return <>{renderItems}</>;
}

function PostWrap({ data, toggleModal, setModalClick, loading }) {
  const clickCard = (i) => {
    setModalClick(i);
  };
  const params = useParams();

  return (
    <PostInner>
      <BackListLink to={"/list"}>
        <BackList animate={{ x: [0, 10, 0] }} transition={{ ease: "easeInOut", repeat: Infinity, duration: 1.5 }}>
          ← 뒤로가기
        </BackList>
      </BackListLink>
      <StyledLink to={`/post/${params.id}/edit`}>
        <EditDeleteButton>
          <SettingIcon src={setting} alt="setting" />
        </EditDeleteButton>
      </StyledLink>
      <PostCard>
        <Link to={`/post/${params.id}/message`}>
          <ImgBox>
            <img src={MoreCardImg} alt="MoreCardImg" />
          </ImgBox>
        </Link>
      </PostCard>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((item) => (
            <Card
              onClick={() => {
                clickCard(item.id);
                toggleModal();
              }}
              key={item.id}
              profileImg={item.profileImageURL}
              name={item.sender}
              description={item.content}
              tag={item.relationship}
              ago={item.createdAt}
              deleteCard={true}
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
  left: 2.5rem;
  cursor: pointer;
`;
const BackList = styled(motion.button)`
  width: 11.2rem;
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
const StyledLink = styled(Link)`
  position: absolute;
  top: 8rem;
  right: 2.5rem;
  font-size: 1.6rem;
`;

const PostCard = styled.div`
  width: 38.4rem;
  height: 28rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.card.backgroundColor};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 2.8rem 2.4rem;
  @media all and (max-width: 1248px) {
    width: 100%;
    max-width: 50rem;
  }
  @media all and (max-width: 768px) {
    width: 100%;
  }
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
  background: #9935ff;
  cursor: pointer;
`;
const EditDeleteButton = styled(DeleteButton)`
  display: flex;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  color: black;

  &:hover {
    background: #ccc;
  }
  //   background: ${({ $thema }) => ($thema ? "#000" : "#fff")};
  //   color: ${({ $thema }) => (!$thema ? "#000" : "#fff")};
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

const SettingIcon = styled.img`
  height: 3rem;
`;

// 공통된거

const ImgBox = styled.button`
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
