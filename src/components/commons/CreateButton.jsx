import { Button } from "./Button";
const CreateButton = ({ disabled, onClick }) => {
  return (
    <Button width="72rem" mobileWidth="32rem" disabled={disabled} onClick={onClick}>
      생성하기
    </Button>
  );
};

export default CreateButton;
