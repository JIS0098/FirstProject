import { useState } from "react";
import styled from "styled-components";
import { PaletteWrapper, CheckIcon } from "./common-styled";
import selectedIcon from "../../../../assets/icon/background-selected.png";

const COLOR = {
  beige: "beige",
  purple: "purple",
  blue: "blue",
  green: "green",
};

const SelectColor = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState(COLOR.beige);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  return <ColorPalette onSelectColor={handleColorChange} selectedColor={selectedColor} />;
};

const ColorPalette = ({ onSelectColor, selectedColor }) => {
  const handleColorClick = (selectedColor) => {
    onSelectColor(selectedColor);
  };

  return (
    <PaletteWrapper>
      {Object.entries(COLOR).map(([key, value]) => (
        <ColorButton type="button" key={key} onClick={() => handleColorClick(value)} $bgColor={value}>
          {selectedColor === value && <CheckIcon src={selectedIcon} alt="선택된 색상" />}
        </ColorButton>
      ))}
    </PaletteWrapper>
  );
};

const ColorButton = styled.button`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;
  background-color: ${({ theme, $bgColor }) => theme.backgroundColor[$bgColor]};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  @media screen and (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }
`;

export default SelectColor;
