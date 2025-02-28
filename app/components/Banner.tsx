import Image from 'next/image';
import React from 'react';

interface BannerProps {
    imageUrl: string;
    title: string;
}

export default function Banner({ imageUrl, title }: BannerProps){
    const mayus = title.toUpperCase()

    return(
        <div className="w-full h-40 relative">
            <Image src={imageUrl} alt="Media Banner" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="m-0 text-xl text-white tracking-wider">
                <strong>{mayus}</strong>
            </h3>
            </div>
        </div>
    )

}