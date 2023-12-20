import React from "react";
import styled from "styled-components";

function SkListCard() {
  return (
    <Box>
      <Container>
        <TextContainer>
          <Title>
            <Shimmer />
          </Title>
          <Profile>
            <Shimmer />
          </Profile>
          <SideText>
            <Shimmer />
          </SideText>
        </TextContainer>
        <ImogeContaioner>
          <Imoge>
            <Shimmer />
          </Imoge>
          <Imoge>
            <Shimmer />
          </Imoge>
          <Imoge>
            <Shimmer />
          </Imoge>
        </ImogeContaioner>
      </Container>
    </Box>
  );
}

const Shimmer = styled.div`
  height: 100%;
  background-color: #e0e0e0;
  box-shadow: 0 0 30px 30px #e0e0e0;
  animation: loading 3s infinite ease-in-out;
  position: relative;
  overflow: hidden;

  @keyframes loading {
    0% {
      transform: translateX(-150%);
    }

    100% {
      transform: translateX(150%);
    }
  }
`;

const Box = styled.div`
  width: 27.5rem;
  height: 26rem;
  flex: 0 0 auto;
  border-radius: 1.6rem;
  padding: 3rem 2.4rem 2rem;
  background: white;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0px rgba(0, 0, 0, 0.08);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 15rem;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Title = styled.div`
  width: 80%;
  height: 2.4rem;
  border-radius: 8px;
  background-color: #ccc;
  overflow: hidden;
`;
const Profile = styled.div`
  width: 40%;
  height: 2.4rem;
  border-radius: 8px;
  background-color: #ccc;
  overflow: hidden;
`;
const SideText = styled.div`
  width: 100%;
  height: 2.4rem;
  border-radius: 8px;
  background-color: #ccc;
  overflow: hidden;
`;
const ImogeContaioner = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: flex-end;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.12);
  padding-top: 1.6rem;
`;
const Imoge = styled.div`
  border-radius: 3.2rem;
  background: #ccc;
  width: 6.5rem;
  height: 3.6rem;
  overflow: hidden;
`;
export default SkListCard;
