import type { MetadataRoute } from 'next'
import { connectToDb } from './api/db'

const BASE_URL = 'https://www.joseph-ledoux.com'

export const revalidate = 604800

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                                             lastModified: new Date(), changeFrequency: 'yearly', priority: 1   },
    { url: `${BASE_URL}/about`,                                  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${BASE_URL}/about/bio`,                              lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/author`,                                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.9 },
    { url: `${BASE_URL}/author/columns`,                         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/author/lectures`,                        lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/career-celebration`,                     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${BASE_URL}/media/interviews`,                       lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/media/performances`,                     lastModified: new Date(), changeFrequency: 'yearly', priority: 0.8 },
    { url: `${BASE_URL}/media/read`,                             lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/musician`,                               lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${BASE_URL}/musician/gigs`,                          lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/neuroscientist`,                         lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.9 },
    { url: `${BASE_URL}/neuroscientist/lectures`,                lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/neuroscientist/publications`,            lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${BASE_URL}/news`,                                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/news/history-of-neuroscience`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
  ]

  const mediaTypeRoutes: MetadataRoute.Sitemap = ['watch', 'listen', 'read'].map((type) => ({
    url: `${BASE_URL}/media/_${type}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  let bookRoutes: MetadataRoute.Sitemap = []
  try {
    const { db } = await connectToDb()
    const books = await db.collection('books').find({}, { projection: { _id: 1 } }).toArray()
    bookRoutes = books.map((book) => ({
      url: `${BASE_URL}/author/${book._id.toString()}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    }))
  } catch (error) {
    console.error('Failed to fetch books for sitemap:', error)
  }

  return [...staticRoutes, ...mediaTypeRoutes, ...bookRoutes]
}
