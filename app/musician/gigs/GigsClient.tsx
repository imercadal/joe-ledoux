'use client'
import ScrollToTopButton from '@/app/components/ScrollToTop';
import { shows, Show } from '../show-data';
import FullShowList from './FullShowList';

export default function GigsClient() {
  const sortedShows = [...shows].sort((a, b) => b.date.getTime() - a.date.getTime());

  const showsByYear = sortedShows.reduce((acc, show) => {
    const year = show.date.getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(show)
    return acc
  }, {} as Record<number, Show[]>)

  const allYears = new Set([...Object.keys(showsByYear)
    .map(Number), 2020, 2021]);
  const years = Array.from(allYears)
    .sort((a, b) => b - a);

  return (
    <div className="bg-lightAccent">
        <div className="relative h-40 z-10 bg-cover bg-center bg-[url('/220_Neuro_Lectures.webp')] flex flex-col items-center justify-center">
            <h3 className="font-bold">GIGS</h3>
            <h3 className="block italic  m-0 mt-2 px-16 md:px-0 text-sm text-center"><b>Note: </b>For this list, 'Amygdaloids' means the full band, the acoustic duos Half Full and So We Are, and solo performances by Joe.</h3>
        </div>
        {/* Navigation for Years */}
        <div className="sticky top-0 py-2 md:py-3 px-4 md:px-0 flex justify-center items-center bg-lightAccent">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 w-full mx-auto max-w-2xl justify-center text-xs text-accent font-azeret">
                {years.map((year) => (
                    <li key={year} className='hover:underline'>
                        <a href={`#year-${year}`}>
                          {year}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='p-6 md:px-16 mx-auto max-w-3xl text-lightText'>
            {years.map((year) => (
                <div key={year} id={`year-${year}`} className='mb-8'>
                    <p className="mb-4 px-1 inline-block text-sm font-azeret font-bold bg-accent text-lightText">
                    {year === 2020 || year === 2021 ? `${year} PANDEMIC PAUSE` : year }
                    </p>
                    {showsByYear[year] ? (
                      <FullShowList shows={ showsByYear[year] }/>
                    ) : (
                      <p className='italic text-sm text-muted'>No performances this year.</p>
                    )}
                    </div>
            ))}
        </div>
    <div className='max-w-4xl mx-auto py-2 text-darkest'>
      <ScrollToTopButton/>
    </div>
    </div>
  );
}
