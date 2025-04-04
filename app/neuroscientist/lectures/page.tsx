import LectureList from './LectureList';
import { lectures, Lecture } from './lecture-data';
import ScrollToTopButton from '@/app/components/ScrollToTop';

export default function LecturesPage(){

    const lecturesByYear = lectures.reduce((acc, lecture) => {
        const year = lecture.date.getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(lecture);
        return acc;
      }, {} as Record<number, Lecture[]>);

    const years = Object.keys(lecturesByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return(
        <main className='bg-darkest'>
            {/* Header Banner */}
            <div className="relative h-40 bg-cover bg-center bg-[url('/220_Neuro_Lectures.webp')] flex items-center justify-center">
                <h3 className="font-bold">LECTURES</h3>
            </div>

            {/* Navigation for Years */}
            <div className="h-12 sticky top-0 flex justify-center items-center bg-lightAccent">
                <ul className="flex gap-4 text-xs text-accent font-azeret">
                    {years.map((year) => (
                        <li key={year} className='hover:underline'>
                            <a href={`#year-${year}`}>{year}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Lecture Groups by Year */}
            <div className='p-6 md:px-16 mx-auto max-w-3xl text-lightText'>
                {years.map((year) => (
                    <div key={year} id={`year-${year}`} className='mb-8'>
                        <p className="mb-4 px-1 inline-block text-sm font-azeret font-bold bg-accent text-lightText">{year}</p>
                        <LectureList lectures={ lecturesByYear[year] }/>
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
        </main>
    )
}