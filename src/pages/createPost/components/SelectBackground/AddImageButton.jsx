import React from "react";
import addButtonIcon from "../../../../assets/icon/add-button.png";
import styled from "styled-components";
import color from "../../../../styles/color.js";
import { supabase } from "../../../../api/supabase/supabaseClient.jsx";

const AddImage = ({ onUpload }) => {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const filePath = `${file.name}`;
      const { data, error } = await supabase.storage.from("background_images").upload(filePath, file);

      if (error) {
        console.error("Error uploading image:", error.message);
      } else {
        console.log("Image uploaded successfully:", data);
        onUpload(filePath);
      }
    }
  };
  return (
    <AddButton>
      <AddInput type="file" id="image" onChange={handleImageChange} />
      <Label htmlFor="image">
        <ButtonIcon src={addButtonIcon} alt="사진 추가 버튼" />
        <p>파일 크기: 2MB 이하</p>
      </Label>
    </AddButton>
  );
};

export default AddImage;

const AddButton = styled.div`
  position: relative;
  background: ${color.gray[200]};
  width: 16.8rem;
  height: 16.8rem;
  border-radius: 1.6rem;
  cursor: pointer;
  margin: 0;

  p {
    position: absolute;
    left: 26%;
    bottom: 3rem;
  }

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
`;

const ButtonIcon = styled.img`
  width: 4.4rem;
  height: 4.4rem;
`;
