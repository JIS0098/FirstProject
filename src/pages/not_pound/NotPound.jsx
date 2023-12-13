import React from "react";
import styled from "styled-components";
import ErrorCard from "./ErrorCard";
import data from "./moc";

function NotPound() {
  const dummyData = data;

  return (
    <>
      <StyledBlur />
      <StyledPosition>
        <ErrorCard data={dummyData.ErrorCard} />
      </StyledPosition>
      <StyledBlurCard>
        <ErrorCard data={dummyData.DummyData1} />
        <ErrorCard data={dummyData.DummyData1} />
        <ErrorCard data={dummyData.DummyData1} />
        <ErrorCard data={dummyData.DummyData1} />
        <ErrorCard data={dummyData.DummyData1} />
        <ErrorCard data={dummyData.DummyData1} />
      </StyledBlurCard>
    </>
  );
}

const StyledBlur = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  backdrop-filter: blur(5px);
`;
const StyledPosition = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 3;
`;
const StyledBlurCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 384px);
  grid-template-rows: repeat(2, 280px);
  justify-content: center;
  gap: 24px;
  padding-top: 6rem;
`;

export default NotPound;
