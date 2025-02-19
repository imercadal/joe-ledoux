export interface Album {
    id: string;
    title: string;
    year: number;
    urlToListen: string[];
    coverUrl: string;
}

export const albums: Album[] = [{
    id: "",
    title: "The Flip Side: More songs in our minds",
    year: 2017,
    urlToListen: ["spotify", "apple", "https://www.youtube.com/watch?v=jBmIPz20ESc"],
    coverUrl: "/415_Cover_Flip_side.webp",
}, {
    id: "",
    title: "Anxious",
    year: 2015,
    urlToListen: ["", "", "https://www.youtube.com/watch?v=62ByT_T-a-g"],
    coverUrl: "/414_Cover_Anxious.webp",
},{
    id: "",
    title: "All in our minds",
    year: 2012,
    urlToListen: ["", "", "https://www.youtube.com/watch?v=NrZJJ9EILCo"],
    coverUrl: "/413_Cover_All_in_our_Minds.webp",
},{
    id: "",
    title: "Theory of my Mind",
    year: 2010,
    urlToListen: ["https://open.spotify.com/intl-es/album/0ZJ6ZYWWFjkgsg6skJ7GZC?si=CwCZ3EJ7TS6rYh2fHpSyrQ", "", "https://www.youtube.com/watch?v=OfClC_dog2E"],
    coverUrl: "/412_Cover_Theory_of_Mind.webp",
},{
    id: "",
    title: "Heavy Mental",
    year: 2007,
    urlToListen: ["https://open.spotify.com/intl-es/album/0ry3qLWCnI1AlLdb8vzM5M?si=sorSby70QGqtHbvWMfArKA", "", "https://www.youtube.com/watch?v=npaQXeIeMvo"],
    coverUrl: "/411_Cover_Heavy_Mental.webp",
},]