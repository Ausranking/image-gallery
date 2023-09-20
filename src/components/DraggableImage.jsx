import { useState, useRef } from "react";
import Draggable from "react-draggable";

const DraggableImage = ({ image }) => {
  const imageRef = useRef(null);

  const handleStart = () => {
    if (imageRef.current) {
      imageRef.current.classList.add("dragging");
    }
  };

  const handleStop = () => {
    if (imageRef.current) {
      imageRef.current.classList.remove("dragging");
    }
  };

  return (
    <>
      <div className="draggable-image relative">
        <Draggable
          defaultPosition={{ x: 0, y: 0 }}
          onStart={handleStart}
          onStop={handleStop}
        >
          <div
            ref={imageRef}
            className="w-[24rem] h-[14rem] shadow-2xl bg-white"
          >
            <img src={image.url} alt={image.title} tag={image.tag} />
            <p>{image.title}</p>
            {/* <p>{image.tag}</p> */}
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default DraggableImage;
