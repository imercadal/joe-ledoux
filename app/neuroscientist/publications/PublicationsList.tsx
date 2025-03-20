import { Publication } from './publication-data';

export default function PublicationList({ publications }: { publications: Publication[]}) {
    return(
        <main className='max-w-4xl'> 
            {publications.map(publication => (
                <div key={publication.id} className='mb-8'>
                    <a 
                        href={publication.link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <p>{publication.authors}.</p>
                        <p><strong>{publication.title}</strong>. {publication.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}.</p>
                    </a>
                </div>
                
            ))}
        </main>
    )
}