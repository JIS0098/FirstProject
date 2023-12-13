import React, { useState } from "react";
import styled from "styled-components";
import color from "../styles/color";
import selectedColorIcon from "../assets/icon/color-selected.png";
import backgroundImage1 from "../assets/img/background-img-1.JPG";
import backgroundImage2 from "../assets/img/background-img-2.JPG";
import backgroundImage3 from "../assets/img/background-img-3.JPG";
import backgroundImage4 from "../assets/img/background-img-4.JPG";

import { Link } from "react-router-dom";

const ColorSelector = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isName, setIsName] = useState("");

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  const handleNameChange = (name) => {
    setIsName(name);
  };

  return (
    <Wrapper>
      <Container>
        <Create>
          <p>To.</p>
          <CreateInput value={isName} onChange={handleNameChange} />
        </Create>
        <SelectBackground>
          <p>배경화면을 선택해주세요.</p>
          <span>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</span>
        </SelectBackground>
        <ToggleButton isChecked={isChecked} onToggle={handleToggle} />
        {isChecked ? <SelectImage /> : <SelectColor />}
        <Link to="/post/id">
          <CreateButtonContainer>
            <CreateButton disabled={!isName}>생성하기</CreateButton>
          </CreateButtonContainer>
        </Link>
      </Container>
    </Wrapper>
  );
};

const COLOR = {
  orange: `${color.orange[200]}`,
  purple: `${color.purple[200]}`,
  blue: `${color.blue[200]}`,
  green: `${color.green[200]}`,
};

const IMAGE = {
  1: `${backgroundImage1}`,
  2: `${backgroundImage2}`,
  3: `${backgroundImage3}`,
  4: `${backgroundImage4}`,
};

const CreateInput = ({ value, onChange }) => {
  const [isName, setIsName] = useState(true);
  return (
    <>
      <StyledInput
        type="text"
        placeholder="받는 사람 이름을 입력해 주세요."
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsName(e.target.value);
        }}
        onBlur={() => setIsName(value)}
      />
      {!isName && <ErrorText>값을 입력해 주세요.</ErrorText>}
    </>
  );
};

const ToggleButton = ({ isChecked, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <CheckBox type="checkbox" checked={isChecked} onChange={onToggle} />
      <ToggleSlider />
    </ToggleWrapper>
  );
};

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR.orange);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return <ColorPalette onSelectColor={handleColorChange} selectedColor={selectedColor} />;
};

const SelectImage = () => {
  const [selectedImage, setSelectedImage] = useState(IMAGE[1]);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  return <ImagePalette onSelectImage={handleImageChange} selectedImage={selectedImage} />;
};

const ColorPalette = ({ onSelectColor, selectedColor }) => {
  const handleColorClick = (selectedColor) => {
    onSelectColor(selectedColor);
  };

  return (
    <PaletteWrapper>
      {Object.keys(COLOR).map((key) => (
        <ColorButton key={key} onClick={() => handleColorClick(COLOR[key])} style={{ background: COLOR[key] }}>
          {selectedColor === COLOR[key] && <CheckIcon src={selectedColorIcon} alt="선택된 색상" />}
        </ColorButton>
      ))}
    </PaletteWrapper>
  );
};

const ImagePalette = ({ onSelectImage, selectedImage }) => {
  const handleImageClick = (selectedImage) => {
    onSelectImage(selectedImage);
  };

  return (
    <PaletteWrapper>
      {Object.keys(IMAGE).map((key) => (
        <ImageButton key={key} onClick={() => handleImageClick(IMAGE[key])}>
          <Image src={IMAGE[key]} alt={`이미지 ${key}`} selected={selectedImage === IMAGE[key]} />
          {selectedImage === IMAGE[key] && <CheckIcon src={selectedColorIcon} alt="선택된 이미지" />}
        </ImageButton>
      ))}
    </PaletteWrapper>
  );
};

// styled-components
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

const Create = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  p {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${color.gray[900]};
    line-height: 150%;
  }
`;

const StyledInput = styled.input`
  width: 72rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  border: none;
  outline: 0.1rem solid ${color.gray[300]};
  background: ${color.white};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;

  &:focus {
    outline: 0.2rem solid ${color.gray[500]};
  }

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

const ErrorText = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${color.error};
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

const ToggleWrapper = styled.div`
  display: block;
  position: relative;
  width: 19rem;
  height: 4rem;
`;

const ToggleSlider = styled.span`
  cursor: pointer;
  position: absolute;
  background: ${color.gray[200]};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 2rem;

  &:before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    content: "색상";
    font-size: 1.6rem;
    font-weight: 700;
    color: ${color.purple[600]};
    height: 3.6rem;
    width: 10rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 2rem;
    border: 0.2rem solid ${color.purple[600]};
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider}:before {
    content: "이미지";
    transform: translateX(8.6rem);
  }
`;

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 0;
  gap: 1rem;
`;

const ColorButton = styled.button`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }
`;

const ImageButton = styled.button`
  background-size: cover;
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;
  padding: 0;

  @media screen and (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.6rem;
  object-fit: cover;
  pointer-events: none;
  ${({ selected }) => selected && "opacity: 0.5"}
`;

const CheckIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  pointer-events: none;
`;

const CreateButtonContainer = styled.div`
  width: 72rem;

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

const CreateButton = styled.button`
  width: 100%;
  background: ${color.purple[600]};
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  line-height: 150%;
  color: ${color.white};
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    filter: opacity(50%);
    cursor: initial;
  }
`;

export default ColorSelector;
