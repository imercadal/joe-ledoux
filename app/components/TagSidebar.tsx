'use client';
import React from 'react';

interface TagSidebarProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
}

export default function TagSidebar({ availableTags, selectedTags, onToggleTag }: TagSidebarProps) {
  return (
    <aside className="w-44 p-2 md:p-4 border-r border-lightText border-opacity-75">
      <h2 className="text-basis text-lightText font-bold mb-2">Filter by Category</h2>
      <ul>
        {availableTags.map((tag) => (
          <li key={tag} className="mb-2">
            <button
              onClick={() => onToggleTag(tag)}
              className={`block p-2 cursor-pointer ${
                selectedTags.includes(tag) ? 'text-accent font-bold' : 'text-lightText'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
