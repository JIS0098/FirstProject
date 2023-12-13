import styled from "styled-components";
import color from "../../styles/color";

const ButttonBox = ({ children }) => {
  return (
    <ButtonContainer>
      <Button>{children}</Button>
    </ButtonContainer>
  );
};

export default ButttonBox;

const ButtonContainer = styled.div`
  width: 72rem;

  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

const Button = styled.button`
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
