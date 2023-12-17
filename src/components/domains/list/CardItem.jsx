import React, { useEffect, useState } from "react";
import { CardContent } from "./CardContent";
import { Reactions } from "./Reactions";
import styled from "styled-components";
import { Link } from "react-router-dom";

function CardItem({ recipient }) {
  const { name, recentMessages, messageCount, topReactions, backgroundColor, backgroundImageURL } = recipient;
  const [imageLoaded, setImageLoaded] = useState(true);

  const bgImageUrl = imageLoaded ? backgroundImageURL : null;

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImageURL;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, [backgroundImageURL]);

  return (
    <Container $bgUrl={bgImageUrl} $bgColor={backgroundColor}>
      <Wrapper $bgUrl={bgImageUrl} $bgColor={backgroundColor}>
        <Link to={`/post/${recipient.id}`}>
          <CardContent name={name} messages={recentMessages} messageCount={messageCount} $bgUrl={bgImageUrl} />
        </Link>
        <TopReactions>
          {topReactions.map((data) => (
            <Reactions key={data.id} emoji={data.emoji} count={data.count} />
          ))}
        </TopReactions>
      </Wrapper>
    </Container>
  );
}

export default CardItem;

const Container = styled.div`
  width: 27.5rem;
  height: 26rem;
  flex: 0 0 auto;
  border-radius: 1.6rem;
  padding: 3rem 2.4rem 2rem;
  background: ${(props) => (props.$bgUrl ? `url(${props.$bgUrl})` : props.theme.backgroundColor[`${props.$bgColor}`])};
  background-repeat: no-repeat;
  background-size: cover;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  min-height: 15rem;
  width: 100%;
  background: ${(props) => !props.$bgUrl && props.theme.backgroundColor[`${props.$bgColor}`]};
`;

const TopReactions = styled.div`
  display: flex;
  width: 100%;
  gap: 0.8rem;
  padding-top: 1.6rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.12);
  align-items: flex-end;
`;
