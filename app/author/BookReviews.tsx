"use client";

import { Review } from './book-data';
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";

interface BookReviewsProps {
  reviews: Review[];
  onSwitchToReviews: () => void;
}

export default function BookReviews({ reviews, onSwitchToReviews }: BookReviewsProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const reviewsToShow = reviews.slice(0, 2);
    
  return (
    <div className="w-full lg:w-11/12 text-lightText pl-0 xl:pl-12">
      {reviewsToShow.map((review, index) => (
        <div key={index} className="mt-6 flex flex-col gap-4">
          <p className="self-center italic font-semibold">
            {`"${review.content}"`}
          </p>
          <p className="self-end">{review.author}</p>
        </div>
      ))}
          <button
            type='button'
            onClick={onSwitchToReviews}
            className="text-accent font-bold mt-2 hover:opacity-75"
          >
            <ArrowLongRightIcon className="inline h-5 w-5" />
             See more
          </button>
    </div>
  );
}