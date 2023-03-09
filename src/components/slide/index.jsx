import React from "react";
import "./slide.scss";
import Slider from "infinite-react-carousel";


const Slide = ({slidesToShow, children}) => {
   
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} className='items'>
          {children}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
