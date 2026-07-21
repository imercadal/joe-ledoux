import type { Metadata } from 'next';
import LectureList from '../../neuroscientist/lectures/LectureList';
import { lectures, Lecture } from '../../neuroscientist/lectures/lecture-data';
import ScrollToTopButton from '@/app/components/ScrollToTop';
import YearAnchorNav from '@/app/components/YearAnchorNav';

export const metadata: Metadata = {
  title: 'Author Lectures',
  description: 'Lectures by Joseph LeDoux discussing his books on neuroscience and the mind.',
  openGraph: { url: 'https://www.joseph-ledoux.com/author/lectures' },
};

export default function AuthorLecturesPage(){

    const lecturesByYear = lectures.reduce((acc, lecture) => {
        const year = lecture.date.getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(lecture);
        return acc;
      }, {} as Record<number, Lecture[]>);

    Object.values(lecturesByYear).forEach(list =>
        list.sort((a, b) => b.date.getTime() - a.date.getTime())
    );

    const years = Object.keys(lecturesByYear)
        .map(Number)
        .sort((a, b) => b - a);

    return(
        <main className='bg-darkest'>
            <div className="relative h-40 bg-cover bg-center bg-[url('/220_Neuro_Lectures.webp')] flex items-center justify-center">
                <h3 className="font-bold">LECTURES</h3>
            </div>
            <YearAnchorNav years={years} />
            <div className='p-6 md:px-16 mx-auto max-w-3xl text-lightText'>
                {years.map((year) => (
                    <div key={year} id={`year-${year}`} className='mb-8 scroll-mt-[var(--year-anchor-offset)]'>
                        <p className="mb-4 px-1 inline-block text-sm font-azeret font-bold bg-accent text-lightText">{year}</p>
                        <LectureList lectures={ lecturesByYear[year] }/>
                    </div>
                ))}
            </div>
            <ScrollToTopButton />
        </main>
    )
}