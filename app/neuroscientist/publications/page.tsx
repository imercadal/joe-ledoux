import type { Metadata } from 'next';
import PublicationList from "./PublicationsList";
import { Publication } from './publication-data';
import ScrollToTopButton from "@/app/components/ScrollToTop";
import YearAnchorNav from '@/app/components/YearAnchorNav';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Complete list of peer-reviewed publications by Joseph LeDoux — 244 papers on emotion, memory, and consciousness.',
  openGraph: { url: 'https://www.joseph-ledoux.com/neuroscientist/publications' },
};

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
            <YearAnchorNav years={years} />
            <div className='p-6 md:px-16 mx-auto max-w-3xl text-lightText'>
                {years.map((year) => (
                    <div key={year} id={`year-${year}`} className='mb-8 scroll-mt-[var(--year-anchor-offset)]'>
                        <p className="mb-4 px-1 inline-block text-sm font-azeret font-bold bg-accent text-lightText">{year}</p>
                        <PublicationList publications={ publicationsByYear[year] }/>
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
        </main>
    )
}
