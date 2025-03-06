export interface Review {
    content: string;
    author: string;
    reviewUrl: string;
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

export interface Book {
    _id?: number;
    title: string;
    subhead: string;
    year: number;
    synopsis: string;
    imageUrl: string;
    bannerUrl: string;
    allCitationsDownload: string;
    citationsByPartDownload: string;
    notesDownload: string;
    reviews: Review[];
    advancedPraise: AdvancedPraise[];
    stores: Store[];
}


export const books: Book[] = [
    
  ];