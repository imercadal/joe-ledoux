"use client";

import { useState } from 'react';
import { Review } from './book-data';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

export default function BookReviews({ reviews }: {reviews: Review[]}) {
    const [showAllReviews, setShowAllReviews] = useState(false);


    if (!reviews || reviews.length === 0) {
        return null;
    }

    const reviewsToShow = showAllReviews ? reviews : reviews.slice(0, 2);
    
    return (
        <div className="w-full lg:w-11/12 text-lightText pl-0 xl:pl-12">
          {reviewsToShow.length > 0 &&
            reviewsToShow.map((review, index) => (
              <div key={index} className="mt-6 flex flex-col gap-4">
                <p className="self-center italic font-semibold">
                  {`"${review.content}"`}
                </p>
                <p className="self-end">{review.author}</p>
              </div>
            ))}
          {reviews.length > 2 && !showAllReviews && (
            <button
              onClick={() => setShowAllReviews((prev) => !prev)}
              className="text-accent font-bold mt-2 hover:opacity-75"
            >
              <ArrowLongRightIcon className="inline h-5 w-5" />
              {showAllReviews ? "See less" : "See more"}
            </button>
          )}
        </div>
    );
}