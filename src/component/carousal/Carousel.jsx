import React, { useEffect, useState } from "react";
import "./style.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";

const Carousel = () => {
  const imageArr = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (idx) => {
    if (idx === -1) {
      setImageIndex(imageArr.length - 1);
    } else if (idx === imageArr.length) {
      setImageIndex(0);
    } else {
      setImageIndex(idx);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(imageIndex + 1);
      }
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="bannerDiv"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        className="leftButton"
        onClick={() => updateIndex(imageIndex - 1)}
      >
        ←
      </button>
      <div className="carousel">
        {imageArr.slice(imageIndex, imageIndex + 1).map((image, index) => (
          <img className="image" src={image} key={index} alt="not_found" />
        ))}
      </div>
      <button
        className="rightButton"
        onClick={() => updateIndex(imageIndex + 1)}
      >
        →
      </button>
    </div>
  );
};

export default Carousel;
