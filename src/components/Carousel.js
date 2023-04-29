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
  cursor: ${({ link }) => link !== "" ? "pointer" : "default"};
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === "left" ? "left: 5px;" : "right: 5px;")}
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 100%;
  font-size: 1.5rem;
  padding: 2px 10px;
  cursor: pointer;
  z-index: 1;
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
            link={image.link}
            onClick={() => {
              if (image.link !== "") {
                window.open(image.link, "_blank");
              }
            }}
          />
        ))}
      </CarouselSlide>
      <CarouselButton direction="right" onClick={handleNext}>
        &gt;
      </CarouselButton>
    </CarouselContainer>
  );
}
