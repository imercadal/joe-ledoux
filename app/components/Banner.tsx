import Image from 'next/image';

interface BannerProps {
  imageUrl: string;
  title: string;
}

export default function Banner({ imageUrl, title }: BannerProps) {
  return (
    <div className="w-full h-40 relative">
      <Image
        src={imageUrl}
        alt={`${title} banner`}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 px-6 md:px-12 max-w-4xl mx-auto flex items-center justify-center">
        <h3 className="m-0 text-xl text-white tracking-wider">
          <strong>{String(title).toUpperCase()}</strong>
        </h3>
      </div>
    </div>
  );
}



/*
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface BannerProps {
    imageUrl: string;
    title: string;
}

const availableTypes = ['watch', 'listen', 'read', 'interviews', 'performances'];

export default function Banner({ imageUrl, title }: BannerProps){
    const mayus = title.toUpperCase()
    const otherTypes = availableTypes.filter((type) => type !== title);

    return(
        <div className="w-full h-40 relative">
            <Image src={imageUrl} alt="Media Banner" fill className="object-cover" />
            <div className="absolute inset-0 px-6 md:px-12 max-w-4xl mx-auto flex items-center justify-between">
                {/* Previous type *
                <Link 
                    href={`/media/${otherTypes[0]}`}
                    className="flex items-center text-white hover:opacity-75"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <h3 className="uppercase pl-0 text-sm text-lightText shado-2xl">{otherTypes[0]}</h3>
                </Link>
                {/* Current Type *
                <h3 className="m-0 text-xl text-white tracking-wider">
                    <strong>{mayus}</strong>
                </h3>
                {/* Next type *
                <Link 
                    href={`/media/${otherTypes[1]}`}
                    className="flex items-center text-white hover:opacity-75"
                >
                    <h3 className="uppercase text-sm text-lightText text-bold shadow-2xl">{otherTypes[1]}</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )

}

*/