import React, { useState } from "react";
import styled from "styled-components";
import arrow_down from "../../assets/icon/arrow_down.svg";
import useToggle from "../../hooks/useToggle";
import { StyledTitle } from "./CommonStyled";

const RelationshipInputBox = ({ data, setData }) => {
  const [relationship, relationshipToggle] = useToggle();
  const relationshipList = ["지인", "동료", "가족", "친구"];
  const [value, setValue] = useState("");

  const handleItemClick = (item) => {
    setValue(item);
    relationshipToggle(false);
    setData({ ...data, relationship: item });
  };

  return (
    <StyledRelationshipInputBox>
      <StyledTitle>상대와의 관계</StyledTitle>
      <div>
        {value === "" ? "지인" : value}
        <img src={arrow_down} onClick={relationshipToggle} />
      </div>
      {relationship ? (
        <ul>
          {relationshipList.map((item) => (
            <li
              onClick={() => {
                handleItemClick(item);
              }}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </StyledRelationshipInputBox>
  );
};

const StyledRelationshipInputBox = styled.div`
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
  & img {
    cursor: pointer;
  }
`;

export default RelationshipInputBox;
