'use client'

import { useEffect, useRef } from "react";

export default function YearAnchorNav({ years }: { years: number[] }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const setOffset = () => {
      document.documentElement.style.setProperty(
        "--year-anchor-offset",
        `${bar.getBoundingClientRect().height}px`
      );
    };

    setOffset();
    const observer = new ResizeObserver(setOffset);
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={barRef}
      className="sticky top-0 py-2 md:py-3 px-4 md:px-0 flex justify-center items-center bg-lightAccent"
    >
      <ul className="flex flex-wrap gap-x-4 gap-y-2 w-full mx-auto max-w-2xl justify-center text-xs text-accent font-azeret">
        {years.map((year) => (
          <li key={year} className="hover:underline">
            <a href={`#year-${year}`}>{year}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
