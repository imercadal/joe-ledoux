import ImageGrid from '../components/ImageGrid';
import { Publication } from './publications/publication-data';

export const dynamic = 'force-dynamic';

export default async function NeuroscientistPage(){
    const imageNames=["SciencePhoto_1", "SciencePhoto_2", "SciencePhoto_3", "SciencePhoto_4", "SciencePhoto_5", "SciencePhoto_6", "SciencePhoto_7", "SciencePhoto_8", "SciencePhoto_9"]
 
    let response;
    try { 
        response = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/publications');
    } catch (err) {
        console.log("Network error:", err);
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
        console.error("JSON parsing error:", err);
        throw new Error("Error parsing JSON response from API");
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
        <main className='p-4'>
            <ImageGrid images={imageNames} folder="scientistPictures" />
        </main>
    )
}