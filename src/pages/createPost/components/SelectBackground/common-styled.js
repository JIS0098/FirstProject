import styled from "styled-components";

const PaletteWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-grow: 0;
  gap: 1rem;
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

export { PaletteWrapper, CheckIcon };
