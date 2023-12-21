import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

function Snowflake() {
  const [animationDelay, setAnimationDelay] = useState("0s");
  const [fontSize, setFontSize] = useState("10px");

  useEffect(() => {
    const delay = `${(Math.random() * 16).toFixed(2)}s`;
    const fontSize = `${Math.floor(Math.random() * 10) + 10}px`;
    setAnimationDelay(delay);
    setFontSize(fontSize);
  }, []);

  return <StyledSnowflake style={{ animationDelay, fontSize }}>*</StyledSnowflake>;
}

export function SnowTheme({ isDark }) {
  const numFlakes = 200;
  const snowflakes = Array.from({ length: numFlakes }, (_, i) => <Snowflake key={i} />);

  if (!isDark) return;

  return <StyledSnow>{snowflakes}</StyledSnow>;
}

const fallAnimation = keyframes`
  0% {
    opacity: 0;
  }
  3% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    transform: translate(0, 97vh);
    opacity: 0;
  }
`;

const StyledSnowflake = styled.p`
  display: inline-block;
  width: 0.1%;
  color: #fffafa;
  opacity: 0;
  font-size: 120px;
  margin: 0;
  padding: 0;
  animation: ${fallAnimation} 16s linear infinite;
`;

const StyledSnow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100vh;
`;
