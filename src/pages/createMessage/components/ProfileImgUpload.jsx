import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { defaultProfileImg, profileImg1, profileImg2 } from '../../../assets/ProfileImgUrls';
import { supabase } from 'api/supabase/supabaseClient';

const ProfileImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filePath, setFilePath] = useState('');

  const handleImageChange = async e => {
    const file = e.target.files[0];

    if (file) {
      const filePath = `${Date.now()}`;
      setFilePath(filePath);
      console.log(filePath);
      await supabase.storage.from('upload-profile-image').upload(filePath, file);
      fetchImageList(filePath);
      //   setPreviewImage(filePath);
    }
  };

  const fetchImageList = useCallback(async () => {
    const { data } = await supabase.storage.from('upload_').list('');

    data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    const imagePaths = data.map(item => item.name);
    setSelectedImage(imagePaths[0]);
  }, []);

  return (
    <StyledLabel>
      <StyledUploadImgBox type="file" onChange={handleImageChange} />
      <StyledUploadImg src={defaultProfileImg} alt="프로필 이미지" />
    </StyledLabel>
  );
};

const StyledUploadImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  cursor: pointer;
`;

const StyledUploadImgBox = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  width: 8rem;
  height: 8rem;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &:hover ${StyledUploadImg} {
    opacity: 0.7;
  }
`;

export default ProfileImgUpload;
