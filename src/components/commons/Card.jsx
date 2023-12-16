import React from "react";
import styled from "styled-components";
import { setDayYMD } from "../../utils/setDayYMD";
import Delete from "../../assets/icon/deleted.svg";

function Card({ onClick, name, profileImg, description, tag, ago, deleteCard = true, DeleteCardClick }) {
  const htmlContent = { __html: description };
  const day = setDayYMD(ago);

  return (
    <CardBox
      onClick={() => {
        onClick();
      }}
    >
      <CardWrap>
        <From>
          <FromInner>
            <ImgBox>
              <StyledImg src={profileImg} />
            </ImgBox>
            <FromBox>
              <FromP>
                From. <FromSpan>{name}</FromSpan>
              </FromP>
              <FromTag>{tag}</FromTag>
            </FromBox>
          </FromInner>

          {deleteCard ? null : (
            <DeleteWrap onClick={() => DeleteCardClick()}>
              <img src={Delete} />
            </DeleteWrap>
          )}
        </From>

        <CardDescription dangerouslySetInnerHTML={htmlContent} />
        <Ago>{day}</Ago>
      </CardWrap>
    </CardBox>
  );
}

const DeleteWrap = styled.div`
  width: 4rem;
  height: 4rem;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
`;
const FromInner = styled.div`
  width: 80%;
  display: flex;
  gap: 1.5rem;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardBox = styled.div`
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
const CardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
const CardDescription = styled.div`
  width: 100%;
  height: 10.6rem;
  font-size: 1.8rem;
  font-weight: 400;
  /* display: -webkit-box; */
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
`;

const From = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 1.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid #eee;
`;
const FromBox = styled.div`
  width: 50%;
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
  cursor: pointer;
`;
const Ago = styled.div`
  color: #999;
  font-size: 1.2rem;
`;

export default Card;
