import React from "react";
import styled from "styled-components";

function SkImageCard() {
  return (
    <Ccontainer>
      <Container>
        <Shimmer />
      </Container>
      <Container>
        <Shimmer />
      </Container>
      <Container>
        <Shimmer />
      </Container>
      <Container>
        <Shimmer />
      </Container>
    </Ccontainer>
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

const Ccontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: hidden;
`;

const Container = styled.div`
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  background: #ccc;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }
`;

export default SkImageCard;
