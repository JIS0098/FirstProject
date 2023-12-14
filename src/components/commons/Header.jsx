import React from "react";
import styled from "styled-components";
import Icon from "../../assets/img/Icon.png";
import WhiteDarkModeBtn from "./WhiteDarkModeBtn";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isPage = location.pathname === "/";
  console.log(isPage);

  return (
    <StyledHeaderContainer>
      <StyledNavContainer>
        <Link to="/">
          <StyledLogoContainer>
            <StyledLogoImg src={Icon} alt="Logo_Img" />
            <StyledLogoTitle>Rolling</StyledLogoTitle>
          </StyledLogoContainer>
        </Link>
        <StyledBtnContainer>
          <WhiteDarkModeBtn />
          {isPage && (
            <Link to="/post">
              <StyledAddButton>롤링 페이퍼 만들기</StyledAddButton>
            </Link>
          )}
        </StyledBtnContainer>
      </StyledNavContainer>
    </StyledHeaderContainer>
  );
}
const StyledHeaderContainer = styled.nav`
  border-bottom: 1px solid #eeeeee;
`;
const StyledNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 0;
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (max-width: 1248px) {
    padding: 1.1rem 2.4rem;
    min-width: 360px;
  }
`;
const StyledLogoContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  cursor: pointer;
`;
const StyledLogoImg = styled.img`
  height: 2.7rem;
`;
const StyledLogoTitle = styled.p`
  color: #4a494f;
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 700;
`;
const StyledBtnContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const StyledAddButton = styled.button`
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  color: #181818;
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background: #f6f6f6;
  }
`;

export default Header;
