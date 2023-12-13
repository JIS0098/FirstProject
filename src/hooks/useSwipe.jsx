import { useState } from "react";
import { CARD_WIDTH, SWIPE_X } from "../constants";
function useSwipe(maxIndex, condition) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const updateOffset = (index) => {
    setOffset(-index * CARD_WIDTH);
  };

  const handleSwipe = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex;
      if (direction === "prev") {
        newIndex = Math.max(prevIndex - 1, 0);
      } else if (direction === "next") {
        newIndex = Math.min(prevIndex + 1, maxIndex);
      } else {
        newIndex = prevIndex;
      }
      updateOffset(newIndex);
      return newIndex;
    });
  };

  const startDrag = (positionX) => {
    setStartX(positionX);
    setIsDrag(true);
  };

  const endDrag = () => {
    setIsDrag(false);
  };

  const moveItem = (currentX) => {
    if (!isDrag || !condition) return;
    const swipeX = currentX - startX;
    if (swipeX < -SWIPE_X) {
      handleSwipe("next");
      endDrag();
    } else if (swipeX > SWIPE_X) {
      handleSwipe("prev");
      endDrag();
    }
  };

  return { currentIndex, offset, maxIndex, handleSwipe, startDrag, endDrag, moveItem };
}

export default useSwipe;
