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
    <div className="w-full h-full flex flex-col">
      {/* Selected Image Preview */}
      {selectedImage && (
        <div className="w-full flex justify-center mb-4">
          <Image
            src={`/${folder}/${selectedImage}.jpg`}
            alt={selectedImage}
            width={300}
            height={300}
            style={{ height: "30em", width: "auto" }}
            className="shadow-xl rounded-xl"
          />
        </div>
      )}

      {/* Scrollable Grid */}
      <div className="overflow-y-auto h-[500px] pr-2">
        <div className="grid grid-cols-3 grid-rows-3 md:grid-rows-3 sm:grid-rows-2 gap-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer border-2 rounded-sm aspect-square"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={`/${folder}/${img}.jpg`}
                alt={img}
                fill
                className={`object-cover rounded-sm ${
                  selectedImage === img ? "border-accent" : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
