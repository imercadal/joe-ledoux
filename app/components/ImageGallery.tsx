"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  folder: string;
}

export default function ImageGallery({ images, folder }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full">
      {selectedImage && (
      <div className="w-full flex justify-center">
        <Image
          src={`/${folder}/${selectedImage}.jpg`}
          alt={selectedImage}
          width={300}
          height={300}
          style={{ height: "30em", width: "auto" }}

          className="shadow-xl"
        />
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
              src={`/${folder}/${img}.jpg`}
              alt={img}
              fill
              objectFit="cover"
              className={`hover:opacity-75 ${
                selectedImage === img ? "border-accent" : "border-transparent"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
