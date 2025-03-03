"use client"

import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
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

    <main className=" relative items-center justify-center min-h-screen p-8 gap-12 sm:p-20 font-[family-name:Cardo, serif]">

      <img 
        src="000_Doors_Background.webp" 
        useMap="#image-map"
        className='absolute inset-0 w-full h-full object-cover'
      />
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: "50%",
            top: "10%"
          }}
        >
          <h3 className="tracking-wide"><i>· Click a door and explore ·</i></h3>
        </div>

        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[20%] top-[20%] md:left-[29%] md:top-[23%]"
        >
          <h3>NEUROSCIENTIST</h3>
        </div>

        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[50%] top-[20%] md:top-[23%]"
        >
          <h3>AUTHOR</h3>
        </div>

        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[75%] top-[20%] md:left-[71%] md:top-[23%]"

        >
          <h3>MUSICIAN</h3>
        </div>

        <map name="image-map">
          <area target="" alt="Go to Neuroscientist's Page" title="Go to Neuroscientist's Page" href="/neuroscientist" coords="449,395,679,909" shape="rect"/>
          <area target="" alt="Go to Author's Page" title="Go to Author's Page" href="/author" coords="840,399,1076,913" shape="0"/>
          <area target="" alt="Go to Musician's Page" title="Go to Musician's Page" href="/musician" coords="1261,401,1478,920" shape="0"/>
        </map>

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