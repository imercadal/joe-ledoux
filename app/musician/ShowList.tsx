import { Show } from './show-data';

export default function ShowList({ shows }: {shows: Show[]}){
    return(
        <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-3 sm:gap-x-6 xl:gap-x-8">
            {shows.map((show) => (

                <li key={show._id} className="sm:flex border p-4 rounded shadow">
                <div>
                    <p><strong>{show.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} {show.date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(' ', '').toLowerCase()}</strong></p>
                    <p className='text-xs mb-2'>{show.band}</p>
                    <h4 className="text-lg font-bold">{show.title}</h4>
                    <h2 className='mb-2'>{show.venue}</h2>
                    <p className='text-xs'>{show.address ? show.address : null }</p>
                    <p className="text-xs mt-1">
                    {show.notes}
                    </p>
                </div>
            </li>
            ))}
        </ul>
    )
}