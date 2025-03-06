"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);
    const handler = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <Script
        src="/imageMapResizer.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.imageMapResize) {
            window.imageMapResize('map');
          }
        }}
      />

    <main className=" relative items-center justify-center min-h-screen p-0 md:p-8 gap-12  font-[family-name:Cardo, serif]">
    <picture className="block md:absolute md:inset-0">
      {/* For medium screens and up */}
      <source media="(min-width: 768px)" srcSet="000_Doors_Background.webp" />
      {/* For smaller screens */}
      <source media="(max-width: 767px)" srcSet="000_Doors_Background_small.webp" />
      <img 
        src="000_Doors_Background.webp" 
        useMap="#image-map"
        className='w-full h-auto md:h-full md:object-cover'
        alt="Doors Background"
      />
    </picture>
        <div 
          className="absolute w-full flex justify-center transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "50%",
            top: "8%"
          }}
        >
          <span className="font-cardo text-white tracking-wide font-sm md:font-lg"><i>· Click a door and explore ·</i></span>
        </div>

        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[22%] top-[15%] md:left-[28%] md:top-[17%]"
        >
          <span className='font-cardo text-white tracking-wide font-xs md:font-lg'>NEUROSCIENTIST</span>
        </div>

        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[55%] top-[15%] md:left-[50%] md:top-[17%]"
        >
          <span className='font-cardo text-white tracking-wide font-xs md:font-lg'>AUTHOR</span>
        </div>

        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[82%] top-[15%] md:left-[72%] md:top-[17%]"

        >
          <span className='font-cardo text-white tracking-wide font-xs md:font-lg'>MUSICIAN</span>
        </div>

        {isDesktop ? (
          <map name="image-map">
            <area target="" alt="Go to Neuroscientist's Page" title="Go to Neuroscientist's Page" href="/neuroscientist" coords="447,205,683,724" shape="rect"/>
            <area target="" alt="Go to Author's Page" title="Go to Author's Page" href="/author" coords="842,207,1083,727" shape="rect"/>
            <area target="" alt="Go to Musician's Page" title="Go to Musician's Page" href="/musician" coords="1258,210,1480,722" shape="rect"/>
          </map>
        ) : (
          <map name="image-map">
              <area target="" alt="Go to Neuroscientist's Page" title="Go to Neuroscientist's Page" href="/neuroscientist" coords="74,396,308,915" shape="rect"/>
              <area target="" alt="Go to Author's Page" title="Go to Author's Page" href="/author" coords="468,398,706,914" shape="rect"/>
              <area target="" alt="Go to Musician's Page" title="Go to Musician's Page" href="/musician" coords="886,401,1102,917" shape="rect"/>
          </map>
        )
      }
    </main>
    </>
  );
}

/*
          style={{
            left: "71%",
            top: "23%"
          }}


<main className=" relative bg-cover bg-center bg-[url('/000_Doors_Background.webp')] items-center justify-items-center min-h-screen p-8 gap-12 sm:p-20 font-[family-name:Cardo, serif]">

      <h3 className="relative"><i>· Click on a door and explore ·</i></h3>
      <div className="relative flex w-full h-8 mt-16 mr-8 p-0 justify-center gap-40 items-baseline">
        <div className='relative'>
          <Link href="/neuroscientist"><h3>NEUROSCIENTIST</h3></Link>
        </div>
        <div className='relative mr-10'>
          <Link href="/author"><h3>AUTHOR</h3></Link>
        </div>
        <div>
          <Link href="/musician"><h3>MUSICIAN</h3></Link>
        </div>
      </div>


      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/000_Doors_Background.webp")` }}
      />


    <main className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:Cardo, serif]">
     Background Image
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/000_Doors_Background.webp")` }}
      />

      Foreground Content
      <div className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-white text-4xl">Welcome</h1>
      </div>
    </main>

    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:Cardo, serif]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </div>
      <div
                    className={`absolute inset-0 bg-cover bg-center`}
                    style={{ backgroundImage: `url(${"/000_Doors_Background.webp"})` }}
                />
    </main>
*/