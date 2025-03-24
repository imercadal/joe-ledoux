export interface Album {
    id: string;
    title: string;
    year: number;
    coverUrl: string;
    links: {
        platform: "Spotify" | "AppleMusic" | "YouTube";
        url: string;
    }[];
}

export const albums: Album[] = [{
    id: "5",
    title: "The Flip Side: More songs in our minds",
    year: 2017,
    coverUrl: "/415_Cover_Flip_side.webp",
    links: [
        { platform: "Spotify", url: "https://open.spotify.com/album/xyz" },
        { platform: "AppleMusic", url: "https://music.apple.com/album/xyz" },
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=jBmIPz20ESc" },
      ],
}, {
    id: "4",
    title: "Anxious",
    year: 2015,
    coverUrl: "/414_Cover_Anxious.webp",
    links: [
        { platform: "Spotify", url: "https://open.spotify.com/album/xyz" },
        { platform: "AppleMusic", url: "https://music.apple.com/album/xyz" },
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=62ByT_T-a-g" },
    ],
},{
    id: "3",
    title: "All in our minds",
    year: 2012,
    coverUrl: "/413_Cover_All_in_our_Minds.webp",
    links: [
        { platform: "Spotify", url: "https://open.spotify.com/album/xyz" },
        { platform: "AppleMusic", url: "https://music.apple.com/album/xyz" },
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=NrZJJ9EILCo" },
    ],
},{
    id: "2",
    title: "Theory of my Mind",
    year: 2010,
    coverUrl: "/412_Cover_Theory_of_Mind.webp",
    links: [
        { platform: "Spotify", url: "https://open.spotify.com/intl-es/album/0ZJ6ZYWWFjkgsg6skJ7GZC?si=CwCZ3EJ7TS6rYh2fHpSyrQ" },
        { platform: "AppleMusic", url: "https://music.apple.com/album/xyz" },
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=OfClC_dog2E" },
    ],
},{
    id: "1",
    title: "Heavy Mental",
    year: 2007,
    coverUrl: "/411_Cover_Heavy_Mental-2.webp",
    links: [
        { platform: "Spotify", url: "https://open.spotify.com/intl-es/album/0ry3qLWCnI1AlLdb8vzM5M?si=sorSby70QGqtHbvWMfArKA" },
        { platform: "AppleMusic", url: "https://music.apple.com/album/xyz" },
        { platform: "YouTube", url: "https://www.youtube.com/watch?v=npaQXeIeMvo" },
    ],
},]