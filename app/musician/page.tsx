import type { Metadata } from 'next';
import MusicianClient from './MusicianClient';

export const metadata: Metadata = {
  title: 'Musician — The Amygdaloids',
  description: 'Joseph LeDoux as lead singer and songwriter of The Amygdaloids — rock music inspired by neuroscience.',
  openGraph: { url: 'https://www.joseph-ledoux.com/musician' },
};

export default function MusicianPage() {
  return <MusicianClient />;
}
