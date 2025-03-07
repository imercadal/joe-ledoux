import { Lecture } from './lecture-data';
import Link from 'next/link';

export default function LectureList({ lectures }: { lectures: Lecture[]}) {
    return(
        <main> 
            {lectures.map(lecture => (
                <div key={lecture.id} className='mb-8'>
                        <p>{lecture.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                    <Link href={`/neuroscience/lectures/${lecture.id}`} className='hover:opacity-75'>
                        <p>{lecture.event}</p>
                        <p><strong> {`"${lecture.title}"`}</strong></p>
                    </Link>
                </div>
            ))}
        </main>
    )
}