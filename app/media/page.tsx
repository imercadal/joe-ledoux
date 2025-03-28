import TagSidebar from '../components/TagSidebar';
import MediaList from './MediaList';
import Link from 'next/link';

interface MediaPageProps {
  params: Promise<{}>;
  searchParams: Promise<{ tag?: string }>;
}

export const dynamic = 'force-dynamic';

export default async function MediaPage({ params, searchParams }: MediaPageProps) {
  await params;
  const { tag } = await searchParams;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const apiUrl = new URL('/api/media', baseUrl);
  if (tag) {
    apiUrl.searchParams.append('tags', tag);
  }

  try{
    const response = await fetch(apiUrl.toString());
  
    if(!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`)
    }
    const media = await response.json()
  
    return(
      <main className="bg-lightText flex-grow">
        <TagSidebar selectedTags={tag ? [tag] : []} availableTags={[]} onToggleTag={() => {}}/>
        <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
          <h3 className="font-bold">MEDIA</h3>
        </div>
        <MediaList media={media} />
      </main>
    )
  } catch (error) {
    console.log("Error fetching media:", error)
    return (
      <main className="bg-lightText">
      <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/310_Author_Books.webp')] flex items-center justify-center">
        <h3 className="font-bold">MEDIA</h3>
      </div>
      <div className="p-32 min-h-3/4 flex justify-center">
        <p className="text-dark text-3xl">Failed to load media. Please try again later.</p>
        <Link href='/'><p>Back to home</p></Link>
      </div>
    </main>
    )
  }

};
