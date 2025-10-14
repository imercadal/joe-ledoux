import NewsCard from "../components/NewsCard";
import Link from 'next/link';

export default function NewsPage(){

    return(
      <main className="p-4 bg-lightText min-h-screen">
        <h1 className="max-w-4xl mx-auto mt-4 sm:mt-12 text-3xl font-bold text-dark">Forthcoming</h1>
        <NewsCard 
          href="https://mailchi.mp/bbrfoundation/2025-symposium-goldman-rakic-prize-4241159?e=08baf21cb2"
          imgSrc="/news/2025-10_Goldman-Rakic-Prize.png"
          title="Joe Wins the 2025 Goldman-Rakic Prize for Outstanding Achievements in Cognitive Science."
          tag="Awards"
          date={new Date('2025-10-24')}
          external
        />
        <NewsCard
          href="https://neuroscience.uct.ac.za/events/society-neuroscience-sfn-meeting-2025"
          title="History of Neuroscience Lecture, Society for Neuroscience, San Diego, CA"
          tag="Lectures"
          date={new Date('2025-11-18')}
          external
        />

        <h1 className="max-w-4xl mx-auto my-4 sm:mt-12 text-3xl font-bold text-dark">Past events</h1>
        <NewsCard
          href="/author/67e455e79d343bd2f8bfe258"
          imgSrc="/319_Starting_Over_Cover.webp"
          title="Joe signs with MIT Press to publish his memoir *(Just Like) Starting Over*"
          tag="Books"
          date={new Date('2025-04-30')}
        />
        <NewsCard
          href="/retirement"
          imgSrc="/retirementPictures/RetirementParty_1_short.webp"
          title="Joe's Career Celebration at the Clive Davis Institute, Brooklyn"
          tag="News"
          date={new Date('2024-12-06')}
        />
        <Link href='/'>
          <h1 className="max-w-4xl mx-auto my-6 sm:mt-12 text-3xl font-bold text-dark text-right">
            Back to home
          </h1>
        </Link>
    </main>
    )
}