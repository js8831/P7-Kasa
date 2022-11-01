import React from "react";
import { useState } from "react";
import arrowLeft from "../../assets/img/arrowLeft.svg";
import arrowRight from "../../assets/img/arrowRight.svg";

export default function Slider(props) {
  console.log(props.slides);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return {
    /* <div className="slider">
      {slides.map((picture, index) => {
        return <img classname="" src={picture} alt="" />;
      })}
    </div> */
  };
}
