import type { Metadata } from 'next';
import HomeDoors from './HomeDoors';

export const metadata: Metadata = {
  title: 'Joseph LeDoux — Neuroscientist, Author & Musician',
  description: 'Official site of Joseph LeDoux — NYU neuroscientist researching fear, memory, and consciousness; author of The Emotional Brain; lead singer of The Amygdaloids.',
  openGraph: { url: 'https://www.joseph-ledoux.com' },
};

export default function Home() {
  return <HomeDoors />;
}
