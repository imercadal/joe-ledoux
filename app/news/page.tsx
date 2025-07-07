import NewsCard from "../components/NewsCard";
import Link from 'next/link';

export default function NewsPage(){

    return(
      <main className="p-4 bg-lightText min-h-screen">
        <h1 className="max-w-4xl mx-auto mt-4 sm:mt-12 text-3xl font-bold text-dark">Forthcoming</h1>
        <NewsCard
          href="/neuroscientist/lectures"
          title='Keynote Lecture, Emotional Intelligence conference, Manchester, UK'
          tag="Lectures"
          date={new Date('2025-07-14')}
        />
        <NewsCard
          href="https://www.ispne.net/2025-annual-meeting"
          title="Keynote Lecture at the International Society for Psychoneuroendocrinology, New Orleans"
          tag="Lectures"
          date={new Date('2025-09-03')}
          external
        />

        <NewsCard
          href="/musician/gigs"
          title="So We Are performance after Herzog’s *Theatre of Thought* screening, Broad Theatre, New Orleans"
          tag="Performance"
          date={new Date('2025-09-04')}
        />

        <NewsCard
          href="https://www.bergamoscienza.it/en/festival-corrente/23rd-edition-bergamoscienza-2025"
          title="Lecture at BergamoScienza Science Festival, Bergamo, Italy"
          tag="Lectures"
          date={new Date('2025-09-04')}
          external
        />

        <NewsCard
          href="/neuroscientist/lectures"
          title="Lecture to Athena Cultura, Mendrisio, Switzerland"
          tag="Lectures"
          date={new Date('2025-10-07')}
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