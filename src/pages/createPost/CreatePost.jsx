import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import color from "../../styles/color";
import NameInput from "../../components/commons/NameInput";
import ToggleButton from "./ToggleButton";
import { SelectColor, SelectImage } from "./SelectBackground";
import CreateButton from "../../components/commons/CreateButton";

const CreatePost = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isName, setIsName] = useState("");

  const handleNameChange = (name) => {
    setIsName(name);
  };

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Wrapper>
      <Container>
        <NameInput onChange={handleNameChange} placeholder={"받는 사람을 입력해 주세요."}>
          To.
        </NameInput>
        <SelectBackground>
          <p>배경화면을 선택해주세요.</p>
          <span>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</span>
        </SelectBackground>
        <ToggleButton isChecked={isChecked} onToggle={handleToggle} />
        {isChecked ? <SelectImage /> : <SelectColor />}
        <Link to="/list">
          <CreateButton disabled={!isName} />
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;

  @media screen and (max-width: 1248px) {
    max-width: 720px;
  }

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

const SelectBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  p {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${color.gray[900]};
    line-height: 150%;
  }

  span {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${color.gray[500]};
  }
`;

export default CreatePost;
