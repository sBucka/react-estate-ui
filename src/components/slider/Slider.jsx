import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlides = (direction) => {
    if (direction === "left") {
      if (imageIndex == 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex+1);
      }
    }
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div class="fullSlider">
          <div
            class="arrow"
            onClick={() => {
              changeSlides("left");
            }}
          >
            <img src="/arrow.png" alt="" />
          </div>
          <div class="imgContainer">
            <img src={images[imageIndex]}></img>
          </div>
          <div
            class="arrow"
            onClick={() => {
              changeSlides("right");
            }}
          >
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <div class="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div class="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div class="smallImages">
        {images.slice(1).map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              onClick={() => {
                setImageIndex(index + 1);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
