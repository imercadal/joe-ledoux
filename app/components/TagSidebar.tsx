'use client';
import React from 'react';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

interface TagSidebarProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  filterType: string;
}

export default function TagSidebar({ availableTags, selectedTags, onToggleTag, filterType }: TagSidebarProps) {
  return (
    <div>
      <h2 className="pl-2 text-sm text-lightText font-bold mb-2">Filter by {filterType}</h2>
      <ul>
        {availableTags.map((tag) => (
          <li key={tag}>
            <button
              onClick={() => onToggleTag(tag)}
              className={`inline px-2 text-xs leading-none cursor-pointer ${
                selectedTags.includes(tag) ? 'text-accent font-bold' : 'text-lightText'
              }`}
            >
              { selectedTags.includes(tag) ? 
                <ArrowLongRightIcon className="inline h-4 w-5 text-accent" />
                : <></>
              }
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
