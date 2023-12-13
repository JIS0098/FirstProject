import { Button } from "./Button";
const CreateButtton = ({ disabled }) => {
  return (
    <Button width="72rem" mobileWidth="32rem" disabled={disabled}>
      생성하기
    </Button>
  );
};

export default CreateButtton;
