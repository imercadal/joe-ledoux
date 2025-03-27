"use client"

import { useState } from "react"
import Image from "next/image"

interface Image {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

interface PhotoGalleryProps {
  images: Image[];
  className?: string;
}


export default function NeuroImageGrid({images, className = ""}: PhotoGalleryProps){
    const [selectedPhoto, setSelectedPhoto] = useState<Image | null>(null)

    const getSpanSize = (width: number, height: number) => {
        const aspectRatio = width / height
    
        if (aspectRatio > 1.5)  return "col-span-2"
        if (aspectRatio < 0.7) return "row-span-2" 
        return ""
    }

    return(
<div className={`w-full max-w-4xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
        {images.map((image) => {
          let spanClass = "";
          if (image.id === "1") {
            spanClass = "col-span-1";
          } else if (image.id === "2") {
            spanClass = "col-span-2";
          } else {
            spanClass = getSpanSize(image.width, image.height);
          }
          return(
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
          )
        })}
      </div>

      {/* Lightbox for selected image */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedPhoto(null)
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedPhoto.src || "/placeholder.svg"}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
)
}