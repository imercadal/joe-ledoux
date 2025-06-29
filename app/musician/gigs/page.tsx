'use client'
import ScrollToTopButton from '@/app/components/ScrollToTop';
import { shows, Show } from '../show-data';
import FullShowList from './FullShowList';

export default function GigsPage() {
  const sortedShows = [...shows].sort((a, b) => b.date.getTime() - a.date.getTime());

  const showsByYear = shows.reduce((acc, show) => {
    const year = show.date.getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(show)
    return acc
  }, {} as Record<number, Show[]>)

  const years = Object.keys(showsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="bg-lightAccent">
        <div className="relative h-40 z-10 bg-cover bg-center bg-[url('/220_Neuro_Lectures.webp')] flex flex-col items-center justify-center">
            <h3 className="font-bold">GIGS</h3>
            <h3 className="block italic  m-0 mt-2 px-16 md:px-0 text-sm text-center"><b>Note: </b>For this list, ‘Amygdaloids’ means the full band, the acoustic duos Half Full and So We Are, and solo performances by Joe.</h3>
        </div>
        {/* Navigation for Years */}
        <div className="sticky top-0 py-2 md:py-3 px-4 md:px-0 flex justify-center items-center bg-lightAccent">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 w-full mx-auto max-w-2xl justify-center text-xs text-accent font-azeret">
                {years.map((year) => (
                    <li key={year} className='hover:underline'>
                        <a href={`#year-${year}`}>{year}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='p-6 md:px-16 mx-auto max-w-3xl text-lightText'>
            {years.map((year) => (
                <div key={year} id={`year-${year}`} className='mb-8'>
                    <p className="mb-4 px-1 inline-block text-sm font-azeret font-bold bg-accent text-lightText">{year}</p>
                    <FullShowList shows={ showsByYear[year] }/>
                    </div>
            ))}
        </div>
    <div className='max-w-4xl mx-auto py-2 text-darkest'>
      <ul role="list" className="grid grid-cols-1 mx-4 lg:mx-0 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8">
        {sortedShows.map((show) => (
          <li key={show._id} className="sm:flex p-4 rounded shadow-lg">
            <div>
              <p>
                <strong>
                  {show.date.toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })} - {show.date.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                  }).replace(' ', '').toLowerCase()}
                </strong>
              </p>
              <p className='text-xs mb-2'>{show.band}</p>
              <h4 className="text-lg font-bold">{show.title}</h4>
              <h2 className='mb-2'>{show.venue}</h2>
              {show.address && <p className="text-xs">{show.address}</p>}
              <p className="text-xs mt-1">{show.notes}</p>
            </div>
          </li>
        ))}
      </ul>
      <ScrollToTopButton/>
    </div>
    </div>
  );
}