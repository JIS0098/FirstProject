import React from "react";
import styled from "styled-components";

function SkCard() {
  return (
    <Container>
      <CardHeader>
        <Avatar>
          <Shimmer />
        </Avatar>
        <ProfileContainer>
          <Name>
            <Shimmer />
          </Name>
          <Tag>
            <Shimmer />
          </Tag>
        </ProfileContainer>
      </CardHeader>
      <CardMsg>
        <div>
          <Msg1>
            <Shimmer />
          </Msg1>
          <Msg2>
            <Shimmer />
          </Msg2>
        </div>
        <Date>
          <Shimmer />
        </Date>
      </CardMsg>
    </Container>
  );
}

const Shimmer = styled.div`
  width: 384px;
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  animation: loading 2s infinite linear;

  @keyframes loading {
    0% {
      transform: translateX(-50%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 28px 24px;
  width: 384px;
  height: 280px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background-color: white;
`;

const CardHeader = styled.div`
  display: flex;
  gap: 1.4rem;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid #eee;
  align-items: center;
`;

const Avatar = styled.div`
  border-radius: 50%;
  background-color: #ccc;
  width: 5.5rem;
  height: 5.5rem;
  overflow: hidden;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 0.6rem;
`;

const Name = styled.div`
  background: #ccc;
  height: 2rem;
  border-radius: 8px;
  width: 80%;
  overflow: hidden;
`;

const Tag = styled.div`
  background: #ccc;
  height: 2rem;
  border-radius: 8px;
  width: 20%;
  overflow: hidden;
`;

const CardMsg = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const Msg1 = styled.h2`
  background: #ccc;
  height: 2rem;
  width: 100%;
  border-radius: 8px;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const Msg2 = styled.p`
  background: #ccc;
  height: 2rem;
  border-radius: 8px;
  width: 80%;
  overflow: hidden;
`;

const Date = styled.p`
  background: #ccc;
  height: 1.5rem;
  border-radius: 8px;
  width: 30%;
  overflow: hidden;
`;

export default SkCard;
