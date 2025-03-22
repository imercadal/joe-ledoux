export interface Show {
    _id?: number;
    title?: string;
    band: string;
    date: Date;
    venue: string;
    address?: string;
    notes?: string;
    photoUrl?: string;
    showUrl?: string;
}

export const shows: Show[] = [{
    _id: 1,
    title: "Neuroscience & Emotions: The Life, Work & Music of Dr. Joseph LeDoux",
    band: "The Amygdaloids",
    date: new Date("2023-08-11T18:00:00"),
    venue : "Hurleyville Performing Arts Centre film screening",
    notes: "After the screening Joseph LeDoux and Colin Dempsey will play a short set of songs by The Amygdaloids and LeDoux & Filmmaker Kurt Feldhun will take questions from the audience."
}, {
    _id: 2,
    title: "Art, Neural Science, and Music",
    band: "So We Are",
    date: new Date("2023-08-05T14:00:00"),
    venue : "Time & Space Limited",
    notes: "A Discussion with Art Writer Nancy Princenthal, and Discussion and Performance by professor Joseph LeDoux and his frequent musical partner, singer-songwriter Colin Dempsey."
}, {
    _id: 3,
    title: "The Amygdaloids “Heavy MeNtal” Live at Rockwood Music Hall",
    band: "The Amygdaloids",
    date: new Date("2024-06-25T22:00:00"),
    venue : "Rockwood Music Hall",
    notes: "Open to the Public. FREE. Limited space. Come early.",
    address: "196 Allen St (near Houston), New York, NY 10002"
}, {
    _id: 4,
    title: "25 YEARS OF CONSCIOUSNESS",
    band: "The Amygdaloids",
    date: new Date("2024-06-23T19:30:00"),
    venue : "NYU’s Skirball Theater",
    notes: "A novel version of The Amygdaloids will dish out some Heavy Mental tunes – Joe LeDoux will be joined by Colin Dempsey, David Humphrey, Heather Ferguson, and extra special guest performer Richard Barone of The Bongos in the consciousness-related musical entertainment. The show will kick off at 7:30 PM, on Friday, June 23, at the prestigious Skirball Theater, located at NYU, allowing you to immerse yourself in this consciousness-related musical journey."
}, {
    _id: 5,
    title: "Heavy Mental gig at Candyland in Stockholm",
    band: "So We Are",
    date: new Date("2024-05-04T18:00:00"),
    venue: "Candland Art Gallery. Stockholm, Sweden",
    notes: "LeDoux and Colin Dempsey, The Amygdaloids and So We Are, performed for the loving crowd audience at Candland Art Gallery. Stockholm, Sweden."
}
]