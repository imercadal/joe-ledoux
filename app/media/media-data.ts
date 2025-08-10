import type { ObjectId } from 'mongodb';

export interface MediaItem {
    _id?: ObjectId;
    title: string;
    mediaCompany: string;
    date: Date;
    type: string;
    category?: string;
    tags: string[];
    urlToItem?: string;
    embedUrl?: string;
}