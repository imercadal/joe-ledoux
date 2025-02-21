export interface Media {
    id: string;
    title: string;
    mediaCompany: string;
    date: Date;
    tags: string[];
    urlToItem: string;
}

export const mediaItems : Media[] = [{
    id: "",
    title: "",
    mediaCompany: "",
    date: new Date("2020-01-01"),
    tags: [""],
    urlToItem: "",
}]

// #FALTA HACER ESTO
// UX: url a youtube que se pueda hacer click desde el nombre y bajada
