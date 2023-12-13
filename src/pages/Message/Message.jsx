import React, { useState } from "react";
import styled from "styled-components";
import FromInputBox from "./FromInputBox";
import ProfileLayout from "./ProfileLayout";
import RelationshipInputBox from "./RelationshipInputBox";
import WriteInputBox from "./WriteInputBox";
import FontSelectBox from "./FontSelectBox";
import profileImg from "../../assets/img/profileImg.png";

// import WriteInput from './WriteInput';

const Message = () => {
  const [testData] = useState({
    font: ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"],
    relationship: ["지인", "동료", "가족", "친구"],
    profileImages: [
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
      profileImg,
    ],
  });
  return (
    <MessageLayout>
      <MessageBox>
        <FromInputBox />
        <ProfileLayout testData={testData} />
        <RelationshipInputBox testData={testData} />
        <WriteInputBox />
        <FontSelectBox testData={testData} />
        {/* <MessageCreateButton>생성하기</MessageCreateButton> */}
      </MessageBox>
    </MessageLayout>
  );
};

// const TitleStyled = css`
//   margin-bottom: 1.2rem;
//   font-size: 2.4rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 3.66rem;
//   letter-spacing: -0.024rem;
// `;

// const SelectInputStyled = () => css`
//   & div {
//     width: 32rem;
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 1.2rem;
//     padding: 1.2rem 1.6rem;
//     border-radius: 0.8rem;
//     border: 0.1rem solid var(--gray-300, #ccc);
//     font-size: 1.6rem;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 2.6rem;
//     letter-spacing: -0.016rem;
//   }

//   & ul {
//     width: 32rem;
//     position: absolute;
//     border-radius: 0.8rem;
//     border: 0.1rem solid var(--gray-300, #ccc);
//     overflow: hidden;
//   }

//   & li {
//     padding: 1.2rem 1.6rem;
//     font-size: 1.6rem;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 2.6rem;
//     letter-spacing: -0.016rem;
//     list-style-type: none;
//     background-color: white;
//     &:hover {
//       background-color: var(--gray-300, #f0f0f0);
//     }
//   }
// `;

const MessageLayout = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.7rem 0rem 6rem;

  @media (max-width: 1248px) {
    padding: 5rem 2.4rem 2.4rem;
  }
  @media (max-width: 768px) {
    padding: 5rem 2rem 2rem;
  }
`;

const MessageBox = styled.div`
  width: 72rem;
  height: 94.4rem;
  flex-direction: column;
  gap: 5rem;
  color: var(--gray-900, #181818);
  display: flex;
`;

// const FromInputBox = styled.div`
//   & h2 {
//     ${TitleStyled};
//   }

//   & input {
//     width: 100%;
//     padding: 1.2rem 1.6rem;
//     border-radius: 0.8rem;
//     border: 0.1rem solid var(--gray-300, #ccc);
//   }

//   & input::-webkit-input-placeholder {
//     color: var(--gray-500, #555);
//     font-style: normal;
//     font-weight: 400;
//     letter-spacing: -0.16rem;
//   }
// `;

// const ProfileLayout = styled.div`
//   & h2 {
//     ${TitleStyled};
//   }
// `;

// const ProfileImgBox = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 3.2rem;
// `;

// const PreviewImg = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 50%;

//   & div {
//     width: 8rem;
//     height: 8rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: var(--gray-300, #ccc);
//     border-radius: 50%;
//   }

//   & img {
//     width: 3.2rem;
//     height: 3.2rem;
//     @media (max-width: 360px) {
//       font-size: 1.2rem;
//     }
//   }
// `;

// const ImgSelectBox = styled.div`
//   & p {
//     color: var(--gray-500, #555);
//     font-size: 1.6rem;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 2.6rem;
//     letter-spacing: -0.016rem;

//     @media (max-width: 360px) {
//       font-size: 1.3rem;
//     }
//   }
// `;

// const ImgList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0 0.4rem;

//   & img {
//     margin-top: 1.2rem;
//     width: 5.6rem;
//     pointer-events: none;

//     @media (max-width: 360px) {
//       width: 4rem;
//       height: 4rem;
//     }
//   }
// `;

// // const RelationshipInputBox = styled.div`;
//   & h2 {
//     ${TitleStyled};
//   }
//   ${SelectInputStyled}
// `;

// const WriteInputBox = styled.div`
//   & h2 {
//     ${TitleStyled};
//   }

//   & div {
//     width: 100%;
//     height: 26rem;
//     border: 0.1rem solid;
//     border-radius: 8px;
//     border: 1px solid var(--gray-300, #ccc);
//   }
// `;

// const FontSelectBox = styled.div`
//   & h2 {
//     ${TitleStyled};
//   }
//   ${SelectInputStyled}
// `;

// const MessageCreateButton = styled.button`
//   width: 72rem;
//   padding: 1.4rem 2.4rem;
//   color: white;
//   border-radius: 1.2rem;
//   background: var(--purple-600, #9935ff);
//   font-size: 1.8rem;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 2.8rem;
//   letter-spacing: -0.018rem;
// `;

export default Message;
