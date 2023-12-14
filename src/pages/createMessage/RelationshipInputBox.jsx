import React from "react";
import styled from "styled-components";
import { TitleStyled, SelectInputStyled } from "./CommonStyled";
import arrow_down from "../../assets/icon/arrow_down.svg";
import useToggle from "../../hooks/useToggle";

const RelationshipInputBox = ({ testData }) => {
  const [relationship, relationshipToggle] = useToggle();
  return (
    <StyledRelationshipInputBox>
      <h2>상대와의 관계</h2>
      <div>
        지인
        <img src={arrow_down} onClick={relationshipToggle} />
      </div>
      {relationship ? (
        <ul>
          {testData.relationship.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </StyledRelationshipInputBox>
  );
};

const StyledRelationshipInputBox = styled.div`
  & h2 {
    ${TitleStyled};
  }
  ${SelectInputStyled}
`;

export default RelationshipInputBox;
