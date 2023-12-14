import { css } from "styled-components";

export const TitleStyled = css`
  margin-bottom: 1.2rem;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.66rem;
  letter-spacing: -0.024rem;
`;

export const SelectInputStyled = () => css`
  & div {
    width: 32rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-300, #ccc);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
  }

  & ul {
    width: 32rem;
    position: absolute;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--gray-300, #ccc);
    overflow: hidden;
    z-index: 5;
  }

  & li {
    padding: 1.2rem 1.6rem;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
    list-style-type: none;
    background-color: white;
    &:hover {
      background-color: var(--gray-300, #f0f0f0);
    }
  }
`;
