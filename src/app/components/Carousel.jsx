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
          <img src="/images/about/img2.jpeg" alt="Image 2"  />
        </div>
        <div className="carousel-item">
          <img src="/images/about/img3.jpeg" alt="Image 3"  />
        </div>
        <div className="carousel-item">
          <img src="/images/about/img4.jpeg" alt="Image 4"  />
        </div>
        <div className="carousel-item">
          <img src="/images/about/img5.jpeg" alt="Image 5" />
        </div>
        <div className="carousel-item">
          <img src="/images/about/img6.jpeg" alt="Image 6" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;