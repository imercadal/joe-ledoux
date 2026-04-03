import type { Metadata } from 'next';
import MusicianPage from './musician/page';

export const metadata: Metadata = {
  title: 'Joseph LeDoux — Musician',
  description: 'Joseph LeDoux, lead singer of The Amygdaloids.',
  openGraph: { url: 'https://www.joseph-ledoux.com/musician' },
};

export default function Home() {
  return <MusicianPage />;
}