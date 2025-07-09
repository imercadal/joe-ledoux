import PublicationList from "./PublicationsList";
import { Publication } from './publication-data';
import ScrollToTopButton from "@/app/components/ScrollToTop";

export const dynamic = 'force-dynamic';

export default async function PublicationsPage(){

        let response;
        try { 
            response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/publications');
        } catch (err) {
            console.log("Network error:", err)
            throw new Error("Network error while fetching publications")
        }
    
        if(!response.ok){
            console.log("Fetch error:", response.status);
            throw new Error(`Failed to fetch books: ${response.statusText}`)
        }
        
        let publicationsData;
        try {
            publicationsData = await response.json()
        } catch (err) {
            console.error("JSON parsing error:", err)
            throw new Error("Error parsing JSON response from API")
        }
    
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
        <main className="bg-darkest">
            <div className="relative h-40 z-10 bg-cover bg-center bg-[url('/210_Neuro_Pubs.webp')] flex items-center justify-center">
                <h3 className="font-bold">PUBLICATIONS</h3>
            </div>
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
                        <PublicationList publications={ publicationsByYear[year] }/>
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
        </main>
    )
}
