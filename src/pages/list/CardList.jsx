import React from "react";
import styled from "styled-components";
import { CardContent } from "./CardContent";
import { Reactions } from "./Reactions";

export function CardList({ recipients }) {
  return (
    <Container>
      {recipients.map(
        (
          {
            name,
            recentMessages,
            messageCount,
            topReactions,
            backgroundColor,
            backgroundImageURL,
          },
          index
        ) => {
          return (
            //실제 데이터 들어오면 id로 변경 예정
            <Item
              key={index}
              $bgUrl={backgroundImageURL}
              $bgColor={backgroundColor}
            >
              <Layout $bgUrl={backgroundImageURL} $bgColor={backgroundColor}>
                <CardContent
                  name={name}
                  messages={recentMessages}
                  messageCount={messageCount}
                  $bgUrl={backgroundImageURL}
                />
                <TopReactions>
                  {topReactions.map((data) => {
                    return (
                      <Reactions
                        key={data.id}
                        emoji={data.emoji}
                        count={data.count}
                      />
                    );
                  })}
                </TopReactions>
              </Layout>
            </Item>
          );
        }
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 116rem;
  height: 26rem;
  align-items: start;
  overflow: hidden;
`;

const Item = styled.div`
  width: 27.5rem;
  height: 26rem;
  flex: 0 0 auto;
  border-radius: 1.6rem;
  padding: 3rem 2.4rem 2rem;
  background: ${(props) =>
    props.$bgUrl ? `url(${props.$bgUrl})` : props.$bgColor};
  background-repeat: no-repeat;
  background-size: cover;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.2rem 1.2rem 0px rgba(0, 0, 0, 0.08);
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: ${(props) => !props.$bgUrl && props.$bgColor};
  gap: 4.3rem;
`;

const TopReactions = styled.div`
  display: flex;
  width: 100%;
  gap: 0.8rem;
  padding-top: 1.6rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.12);
  align-items: flex-end;
`;
