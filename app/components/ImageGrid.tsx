"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Image {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  images: Image[];
  className?: string;
}

export default function ImageGrid({ images, className = "" }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Image | null>(null);

  const getSpanSize = (width: number, height: number) => {
    const aspectRatio = width / height;

    if (aspectRatio > 1.5) return "col-span-1 sm:col-span-2";
    if (aspectRatio < 0.7) return "row-span-1 sm:row-span-2";
    return "";
  };

  const nextImage = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = images.indexOf(selectedPhoto);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedPhoto(images[nextIndex]);
  }, [selectedPhoto, images]);

  const prevImage = useCallback(() => {
    if (!selectedPhoto) return;
    const currentIndex = images.indexOf(selectedPhoto);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedPhoto(images[prevIndex]);
  }, [selectedPhoto, images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, images, nextImage, prevImage]);

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
        {images.map((image) => {
          let spanClass = "";
          if (image.id === "1") {
            spanClass = "col-span-1";
          } else if (image.id === "2") {
            spanClass = "col-span-1 sm:col-span-2";
          } else {
            spanClass = getSpanSize(image.width, image.height);
          }
          return (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02] ${spanClass}`}
              onClick={() => setSelectedPhoto(image)}
            >
              <div className="aspect-[auto] h-full w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for selected photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-2 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="relative flex justify-center lg:max-w-[70vw] max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 opacity-50 p-2 rounded-r focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 opacity-50 p-2 rounded-l focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <Image
              src={selectedPhoto.src || "/placeholder.svg"}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className="object-contain rounded-lg max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
