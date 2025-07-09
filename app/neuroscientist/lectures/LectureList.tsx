import { Lecture } from './lecture-data';
import Link from 'next/link';

export default function LectureList({ lectures }: { lectures: Lecture[]}) {
    return(
        <main className='max-w-4xl'> 
            {lectures.map(lecture => (
                <div key={lecture.id} className='mb-8'>
                        <p>{lecture.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                        {lecture.urlToLecture ? (
                            <Link
                            href={lecture.urlToLecture}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="hover:opacity-75"
                            >
                            <p>{lecture.event}</p>
                            <p>
                                <strong>{`"${lecture.title}"`}</strong>
                            </p>
                            </Link>
                        ) : (
                            <>
                            <p>{lecture.event}</p>
                            <p>
                                <strong>{`"${lecture.title}"`}</strong>
                            </p>
                            </>
                        )}
                </div>
            ))}
        </main>
    )
}