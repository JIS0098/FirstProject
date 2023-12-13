import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ErrorCard({ data }) {
  return (
    <StyledErrorCard>
      <StyledCardHeader>
        <StyledAvatar></StyledAvatar>
        <StyledOrderContainer>
          <StyledOrderFrom>
            From. <StyledOrderName>{data.name}</StyledOrderName>
          </StyledOrderFrom>
          <StyledOrderTagContainer>
            <StyledOrderTag>{data.tag}</StyledOrderTag>
          </StyledOrderTagContainer>
        </StyledOrderContainer>
      </StyledCardHeader>
      <StyledErrorMsg>{data.mainText}</StyledErrorMsg>
      <StyledErrorSideMsg>{data.sideText}</StyledErrorSideMsg>
      <Link to="/">{data.button && <StyledGoToListButton>{data.button}</StyledGoToListButton>}</Link>
    </StyledErrorCard>
  );
}

const StyledErrorCard = styled.div`
  width: 384px;
  height: 280px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  padding: 28px 24px;
  margin-bottom: 2rem;
  background-color: white;
  position: relative;
`;

const StyledCardHeader = styled.div`
  display: flex;
  gap: 1.4rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

const StyledAvatar = styled.div`
  border-radius: 50%;
  background-color: #ccc;
  width: 5.5rem;
  height: 5.5rem;
`;

const StyledOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const StyledOrderFrom = styled.span`
  font-size: 2rem;
`;

const StyledOrderName = styled(StyledOrderFrom)`
  font-weight: 700;
`;

const StyledOrderTagContainer = styled.div`
  display: flex;
`;

const StyledOrderTag = styled.div`
  border-radius: 4px;
  background: #f8f0ff;
  color: #9935ff;
  padding: 0 8px;
  font-size: 14px;
`;

const StyledErrorMsg = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const StyledErrorSideMsg = styled.p`
  font-size: 14px;
  font-family: sans-serif;
  line-height: 24px;
  margin-bottom: 1.5rem;
`;

const StyledGoToListButton = styled.button`
  padding: 1.4rem 2.4rem;
  border-radius: 12px;
  background: #9935ff;
  color: white;
  font-size: 1.2rem;
  position: absolute;
  bottom: 24px;
  right: 28px;
  cursor: pointer;

  &:hover {
    background: #861dee;
  }
`;

export default ErrorCard;
