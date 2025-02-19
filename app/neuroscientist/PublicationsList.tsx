import { Publication } from './publication-data';
import Link from 'next/link';

export default function PublicationList({ publications }: { publications: Publication[]}) {
    return(
        <main> 
            {publications.map(publication => (
                <div key={publication.id}>
                    <Link href={`/neuroscience/${publication.id}`}>
                        <h3>{publication.title} ({publication.year})</h3>
                        <p>{publication.abstract}</p>
                        <button>See more</button>
                    </Link>
                </div>
            ))}
        </main>
    )
}