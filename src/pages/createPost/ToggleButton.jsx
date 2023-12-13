import styled from "styled-components";
import color from "../../styles/color";

const ToggleButton = ({ isChecked, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <CheckBox type="checkbox" checked={isChecked} onChange={onToggle} />
      <ToggleSlider />
    </ToggleWrapper>
  );
};

export default ToggleButton;

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
