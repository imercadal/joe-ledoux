import React from "react";
import { MediaItem } from './media-data'; 

interface MediaListProps {
    media: MediaItem[];
}

export default function MediaList({ media }: MediaListProps){
    if (media.length === 0) {
        return <p className="text-lightText text-center">No media items found for this tag.</p>;
    }

    return (
      <main className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto"> 
      {media.map(mediaItem => (
          <div 
          key={mediaItem._id} 
          className='flex flex-col  text-lightText gap-y-2 gap-x-4 lg:gap-x-8 mb-4 items-center'
          >
              <a 
                  href={mediaItem.urlToItem}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="w-full"
              >

          {mediaItem.embedUrl && (
            <div className="my-4 w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={mediaItem.embedUrl}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
                <p>{new Date(mediaItem.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric'})}</p>
                <p className='text-base my-2'><strong>{mediaItem.title}</strong></p>
                <p className='text-base'>{mediaItem.mediaCompany}</p>
                <p className="mt-2 text-xs">{mediaItem.tags.map(tag => tag.toUpperCase()).join('  ᐧ  ')}</p>
              </a>
          </div>
          
      ))}
  </main>
    );
  };
/*


*/




