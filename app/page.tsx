import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:Cardo, serif]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/000_Doors_Background.webp")` }}
      />
      <h3 className="relative"><i>· Click on a door and explore ·</i></h3>
      <div className="relative flex w-full p-0 justify-center gap-36 items-start">
        <div className='relative bg-red'>
          <Link href="/neuroscientist"><h3>NEUROSCIENTIST</h3></Link>
        </div>
        <div className='relative bg-blue'>
          <Link href="/author"><h3>AUTHOR</h3></Link>
        </div>
        <div>
          <Link href="/musician"><h3>MUSICIAN</h3></Link>
        </div>
      </div>
    </main>
  );
}

/*
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