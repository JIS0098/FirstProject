import React from 'react';
import styled from 'styled-components';
import arrow_down from '../../assets/icon/arrow_down.svg';
import useToggle from '../../hooks/useToggle';
import { StyledTitle } from './CommonStyled';

const RelationshipInputBox = ({ testData }) => {
  const [relationship, relationshipToggle] = useToggle();
  return (
    <StyledRelationshipInputBox>
      <StyledTitle>상대와의 관계</StyledTitle>
      <div>
        지인
        <img src={arrow_down} onClick={relationshipToggle} />
      </div>
      {relationship ? (
        <ul>
          {testData.relationship.map(item => (
            <li key={item}>{item}</li>
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
`;

export default RelationshipInputBox;
