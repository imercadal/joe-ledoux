'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MediaItem } from './media-data';
import TagSidebar from '../components/TagSidebar';
import MediaList from './MediaList';

interface FilterableMediaProps {
  initialMedia: MediaItem[];
}

const availableCategories = ['neuroscience', 'books', 'music'];

export default function FilterableMedia({ initialMedia }: FilterableMediaProps) {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get('tag');

  // Category filtering state
  const [selectedTags, setSelectedTags] = useState<string[]>(() =>
    initialTag ? [initialTag] : []
  );

  // Year filtering state (stored as numbers)
  const [selectedYears, setSelectedYears] = useState<number[]>([]);

  // Toggle function for categories
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Toggle function for years (received as string from the TagSidebar)
  const toggleYear = (yearStr: string) => {
    const year = parseInt(yearStr, 10);
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  // If URL changes then update category filter (optional)
  useEffect(() => {
    if (initialTag && !selectedTags.includes(initialTag)) {
      setSelectedTags((prev) => [...prev, initialTag]);
    }
  }, [initialTag, selectedTags]);

  // Helper to safely get the year from mediaItem.date
  const getYear = (date: unknown): number => {
    if (date instanceof Date) {
      return date.getFullYear();
    }
    return new Date(date as string).getFullYear();
  };

  // Compute available years using the helper function.
  const mediaByYear = initialMedia.reduce((acc, mediaItem) => {
    const year = getYear(mediaItem.date);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(mediaItem);
    return acc;
  }, {} as Record<number, MediaItem[]>);

  // Get an ordered list of years (descending)
  const years = Object.keys(mediaByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // Apply both filters: categories first, then by years.
  const filteredMedia = useMemo(() => {
    let media = initialMedia;
    if (selectedTags.length > 0) {
      media = media.filter((mediaItem) =>
        selectedTags.some((tag) => mediaItem.tags.includes(tag))
      );
    }
    if (selectedYears.length > 0) {
      media = media.filter((mediaItem) =>
        selectedYears.includes(getYear(mediaItem.date))
      );
    }
    return media;
  }, [initialMedia, selectedTags, selectedYears]);

  return (
    <div className="flex px-6 md:px-16 lg:px-32 xl:px-56">
      <aside className="w-32 sm:w-36 md:w-44 py-2 md:p-4 border-r border-lightText border-opacity-75">
        {/* Category Filter Sidebar */}
        <TagSidebar
          availableTags={availableCategories}
          selectedTags={selectedTags}
          onToggleTag={toggleTag}
          filterType="Category"
        />
        <br></br>
        <br></br>
        {/* Year Filter Sidebar */}
        <TagSidebar
          availableTags={years.map((year) => year.toString())}
          selectedTags={selectedYears.map((year) => year.toString())}
          onToggleTag={toggleYear}
          filterType="Years"
        />
      </aside>

      {/* Media List */}
      <div className="flex-1 px-4 md:px-6 py-0">
        <MediaList media={filteredMedia} />
      </div>
    </div>
  );
}


/*
'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { MediaItem } from './media-data';
import TagSidebar from '../components/TagSidebar';
import MediaList from './MediaList';

interface FilterableMediaProps {
  initialMedia: MediaItem[];
}

const availableTags = ['neuroscience', 'books', 'music'];

export default function FilterableMedia({ initialMedia }: FilterableMediaProps) {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get('tag');

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
      <div className="flex-1 px-4 md:px-6 py-0">
        <MediaList media={filteredMedia} />
      </div>
    </div>
  );
}
*/