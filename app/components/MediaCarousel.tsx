import React, { useState } from "react";

interface MediaCarouselProps {
  children: React.ReactNode[];
}

const MediaCarousel: React.FC<MediaCarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = children.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        {children.map((child, index) => (
          <div
            key={index}
            className={`${index === currentIndex ? "block" : "hidden"} transition-all duration-300`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-4">
        <button onClick={prevSlide} className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
          Prev
        </button>
        <button onClick={nextSlide} className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400">
          Next
        </button>
      </div>
    </div>
  );
};

export default MediaCarousel;
