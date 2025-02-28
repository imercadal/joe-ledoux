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


// #FALTA HACER ESTO
// UX: url a youtube que se pueda hacer click desde el nombre y bajada
