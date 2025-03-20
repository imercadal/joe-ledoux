'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";

interface ImageGridProps {
    images: string[];
    folder: string;
  }

export default function ImageGrid({ images, folder }: ImageGridProps){
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const nextImage = () => {
        if (!selectedImage) return;
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
      };
    
      const prevImage = () => {
        if (!selectedImage) return;
        const currentIndex = images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
      };
    
      useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (!selectedImage) return;
    
          if (e.key === 'ArrowRight') {
            nextImage();
          } else if (e.key === 'ArrowLeft') {
            prevImage();
          } else if (e.key === 'Escape') {
            setSelectedImage(null);
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
      }, [selectedImage, images]);

    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
            {/* MODAL */}
            {selectedImage && (
                <div 
                data-dialog-backdrop="image-dialog"
                data-dialog-backdrop-close="true"
                className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-100 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setSelectedImage(null)}
              >
                    <div
                        className="relative m-4 w-2/4 rounded-lg bg-white shadow-sm"
                        role="dialog"
                        data-dialog="image-dialog"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative">
                            {/* Left Arrow */}
                            <button 
                                onClick={prevImage}
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 opacity-25 p-2 rounded-r focus:outline-none"
                            >
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                                    
                            {/* Right Arrow */}
                            <button 
                                onClick={nextImage}
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 opacity-25 p-2 rounded-l focus:outline-none"
                            >
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-6 w-6" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                                >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <img 
                                alt="Selected gallery photo"
                                src={`/${folder}/${selectedImage}.jpg`}
                                className="h-[30rem] w-full object-cover object-top rounded-lg object-center"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* GRID */}
            {images.map((img, index) => (
            <div 
                key={index} 
                className='cursor-pointer'
                onClick={() => setSelectedImage(img)}
            >
                <img 
                    className="h-40 w-full max-w-full rounded-lg object-cover object-top" 
                    src={`/${folder}/${img}.jpg`}
                    alt="gallery-photo" />
            </div>
            ))}

        </div>

    )
}
