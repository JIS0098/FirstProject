import { useState } from "react";
import styled from "styled-components";
import AddImageButton from "./AddImageButton";
import color from "../../styles/color";
import selectedColorIcon from "../../assets/icon/color-selected.png";
import backgroundImage1 from "../../assets/img/background-img-1.JPG";
import backgroundImage2 from "../../assets/img/background-img-2.JPG";
import backgroundImage3 from "../../assets/img/background-img-3.JPG";

export const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR.orange);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return <ColorPalette onSelectColor={handleColorChange} selectedColor={selectedColor} />;
};

export const SelectImage = () => {
  const [selectedImage, setSelectedImage] = useState(IMAGE[1]);

  const handleImageChange = (image) => {
    setSelectedImage(image);
  };

  return <ImagePalette onSelectImage={handleImageChange} selectedImage={selectedImage} />;
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
      <AddImageButton />
      {Object.keys(IMAGE).map((key) => (
        <ImageButton key={key} onClick={() => handleImageClick(IMAGE[key])}>
          <Image src={IMAGE[key]} alt={`이미지 ${key}`} selected={selectedImage === IMAGE[key]} />
          {selectedImage === IMAGE[key] && <CheckIcon src={selectedColorIcon} alt="선택된 이미지" />}
        </ImageButton>
      ))}
    </PaletteWrapper>
  );
};

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  gap: 1rem;
`;

const ColorButton = styled.button`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  @media screen and (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }
`;

const ImageButton = styled.button`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;
  padding: 0;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

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
