import { useState } from "react";
import { CARD_WIDTH, ITEMS_PER_PAGE } from "../constants";
function useSwipe(length, condition) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  const maxIndex = length - ITEMS_PER_PAGE;

  const updateOffset = (index) => {
    setOffset(-index * CARD_WIDTH);
  };

  const handleSwipe = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex;
      if (direction === "prev") {
        newIndex = Math.max(prevIndex - ITEMS_PER_PAGE, 0);
      } else if (direction === "next") {
        newIndex = Math.min(prevIndex + ITEMS_PER_PAGE, maxIndex);
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
    if (swipeX < -50) {
      handleSwipe("next");
      endDrag();
    } else if (swipeX > 50) {
      handleSwipe("prev");
      endDrag();
    }
  };

  return { currentIndex, offset, maxIndex, handleSwipe, startDrag, endDrag, moveItem };
}

export default useSwipe;
