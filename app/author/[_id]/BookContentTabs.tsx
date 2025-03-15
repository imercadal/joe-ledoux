"use client";

import { useState } from "react";
import Image from "next/image";
import BookReviews from "../BookReviews";
import { Book } from "../book-data";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

type Tab = "book" | "praise" | "citations";

interface BookContentTabsProps {
  book: Book;
}

export default function BookContentTabs({ book }: BookContentTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("book");

  return (
    <div className="max-w-5xl">
      {/* Navigation for switching tabs */}
      <nav className="isolate w-full mx-auto pb-6 pl-8 flex justify-around items-center shadow-xs text-accent">
        <button
          type="button"
          onClick={() => setActiveTab("book")}
          className={`py-2 w-full inline-flex items-center justify-center text-sm hover:bg-darkest focus:z-10 ${
            activeTab === "book" ? "font-bold underline underline-offset-8" : ""
          }`}
        >
            The Book
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("praise")}
          className={`py-2 w-full inline-flex items-center justify-center text-sm hover:bg-darkest focus:z-10 ${
            activeTab === "praise" ? "font-bold underline underline-offset-8" : ""
          }`}
        >
            Praise
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("citations")}
          className={`py-2 w-full inline-flex items-center justify-center text-sm hover:bg-darkest focus:z-10 ${
            activeTab === "citations" ? "font-bold underline underline-offset-8" : ""
          }`}
        >
            Citations
        </button>
      </nav>

      {/* Conditional Content */}
      <div className="mx-auto text-lightText pb-6">
        {activeTab === "book" && (
          <div className="flex justify-center mx-auto max-w-4xl pb-16 gap-8">
            {/* Content for "The Book" tab */}
            <div className="ml-8 md:flex">
              <div className="w-2/5">
                <Image
                  src={`/${book.imageUrl}`}
                  alt={`${book.title} cover`}
                  height={1000}
                  width={663}
                  className="object-contain"
                />
              </div>
              <div className="w-3/5 ml-8 mr-2 flex flex-col">
                <p className="text-lightText">{book.synopsis}</p>
                <div className="pt-4 flex justify-center">
                  <BookReviews reviews={book.reviews} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "praise" && (
          <section className="mx-auto">
            <div className="max-w-2xl mx-auto">

            {book.advancedPraise.map((ap, index) => (
                <div key={index} className="my-12 flex flex-col gap-2">
                <p className="self-center italic">{`"${ap.praise}"`}</p>
                <p className="self-end">
                  {ap.author} {ap.role}
                </p>
              </div>
            ))}
            </div>
          </section>
        )}

        {activeTab === "citations" && (
          <section className="w-2xl py-8 px-44 min-w-xl flex flex-col gap-4 justify-start">
            <h4>Resources available for download:</h4>
            {book.documents?.map((d, index) => (
                <a 
                    key={index}
                    href={d.file || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lightAccent text-md hover:underline underline-offset-8"
                >
                    <ArrowLongRightIcon className="inline text-lightAccent h-5 w-6 mr-2"/>
                    <p className="inline">{d.document}</p>
                </a>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
