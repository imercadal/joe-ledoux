import NewsCard from "../components/NewsCard";

export default function NewsPage(){

    return(
      <main className="p-4 bg-lightText min-h-screen">
        <h1 className="max-w-4xl mx-auto mt-4 sm:mt-12 text-3xl font-bold text-dark">Forthcoming</h1>
        <NewsCard
          href="/neuroscientist/lectures"
          title='Keynote Lecture, Emotional Intelligence conference, Manchester, UK'
          tag="Lectures"
          date={new Date('2025-07-14')}
        />
        <NewsCard
          href="https://www.ispne.net/2025-annual-meeting"
          title="Keynote Lecture at the International Society for Psychoneuroendocrinology, New Orleans"
          tag="Lectures"
          date={new Date('2025-09-03')}
          external
        />

        <NewsCard
          href="/musician/gigs"
          title="So We Are performance after Herzog’s *Theatre of Thought* screening, Broad Theatre, New Orleans"
          tag="Performance"
          date={new Date('2025-09-04')}
        />

        <NewsCard
          href="https://www.bergamoscienza.it/en/festival-corrente/23rd-edition-bergamoscienza-2025"
          title="Lecture at BergamoScienza Science Festival, Bergamo, Italy"
          tag="Lectures"
          date={new Date('2025-09-04')}
          external
        />

        <NewsCard
          href="/neuroscientist/lectures"
          title="Lecture to Athena Cultura, Mendrisio, Switzerland"
          tag="Lectures"
          date={new Date('2025-10-07')}
        />

        <NewsCard
          href="https://neuroscience.uct.ac.za/events/society-neuroscience-sfn-meeting-2025"
          title="History of Neuroscience Lecture, Society for Neuroscience, San Diego, CA"
          tag="Lectures"
          date={new Date('2025-11-18')}
          external
        />
        <h1 className="max-w-4xl mx-auto my-4 sm:mt-12 text-3xl font-bold text-dark">Past events</h1>
        <NewsCard
          href="/author/67e455e79d343bd2f8bfe258"
          imgSrc="/319_Starting_Over_Cover.webp"
          title="Joe signs with MIT Press to publish his memoir *(Just Like) Starting Over*"
          tag="Books"
          date={new Date('2025-04-30')}
        />
        <NewsCard
          href="/retirement"
          imgSrc="/retirementPictures/RetirementPartyPhoto_4.jpg"
          title="Joe's Career Celebration at the Clive Davis Institute, Brooklyn"
          tag="News"
          date={new Date('2024-12-06')}
        />
    </main>
    )
}

/**
      <main className='p-4 bg-lightText min-h-screen'>
        <Link href="/retirement">
        <div className="sm:flex max-w-4xl mx-auto border-b border-gray-300 pb-1 mb-8 sm:mb-12">
          <div className="sm:py-4 flex-shrink-0">
            <Image
              src="/retirementPictures/RetirementPartyPhoto_4.jpg"
              alt=""
              width={204}
              height={154}
              className="border-none object-contain rounded-md w-full h-full max-h-56"
            />
          </div>
          <div className="w-full flex flex-col mt-4 sm:pl-6 sm:pb-1 sm:justify-end">
            <p className="text-xs text-accent font-azeret">NEWS</p>
            <div className="w-full flex items-end justify-between">
              <h2 className="mb-2 mt-2 text-xl font-bold inline">Joe's Retirement Party</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-accent size-8 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
          </div>
        </div>
        </Link>
        <a href='https://www.thankbox.com/app/thankbox/HJNGhcoD' target='_blank'>
        <div className="sm:flex max-w-4xl mx-auto border-b border-gray-300 mb-12">
          <div className="sm:py-4">
            <Image
              src="/600_Thankbox.png"
              alt=""
              width={204}
              height={154}
              className="border-none object-contain rounded-md w-full h-full max-h-56"
            />
          </div>
          <div className="w-full flex flex-col mt-4 sm:pl-6 sm:pb-1 sm:justify-end">
            <p className="text-xs text-accent font-azeret">NEWS</p>
            <div className="w-full flex items-end justify-between">
              <h2 className="mb-2 mt-2 text-xl font-bold inline">A beautiful Thankbox</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-accent size-8 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
          </div>
        </div>
        </a>
        <Link href='/author/67e455e79d343bd2f8bfe258'>
        <div className="sm:flex max-w-4xl mx-auto border-b border-gray-300 mb-12">
          <div className="sm:py-4">
            <Image
              src="/319_Starting_Over_Cover.webp"
              alt=""
              width={204}
              height={154}
              className="border-none object-contain rounded-md w-full h-full max-w-56"
            />
          </div>
          <div className="w-full flex flex-col mt-4 sm:pl-6 sm:pb-1 sm:justify-end">
            <p className="text-xs text-accent font-azeret">BOOKS</p>
            <div className="w-full flex items-end justify-between">
              <h2 className="mb-2 mt-2 text-xl font-bold inline">New book coming soon: "Starting Over"</h2>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-accent size-8 inline">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </div>
          </div>
        </div>
        </Link>
      </main>

-----------------------
      <main className='p-4 bg-lightText'>
        <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
            
            {/* Section 1 *
            <div className="p-2 lg:col-span-4">
              <div className="relative h-full overflow-hidden rounded-lg ring-1 ring-black/10 bg-white">
                <NewsImageGrid images={images} />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-indigo-600">Events</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Joe's Retirement Party</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur,
                    maximus egestas sem pellentesque.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 *
            <div className="p-2 lg:col-span-2">
              <div className="relative h-full overflow-hidden rounded-lg ring-1 ring-black/10 bg-white">
                <img
                  alt="New Book Starting Over"
                  src="/319_Starting_Over_Cover.webp"
                  className="w-full object-cover object-left lg:object-right"
                />
                <div className="p-10 pt-4">
                  <h3 className="text-sm/4 font-semibold text-indigo-600">Releases</h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">New Book: Starting Over</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae
                    odio.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
 * 
 
        <main className='p-4 bg-lightText'>

            <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
                <div className="p-6 relative lg:col-span-4">
                    <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                    <ImageGrid images={images} />
                    <div className="p-10 pt-4">
                        <h3 className="text-sm/4 font-semibold text-accent">Events</h3>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Joe's Retirement Party</p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus
                        egestas sem pellentesque.
                        </p>
                    </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                </div>
                <div className="relative lg:col-span-2">
                    <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem] lg:rounded-tl-[2rem]" />
                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                    <img
                        alt="New Book Starting Over"
                        src="/319_Starting_Over_Cover.webp"
                        className="h-80 object-cover object-left lg:object-right"
                    />
                    <div className="p-10 pt-4">
                        <h3 className="text-sm/4 font-semibold text-accent">Releases</h3>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">New Book: Starting Over</p>
                        <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                        Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa, laoreet dapibus ex elit vitae
                        odio.
                        </p>
                    </div>
                    </div>
                    <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
                </div>
                </div>
            </div>

        </main>
 */