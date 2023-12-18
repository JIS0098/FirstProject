import { useState, useEffect } from "react";
import styled from "styled-components";
import { PaletteWrapper, CheckIcon } from "./common-styled.js";
import AddImage from "./AddImageButton.jsx";
import selectedIcon from "../../../../assets/icon/background-selected.png";
import { supabase } from "../../../../api/supabase/supabaseClient.jsx";

const SelectImage = ({ onImageSelect }) => {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchImageList = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.storage.from("background_images").list("");

      if (error) {
        console.error("Error fetching image list:", error.message);
      } else if (data) {
        const imagePaths = data.map((item) => item.name);
        setImageList(imagePaths);
        setSelectedImage(imagePaths[0]);
        onImageSelect(imagePaths[0]);
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (image) => {
    setSelectedImage(image);
    onImageSelect(image);
  };

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <PaletteWrapper>
      <AddImage onUpload={fetchImageList} />
      {loading && <div>Loading...</div>}
      {!loading && (
        <ImageList imageList={imageList} selectedImage={selectedImage} handleImageChange={handleImageChange} />
      )}
    </PaletteWrapper>
  );
};

const ImageList = ({ imageList, selectedImage, handleImageChange }) => {
  return (
    <>
      {imageList.map((itemPath) => (
        <ImageButton type="button" key={itemPath} onClick={() => handleImageChange(itemPath)}>
          <Image
            key={itemPath}
            src={`https://gjbkkhzzbcjprpxlhdlu.supabase.co/storage/v1/object/public/background_images/${itemPath}`}
            alt={`Image ${itemPath}`}
            onClick={() => handleImageChange(itemPath)}
            style={{ opacity: selectedImage === itemPath && 0.5 }}
          />
          {selectedImage === itemPath && <CheckIcon src={selectedIcon} alt="선택된 이미지" />}
        </ImageButton>
      ))}
    </>
  );
};

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
`;

export default SelectImage;
