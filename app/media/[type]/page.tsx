import { notFound } from 'next/navigation';
import Link from 'next/link';
import FilterableMedia from '../FilterableMedia';
import { MediaItem } from '../media-data';
import Banner from '../../components/Banner';
import { bannerImages } from '@/config/bannerConfig';

export default async function MediaPage({ 
params,
} : {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = new URL('/api/media', baseUrl);
  apiUrl.searchParams.set('type', type);

  try {
    const response = await fetch(apiUrl.toString(), { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`);
    }
    const media: MediaItem[] = await response.json();
    
    const bannerImage = bannerImages[type];
    if (!bannerImage) {
      notFound();
    }
    
    return (
      <main className="bg-darkest">
        <Banner imageUrl={bannerImage} title={type} />
        <FilterableMedia initialMedia={media} />
      </main>
    );
  } catch (error) {
    console.log('Error fetching media:', error);
    return (
      <main className="bg-darkest">
        <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
          <h3 className="font-bold uppercase">{type}</h3>
        </div>
        <div className="p-32 min-h-3/4 flex justify-center">
          <p className="text-dark text-3xl">Failed to load media. Please try again later.</p>
          <Link href="/">
            <p>Back to home</p>
          </Link>
        </div>
      </main>
    );
  }
}


/*
import { notFound } from 'next/navigation';
import TagSidebar from '../../components/TagSidebar';
import MediaList from '../MediaList';
import { MediaItem } from '../media-data';
import Link from 'next/link';

interface MediaPageProps {
  params: { type: string };
  searchParams: { tag?: string };
}

export default async function MediaPage({ params: { type }, searchParams }: MediaPageProps) {
  const { tag } = searchParams;

  // Set up the base URL and construct the API URL with both type and tag filters
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = new URL('/api/media', baseUrl);

  // Set the type parameter from the route
  apiUrl.searchParams.set('type', type);
  // If a tag filter is provided, add it as well
  if (tag) {
    apiUrl.searchParams.set('tag', tag);
  }

  try {
    const response = await fetch(apiUrl.toString(), { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`);
    }
    const media: MediaItem[] = await response.json();

    return (
      <main className="bg-lightText">
        <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
          <h3 className="font-bold uppercase">{type}</h3>
        </div>
        <div className='md:pw-24'>
            <TagSidebar currentTag={tag} />
            <MediaList media={media} />
        </div>
      </main>
    );
  } catch (error) {
    console.log('Error fetching media:', error);
    return (
      <main className="bg-lightText">
        <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
          <h3 className="font-bold uppercase">{type}</h3>
        </div>
        <div className="p-32 min-h-3/4 flex justify-center">
          <p className="text-dark text-3xl">Failed to load media. Please try again later.</p>
          <Link href="/">
            <p>Back to home</p>
          </Link>
        </div>
      </main>
    );
  }
}


/*
import { notFound } from 'next/navigation';
import MediaList from '../MediaList';
import Banner from '../../components/Banner'
import { MediaItem } from '../media-data';
import { bannerImages } from '@/config/bannerConfig';

interface MediaTypePageProps {
  params: { type: string };
}

export default async function MediaTypePage({ params: { type } }: MediaTypePageProps) {
    const bannerImage = bannerImages[type]
    if(!bannerImage){
        notFound()
    }

    const title = type.toUpperCase()

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const apiUrl = new URL(`/api/media?type=${type}`, baseUrl).toString();

    const res = await fetch(apiUrl, { cache: 'no-store' });

    if (!res.ok) {
        notFound();
    }

    const media: MediaItem[] = await res.json();

    if (!media || media.length === 0) {
        notFound();
    }

    return (
        <main className='bg-dark'>

            <Banner imageUrl={ bannerImage } title={ title } />
            <MediaList media={media} />
        </main>
    );
}

*/
