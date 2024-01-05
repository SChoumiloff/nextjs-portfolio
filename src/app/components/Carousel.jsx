import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel = () => {
  
  const [enlargedImage, setEnlargedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // You can adjust the number of visible slides
    slidesToScroll: 1,
  };

  const enlargeImage = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeEnlarged = () => {
    setEnlargedImage(null);
  };

  return (
      <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item" onClick={() => enlargeImage("/images/about/toiliesSachaChoumiloff.jpg")}>
          <img src="/images/about/toiliesSachaChoumiloff.jpg" alt="Tête des toillies (Queyras)"  />
        </div>
        <div className="carousel-item" onClick={() => enlargeImage("/images/about/SChoumiloffEVE.jpeg")}>
          <img src="/images/about/SChoumiloffEVE.jpeg" alt="Everest (Nepal)"  />
        </div>
        <div className="carousel-item" onClick={() => enlargeImage("/images/about/SChoumiloffLC.jpeg")}>
          <img src="/images/about/SChoumiloffLC.jpeg" alt="Saint véran (Queyras)"  />
        </div>
        <div className="carousel-item" onClick={() => enlargeImage("/images/about/SChoumiloffLC2.jpeg")}>
          <img src="/images/about/SChoumiloffLC2.jpeg" alt="Saint véran 2(Queyras)"  />
        </div>
        <div className="carousel-item" onClick={() => enlargeImage("/images/about/SChoumiloffMB.JPEG")}>
          <img src="/images/about/SChoumiloffMB.JPEG" alt="Mont blanc (Tournette)" />
        </div>
        <div className="carousel-item" onClick={() => enlargeImage("/images/about/SChoumiloffNEP.jpeg")}>
          <img src="/images/about/SChoumiloffNEP.jpeg" alt="(Nepal)" />
        </div>
        <div className="carousel-item" onClick={() => enlargeImage("/images/about/SChoumiloffTAIL.jpeg")}>
          <img src="/images/about/SChoumiloffTAIL.jpeg" alt="Taillante (Queyras)" />
        </div>
      </Slider>
      {enlargedImage && (
        <div className="enlarged-image-overlay" onClick={closeEnlarged}>
          <img src={enlargedImage} alt="Enlarged" className="enlarged-image" />
        </div>
      )}

    </div>
  );
};

export default Carousel;