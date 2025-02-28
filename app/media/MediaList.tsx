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
      <main className="container grid md:grid-cols-3 gap-4 mx-auto"> 
      {media.map(mediaItem => (
          <div key={mediaItem._id} className='flex text-lightText gap-x-4 lg:gap-x-8 mb-4 items-center'>
              <a 
                  href={mediaItem.urlToItem}
                  target='_blank'
                  rel='noopener noreferrer'
              >
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


interface MediaListProps {
  type: "written" | "audio" | "video";
  selectedTags: string[];
}


const MediaList: React.FC<MediaListProps> = ({ type, selectedTags }) => {
  // In a real scenario, your media items should include a `type` field.
  // For this demo, we'll assume the media type is reflected in the title.

  const filteredItems = dummyMediaItems.filter((item) => {
    const typeMatch = item.title.toLowerCase().includes(type);
    const tagsMatch = selectedTags.every((tag) => item.tags.includes(tag));
    return typeMatch && tagsMatch;
  });

  return (
    <div className="grid grid-cols-1 gap-4">
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item.id} className="p-4 border rounded">
            <h3 className="font-bold">{item.title}</h3>
            <p className="text-sm">Tags: {item.tags.join(", ")}</p>
          </div>
        ))
      ) : (
        <p>No media items found for {type}.</p>
      )}
    </div>
  );
};

export default MediaList;

*/




