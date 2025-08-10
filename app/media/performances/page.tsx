import FilterableMedia from '../FilterableMedia';
import Banner from '@/app/components/Banner';
import { bannerImages } from '@/config/bannerConfig';

export const revalidate = 300;

export default async function PerformancesPage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const url = new URL('/api/media', baseUrl);
  url.searchParams.set('group', 'performances');

  const res = await fetch(url.toString(), { next: { revalidate: 300 } });
  if (!res.ok) throw new Error('Failed to fetch performances');
  const media = await res.json();

  return (
    <section className="bg-darkest min-h-[calc(100vh-170px)]">
      <Banner imageUrl={bannerImages['performances']} title="Performances" />
      <FilterableMedia initialMedia={media} />
    </section>
  );
}