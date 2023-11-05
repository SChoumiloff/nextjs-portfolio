import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // You can adjust the number of visible slides
    slidesToScroll: 1,
  };

  return (
      <div className="carousel-container">
      <Slider {...settings}>
        {/* <div className="carousel-item">
          <img src="/images/about/img1.JPEG" alt="Image 1" width={500} height={500} />
        </div> */}
        <div className="carousel-item">
          <img src="/images/about/SChoumiloffEVE.jpeg" alt="Everest (Nepal)"  />
        </div>
        <div className="carousel-item">
          <img src="/images/about/SChoumiloffLC.jpeg" alt="Saint véran (Queyras)"  />
        </div>
        <div className="carousel-item">
          <img src="/images/about/SChoumiloffLC2.jpeg" alt="Saint véran 2(Queyras)"  />
        </div>
        <div className="carousel-item">
          <img src="/images/about/SChoumiloffMB.JPEG" alt="Mont blanc (Tournette)" />
        </div>
        <div className="carousel-item">
          <img src="/images/about/SChoumiloffNEP.jpeg" alt="(Nepal)" />
        </div>
        <div className="carousel-item">
          <img src="/images/about/SChoumiloffTAIL.jpeg" alt="Taillante (Queyras)" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;