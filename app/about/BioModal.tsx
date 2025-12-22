"use client";

import { useEffect, useState } from "react";

type Props = {
  title?: string;
  children: React.ReactNode;
  buttonLabel?: string;
};

export default function BioModal({
  title = "Joseph LeDoux",
  buttonLabel = "Read Full Bio",
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline italic hover:opacity-75"
      >
        <strong>{buttonLabel}</strong>
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          {/* overlay */}
          <button
            aria-label="Close modal"
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
            type="button"
          />

          {/* panel */}
          <div className="relative mx-auto mt-40 w-[92%] max-w-5xl rounded-2xl bg-darker opacity-100 text-lightText shadow-lg">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="hover:opacity-75"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[70vh] overflow-auto px-6 py-5">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
