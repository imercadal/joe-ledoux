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
            <div className="relative h-40 bg-cover bg-center bg-[url('/220_Neuro_Lectures.webp')] flex items-center justify-center">
                <h3 className="font-bold">LECTURES</h3>
            </div>
            <div className="sticky top-0 py-2 md:py-3 px-4 md:px-0 flex justify-center items-center bg-lightAccent">
                <ul className="flex flex-wrap gap-x-4 gap-y-2 max-w-2xl text-xs text-accent font-azeret">
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
                        <LectureList lectures={ lecturesByYear[year] }/>
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
        </main>
    )
}