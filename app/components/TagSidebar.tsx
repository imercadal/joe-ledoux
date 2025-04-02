'use client';
import React from 'react';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

interface TagSidebarProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export default function TagSidebar({ availableTags, selectedTags, onToggleTag }: TagSidebarProps) {
  return (
    <aside className="w-32 sm:w-36 md:w-44 py-2 md:p-4 border-r border-lightText border-opacity-75">
      <h2 className="pl-2 text-sm text-lightText font-bold mb-2">Filter by Category</h2>
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
    </aside>
  );
}
