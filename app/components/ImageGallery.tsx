"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  folder: string;
}

export default function ImageGallery({ images, folder }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentIndex = selectedImage ? images.indexOf(selectedImage) : -1;

  const goTo = (index: number) => {
    const next = (index + images.length) % images.length;
    setSelectedImage(images[next]);
  };

  return (
    <div className="w-full">
      {selectedImage && (
      <div className="w-full flex items-center gap-2">
        <button
          onClick={() => goTo(currentIndex - 1)}
          className="flex-shrink-0 p-2 text-dark hover:text-accent transition-colors"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="relative flex-1" style={{ height: "30em" }}>
          <Image
            src={`/${folder}/${selectedImage}.webp`}
            alt={selectedImage}
            fill
            className="object-contain shadow-xl"
            sizes="100vw"
          />
        </div>
        <button
          onClick={() => goTo(currentIndex + 1)}
          className="flex-shrink-0 p-2 text-dark hover:text-accent transition-colors"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      )}
      {/* Horizontal carousel */}
      <div className="flex overflow-x-auto mt-4 space-x-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative flex-shrink-0 cursor-pointer border-2 rounded-sm"
            style={{ width: "150px", height: "150px" }}
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={`/${folder}/${img}.webp`}
              alt={img}
              fill
              className={`object-cover hover:opacity-75 ${
                selectedImage === img ? "border-accent" : "border-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
