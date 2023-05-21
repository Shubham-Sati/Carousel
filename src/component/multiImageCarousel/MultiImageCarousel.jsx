import React, { useRef } from "react";
import "./style.css";
import { products } from "../../localFiles/products";

const MultiImageCarousel = () => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <div className="arrow leftArrow" onClick={() => navigation("left")}>
        ←
      </div>
      <div className="productDiv" ref={carouselContainer}>
        {products.map((product, index) => (
          <div className="card">
            <div className="image">
              <img src={product.icon} alt="not_found" />
              <div className="rating">{product.rating}</div>
            </div>
            <div className="details">
              <div className="title">{product.title}</div>
              <div className="price">{`$ ${product.price}`}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow rightArrow" onClick={() => navigation("right")}>
        →
      </div>
    </div>
  );
};

export default MultiImageCarousel;
