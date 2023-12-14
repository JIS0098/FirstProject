import React from 'react';
import styled from 'styled-components';
import arrow_down from '../../assets/icon/arrow_down.svg';
import useToggle from '../../hooks/useToggle';

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
          {testData.relationship.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </StyledRelationshipInputBox>
  );
};

const StyledRelationshipInputBox = styled.div`
  & h2 {
    margin-bottom: 1.2rem;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.66rem;
    letter-spacing: -0.024rem;
  }
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
