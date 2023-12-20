import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NameInput from "../../components/commons/NameInput";
import ToggleButton from "./components/ToggleButton";
import SelectColor from "./components/SelectBackground/SelectColor";
import SelectImage from "./components/SelectBackground/SelectImage";
import CreateButton from "../../components/commons/CreateButton";
import handleCreateButtonClick from "../../utils/handleCreateButtonClick";

const CreatePost = () => {
  const [isName, setIsName] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (name) => {
    setIsName(name);
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Wrapper>
      <Container>
        <NameInput onChange={handleNameChange} placeholder={"받는 사람을 입력해 주세요."} name={isName}>
          To.
        </NameInput>
        <SelectBackground>
          <p>배경화면을 선택해주세요.</p>
          <span>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</span>
        </SelectBackground>
        <ToggleButton isChecked={isChecked} onToggle={handleToggle} />
        {isChecked ? (
          <SelectImage onImageSelect={handleImageSelect} />
        ) : (
          <SelectColor onColorSelect={handleColorSelect} />
        )}
        <CreateButton
          disabled={!isName}
          onClick={() =>
            handleCreateButtonClick({
              name: isName,
              backgroundColor: selectedColor || "beige",
              backgroundImageURL: selectedImage
                ? `https://gjbkkhzzbcjprpxlhdlu.supabase.co/storage/v1/object/public/background_images/${selectedImage}`
                : null,
              navigate,
            })
          }
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.form`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5rem;
  max-width: 72rem;

  @media screen and (max-width: 768px) {
    max-width: 32rem;
  }
`;

const SelectBackground = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  p {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.fontColor};
    line-height: 150%;
  }

  span {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.subFontColor};
  }
`;

export default CreatePost;
