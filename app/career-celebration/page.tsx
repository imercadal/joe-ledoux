import type { Metadata } from 'next';
import CareerCelebrationClient from './CareerCelebrationClient';

export const metadata: Metadata = {
  title: 'Career Celebration',
  description: 'Celebrating the career of Joseph LeDoux — a tribute to his contributions to neuroscience.',
  openGraph: { url: 'https://www.joseph-ledoux.com/career-celebration' },
};

export default function CareerCelebrationPage() {
  return <CareerCelebrationClient />;
}
