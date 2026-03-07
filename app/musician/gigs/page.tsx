import type { Metadata } from 'next';
import GigsClient from './GigsClient';

export const metadata: Metadata = {
  title: 'Shows & Gigs',
  description: 'Live performance schedule and past shows for The Amygdaloids with Joseph LeDoux.',
  openGraph: { url: 'https://www.joseph-ledoux.com/musician/gigs' },
};

export default function GigsPage() {
  return <GigsClient />;
}
