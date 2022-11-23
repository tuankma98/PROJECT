import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { CardMedia } from "@mui/material";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider-container">
      <div className="slider-button slider-button__prev" onClick={prevSlide}>
        <div className="leftArrow"></div>
      </div>
      <div className="slider-button slider-button__next" onClick={nextSlide}>
        <div className="rightArrow"></div>
      </div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={
              index === current ? "slide__item is-active" : "slide__item"
            }
            key={index}
          >
            {index === current && (
              <CardMedia
                component="img"
                height="600"
                width="100%"
                image={slide.image}
                alt="Paella dish"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
