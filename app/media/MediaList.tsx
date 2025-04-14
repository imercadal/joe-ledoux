import React from "react";
import { MediaItem } from './media-data'; 

interface MediaListProps {
    media: MediaItem[];
}

export default function MediaList({ media }: MediaListProps){
  if (media.length === 0) {
    return (
      <p className="text-lightText text-center">
        No media items found for this tag.
      </p>
    )
  }

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto"> 
      {media.map(mediaItem => (
        <div 
        key={mediaItem._id} 
        className='flex flex-col text-lightText gap-y-2 gap-x-6 lg:gap-x-8 mb-4 items-center'
        >
          <a 
              href={mediaItem.urlToItem}
              target='_blank'
              rel='noopener noreferrer'
              className="w-full"
          >
            
            {mediaItem.type === "watch" && (
              <div className="my-4 w-full aspect-video">
                { mediaItem.embedUrl ? 
                <iframe
                  width="100%"
                  height="100%"
                  src={mediaItem.embedUrl}
                  title="YouTube video player"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              :  
                <img
                  src="/Watch_Thumb.webp"
                  alt={mediaItem.title}
                  className="object-cover w-full h-full"
                />
              }
              </div>
            )}
            <p className="text-xs mb-1">{new Date(mediaItem.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric'})}</p>
            <p className='text-sm font-bold'>{mediaItem.mediaCompany}</p>
            <p className='text-sm italic'>{mediaItem.title}</p>
            <p className="text-xs mt-1">{mediaItem.tags.map(tag => tag.toUpperCase()).join('  ᐧ  ')}</p>
          </a>
        </div> 
      ))}
    </div>
  );
};