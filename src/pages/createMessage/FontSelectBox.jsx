import React from "react";
import styled from "styled-components";
import { TitleStyled, SelectInputStyled } from "./CommonStyled";
import arrow_down from "../../assets/icon/arrow_down.svg";
import useToggle from "../../hooks/useToggle";

const FontSelectBox = ({ testData }) => {
  const [font, fontToggle] = useToggle();
  return (
    <StyledFontSelectBox>
      <h2>폰트 선택</h2>
      <div>
        Noto Sans
        <img src={arrow_down} onClick={fontToggle} />
      </div>
      {font ? (
        <ul>
          {testData.font.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </StyledFontSelectBox>
  );
};

const StyledFontSelectBox = styled.div`
  & h2 {
    ${TitleStyled};
  }
  ${SelectInputStyled}
`;

export default FontSelectBox;
