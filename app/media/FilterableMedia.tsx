'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MediaItem } from './media-data';
import TagSidebar from '../components/TagSidebar';
import MediaList from './MediaList';

interface FilterableMediaProps {
  initialMedia: MediaItem[];
}

const availableTags = ['neuroscience', 'books', 'music']; // Adjust as needed

export default function FilterableMedia({ initialMedia }: FilterableMediaProps) {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get('tag');

  // Initialize state, using the URL value if available
  const [selectedTags, setSelectedTags] = useState<string[]>(() =>
    initialTag ? [initialTag] : []
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Update state if the URL changes (optional, if you expect the URL to update)
  useEffect(() => {
    if (initialTag && !selectedTags.includes(initialTag)) {
      setSelectedTags((prev) => [...prev, initialTag]);
    }
  }, [initialTag, selectedTags]);

  // Filter media: if no tags are selected, show all; otherwise, show items that include ALL selected tags.
  const filteredMedia = useMemo(() => {
    if (selectedTags.length === 0) return initialMedia;
    return initialMedia.filter((media) =>
      selectedTags.some((tag) => media.tags.includes(tag))
    );
  }, [initialMedia, selectedTags]);

  return (
    <div className="flex px-6 md:px-16 lg:px-32 xl:px-56">
      <TagSidebar
        availableTags={availableTags} 
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
      />
      <div className="flex-1 px-4 md:px-6 py-4">
        <MediaList media={filteredMedia} />
      </div>
    </div>
  );
}
