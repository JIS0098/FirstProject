import React from "react";
import styled from "styled-components";
import { setDayYMD } from "../../utils/setDayYMD";
import { motion } from "framer-motion";
import nullImg from "../../assets/icon/person.svg";

function PostModal({ toggleModal, modalFind }) {
  const day = setDayYMD(modalFind.createdAt);
  const progileImg = modalFind.profileImageURL ? modalFind.profileImageURL : nullImg;

  return (
    <Modal>
      <ModalInner
        initial={{ opacity: 0, x: 100, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: -100, scale: 0.8 }}
      >
        <From>
          <FromInner>
            <ImgBox>
              <ModalImg src={progileImg} alt="profileImage" />
            </ImgBox>
            <FromBox>
              <FromP>
                From. <FromSpan>{modalFind.sender}</FromSpan>
              </FromP>
              <FromTag>{modalFind.relationship}</FromTag>
            </FromBox>
          </FromInner>
          <Ago>{day}</Ago>
        </From>
        <ModalText>{modalFind.content}</ModalText>
        <ModalClose onClick={toggleModal}>확인</ModalClose>
      </ModalInner>
    </Modal>
  );
}

const FromInner = styled.div`
  width: 80%;
  display: flex;
  gap: 1.5rem;
`;
const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  margin: 0 auto;
`;
const ModalInner = styled(motion.div)`
  max-width: 60rem;
  width: calc(100% - 48px);
  height: 47.6rem;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 3.9rem;
`;
const ModalText = styled.div`
  margin: 2.4rem;
  max-width: 50rem;
  height: 24rem;
  color: #5a5a5a;
  font-size: 1.8rem;
  overflow: auto;
`;
const ModalClose = styled.div`
  width: 12rem;
  height: 4rem;
  padding: 0.7rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  font-size: 1.6rem;
  border-radius: 6px;
  background: var(--purple-600, #9935ff);
  cursor: pointer;
`;

// 공통된거
const From = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1.5rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #eee;
`;
const FromBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
const FromTag = styled.div`
  width: 4.1rem;
  height: 2rem;
  display: flex;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--green-100, #e4fbdc);
  color: var(--green-500, #2ba600);
  font-size: 1.4rem;
`;
const FromP = styled.p`
  font-size: 2rem;
`;
const FromSpan = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;
const ImgBox = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  background-color: #555;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Ago = styled.div`
  color: #999;
  font-size: 1.2rem;
`;

export default PostModal;
