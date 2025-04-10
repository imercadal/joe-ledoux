import { notFound } from 'next/navigation';
import Link from 'next/link';
import FilterableMedia from '../FilterableMedia';
import { MediaItem } from '../media-data';
import Banner from '../../components/Banner';
import { bannerImages } from '@/config/bannerConfig';

export default async function MediaPage({ params } : {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = new URL('/api/media', baseUrl);
  apiUrl.searchParams.set('type', type);

  try {
    const response = await fetch(apiUrl.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`);
    }

    const media: MediaItem[] = await response.json();
    
    media.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    const bannerImage = bannerImages[type];
    if (!bannerImage) {
      notFound();
    }
    
    return (
      <section className="bg-darkest min-h-[calc(100vh-170px)]">
        <Banner imageUrl={bannerImage} title={type} />
        <FilterableMedia initialMedia={media} />
      </section>
    );
  } catch (error) {
    console.log('Error fetching media:', error);
    return (
      <section className="bg-darkest min-h-[calc(100vh-170px)]">
        <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
          <h3 className="font-bold uppercase">{type}</h3>
        </div>
        <div className="p-32 min-h-3/4 flex justify-center">
          <p className="text-dark text-3xl">Failed to load media. Please try again later.</p>
          <Link href="/">
            <p>Back to home</p>
          </Link>
        </div>
      </section>
    );
  }
}