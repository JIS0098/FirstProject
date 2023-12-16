import { useState } from "react";
import styled from "styled-components";
import color from "../../../../styles/color";
import { PaletteWrapper, CheckIcon } from "./common-styled";
import selectedIcon from "../../../../assets/icon/background-selected.png";

const COLOR = {
  orange: `${color.orange[200]}`,
  purple: `${color.purple[200]}`,
  blue: `${color.blue[200]}`,
  green: `${color.green[200]}`,
};

const SelectColor = () => {
  const [selectedColor, setSelectedColor] = useState(COLOR.orange);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return <ColorPalette onSelectColor={handleColorChange} selectedColor={selectedColor} />;
};

const ColorPalette = ({ onSelectColor, selectedColor }) => {
  const handleColorClick = (selectedColor) => {
    onSelectColor(selectedColor);
  };

  return (
    <PaletteWrapper>
      {Object.keys(COLOR).map((key) => (
        <ColorButton key={key} onClick={() => handleColorClick(COLOR[key])} style={{ background: COLOR[key] }}>
          {selectedColor === COLOR[key] && <CheckIcon src={selectedIcon} alt="선택된 색상" />}
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

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }

  @media screen and (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }
`;

export default SelectColor;
