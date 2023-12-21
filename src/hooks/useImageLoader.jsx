import { useState, useEffect } from "react";

function useImageLoader(imageURL) {
  const [isImageLoaded, setImageLoaded] = useState(null);

  useEffect(() => {
    if (!imageURL) {
      setImageLoaded(false);
      return;
    }

    const img = new Image();
    img.src = imageURL;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);

    // 옵셔널: 이미지 로드를 취소하는 경우가 있을 수 있으므로, cleanup 함수를 사용합니다.
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageURL]);

  return isImageLoaded;
}

export default useImageLoader;
