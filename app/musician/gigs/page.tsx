'use client'
import ScrollToTopButton from '@/app/components/ScrollToTop';
import { shows } from '../show-data';

export default function GigsPage() {
  const sortedShows = [...shows].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className='max-w-4xl mx-auto py-6'>
      <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-x-6 xl:gap-x-8">
        {sortedShows.map((show) => (
          <li key={show._id} className="sm:flex border p-4 rounded shadow">
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
  );
}