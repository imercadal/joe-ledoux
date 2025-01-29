export interface Book {
    id: number;
    name: string;
    subhead: string;
    authors: string;
    year: number;
    synopsis: string;
    url: string;
}

export const books : Book[] = [{
    id: 123,
    name: "The four realms of existence",
    subhead: "A new theory of being human",
    authors: "Joseph E. LeDoux",
    year: 2023,
    synopsis : "One of the world’s leading experts on mind and brain takes us on an expedition that reveals a new view of what makes us who we are",
    url: "https://www.cns.nyu.edu/ledoux/The-Four-Realms-of-Existence/pages/synopsis.html"
}, {
    id: 234,
    name: "Anxious",
    subhead: "Using the brain to understand fear and anxiety",
    authors: "Joseph E. LeDoux",
    year: 2015,
    synopsis: "Anxious is a great book.",
    url: "https://www.sciencedirect.com/science/article/pii/S0149763424000708"
}
]
