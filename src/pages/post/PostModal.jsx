import React from "react";
import styled from "styled-components";
import MoreCardImg from "../../assets/icon/plus.svg";

function PostModal({ toggleModal }) {
  //나중에 카드를 눌렀을 때 필터를 돌리던지 해서 해당 카드에 대한 정보를 넘겨받아 뿌려주자
  // id값에 따라 가져오는식..?
  return (
    <Modal>
      <ModalInner>
        <From>
          <ImgBox>
            <img src={MoreCardImg} />
          </ImgBox>
          <FromBox>
            <FromP>
              From. <FromSpan>김동훈</FromSpan>
            </FromP>
            <FromTag>가족</FromTag>
          </FromBox>
          <Ago>2023.07.08</Ago>
        </From>
        <ModalText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse quae at cumque corporis culpa atque
          nulla corrupti voluptatibus error!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse quae
          at cumque corporis culpa atque nulla corrupti voluptatibus error!
        </ModalText>
        <ModalClose onClick={toggleModal}>확인</ModalClose>
      </ModalInner>
    </Modal>
  );
}

const Modal = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;
  margin: 0 auto;
`;
const ModalInner = styled.div`
  max-width: 60rem;
  width: calc(100% - 48px);
  height: 47.6rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #eee;
`;
const FromBox = styled.div`
  width: 100%;
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
  border-radius: 100px;
  background-color: #555;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Ago = styled.div`
  color: #999;
  font-size: 1.2rem;
`;

export default PostModal;
