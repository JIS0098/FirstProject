import React, { useState } from "react";
import addButtonIcon from "../../assets/icon/add-button.png";
import styled from "styled-components";
import color from "../../styles/color";

const AddImageButton = () => {
  const [addImg, setAddImg] = useState("");

  const setImg = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => setAddImg(e.target.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <AddButton>
      <AddInput type="file" id="image" onChange={setImg} />
      <Label htmlFor="image">
        <img src={addButtonIcon} alt="사진 추가" />
      </Label>
    </AddButton>
  );
};

export default AddImageButton;

const AddButton = styled.div`
  position: relative;
  background: ${color.gray[200]};
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;
  margin: 0;

  @media screen and (max-width: 768px) {
    width: 15.4rem;
    height: 15.4rem;
  }
`;

const AddInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 4.4rem;
    height: 4.4rem;
    object-fit: cover;
  }
`;
