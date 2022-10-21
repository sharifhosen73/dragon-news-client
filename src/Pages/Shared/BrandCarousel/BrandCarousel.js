import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../../assests/brands/download (1).jpg";
import image2 from "../../../assests/brands/download (2).jpg";

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
