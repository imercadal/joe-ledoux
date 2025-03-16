export interface MediaItem {
    _id?: string;
    title: string;
    mediaCompany: string;
    date: Date;
    type: string;
    tags: string[];
    urlToItem: string;
    embedUrl?: string;
}