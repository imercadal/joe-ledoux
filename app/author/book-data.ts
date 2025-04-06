export interface Review {
    content: string;
    author: string;
    date?: Date;
    reviewUrl?: string;
}
  
export interface AdvancedPraise {
    praise: string;
    author: string;
    role: string;
}
  
export interface Store {
    name: string;
    url: string;
  }

export interface Document {
    document: string;
    file: string;
}

export interface Book {
    _id?: number;
    title: string;
    subhead: string;
    year: number;
    synopsis: string;
    imageUrl: string;
    bannerUrl: string;
    reviews?: Review[];
    advancedPraise?: AdvancedPraise[];
    stores?: Store[];
    documents?: Document[];
}


export const books: Book[] = [
    
  ];