import React, { useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
`;

const CarouselSlide = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.3s ease;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const CarouselImage = styled.img`
  min-width: 100%;
  max-width: 100%;
  border-radius: 6px;
  max-height: 800px;
  object-fit: contain;
  display: block;
  cursor: pointer;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: 10px;" : "right: 10px;")}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 20%;
  font-size: 1.5rem;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const CarouselIndicators = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const CarouselIndicator = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 5px;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? "3px solid #fff" : "1px solid #fff")};
  opacity: ${({ isActive }) => (isActive ? "0.6" : "0.4")};
  transition: border 0.3s ease, opacity 0.3s ease;
`;


export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <CarouselContainer>
      <CarouselButton direction="left" onClick={handlePrev}>
        &lt;
      </CarouselButton>
      <CarouselSlide currentSlide={currentSlide}>
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            src={image.src}
            onClick={() => window.open(image.link, "_blank")}
          />
        ))}
      </CarouselSlide>
      <CarouselButton direction="right" onClick={handleNext}>
        &gt;
      </CarouselButton>
      <CarouselIndicators>
        {images.map((image, index) => (
          <CarouselIndicator
            key={index}
            src={image.src}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </CarouselIndicators>
    </CarouselContainer>
  );
}
