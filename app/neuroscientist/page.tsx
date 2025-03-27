import ImageGrid from '../components/ImageGrid';
import NeuroImageGrid from './NeuroImageGrid';
import { Publication } from './publications/publication-data';

export const dynamic = 'force-dynamic';

export default async function NeuroscientistPage(){
    const images = [
        {
            id: "1",
            src: "/scientistPictures/SciencePhoto_5.png",
            alt: "Picture of Molecules",
            width: 1120, 
            height: 537,
        },
        {
            id: "2",
            src: "/scientistPictures/SciencePhoto_2.png",
            alt: "Picture of Snake",
            width: 2448,
            height: 2231,
        },
        {
            id: "3",
            src: "/scientistPictures/SciencePhoto_3.png",
            alt: "Microscope",
            width: 436,
            height: 542,
        },
        {
            id: "4",
            src: "/scientistPictures/SciencePhoto_1.png",
            alt: "Microscope",
            width: 1234,
            height: 986,
        },
        {
            id: "5",
            src: "/scientistPictures/SciencePhoto_4.png",
            alt: "Microscope",
            width: 1272,
            height: 1032,
        },
        {
            id: "6",
            src: "/scientistPictures/SciencePhoto_8.png",
            alt: "Picture of Tissue under Microscope",
            width: 462,
            height: 482,
        },
        {
            id: "7",
            src: "/scientistPictures/SciencePhoto_7.png",
            alt: "Microscope",
            width: 1006,
            height: 754,
        },
    ]

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
        <main className='p-4 bg-lightText'>
            <NeuroImageGrid images={images} />
        </main>
    )
}