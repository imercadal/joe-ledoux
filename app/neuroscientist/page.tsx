import PublicationList from "./PublicationsList";
import { Publication } from './publication-data';

export default async function NeuroscientistPage(){
    const response = await fetch('http://localhost:3000/api/publications');
    const publicationsData = await response.json()

    const publications: Publication[] = publicationsData.map((pub: Publication) => ({
        ...pub,
        date: new Date(pub.date),
    }));

    const publicationsByYear = publications.reduce((acc, publication) => {
        const year = publication.date.getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(publication);
        return acc;
    }, {} as Record<number, Publication[]>);
    
      const years = Object.keys(publicationsByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return(
        <main>
            <div className="relative h-40 bg-cover bg-center bg-[url('/210_Neuro_Pubs.webp')] flex items-center justify-center">
                <h3 className="font-bold">PUBLICATIONS</h3>
            </div>

            {/* Navigation for Years */}
            <div className="h-12 flex justify-center items-center bg-lightAccent">
                <ul className="flex gap-4 text-xs text-accent font-azeret">
                    {years.map((year) => (
                        <li key={year} className='hover:underline'>
                            <a href={`#year-${year}`}>{year}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Lecture Groups by Year */}
            <div className='px-12 py-6 md:px-64 text-lightText bg-darkest'>
                {years.map((year) => (
                    <div key={year} id={`year-${year}`} className='mb-8'>
                        <p className="mb-4 px-1 inline-block text-sm font-azeret font-bold bg-accent text-lightText">{year}</p>
                        <PublicationList publications={ publicationsByYear[year] }/>
                    </div>
                ))}
            </div>
        </main>
    )
}