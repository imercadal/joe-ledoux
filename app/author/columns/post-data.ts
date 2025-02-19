export interface Post {
    id: string;
    title: string;
    mediaCompany: string;
    section: string;
    date: Date;
    urlToPost: string;
}

export const posts : Post[] = [{
    id: "098",
    title: "Is Consciousness Mysterious?",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2024-02-14"),
    urlToPost: "https://www.psychologytoday.com/intl/blog/i-got-a-mind-to-tell-you/202402/is-consciousness-mysterious"
}, {
    id: "987",
    title: "Heating, Eating, and Thinking.",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2024-02-07"),
    urlToPost: "https://www.psychologytoday.com/intl/blog/i-got-a-mind-to-tell-you/202402/is-consciousness-mysterious"
}, {
    id: "988",
    title: "Understanding the Neurobiological Realm of Existence",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2023-11-22"),
    urlToPost: "https://www.psychologytoday.com/intl/blog/i-got-a-mind-to-tell-you/202402/is-consciousness-mysterious"
}, {
    id: "876",
    title: "‘Run, Hide, Fightʼ Is Not How Our Brains Work",
    mediaCompany: "New York Times",
    section: "Opinion Column & Opinionator",
    date: new Date("2015-12-18"),
    urlToPost: "https://www.nytimes.com/2015/12/20/opinion/sunday/run-hide-fight-is-not-how-our-brains-work.html?smid=url-share",
}, {
    id: "765",
    title: "For the Anxious, Avoidance Can Have an Upside",
    mediaCompany: "New York Times",
    section: "Opinion Column & Opinionator",
    date: new Date("2013-04-12"),
    urlToPost: "https://www.nytimes.com/2015/12/20/opinion/sunday/run-hide-fight-is-not-how-our-brains-work.html?smid=url-share",
},{
    id: "654",
    title: "Rethinking Dual Process Models of Thought",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2024-01-17"),
    urlToPost: "https://www.nytimes.com/2015/12/20/opinion/sunday/run-hide-fight-is-not-how-our-brains-work.html?smid=url-share",
},{
    id: "543",
    title: "Its snowing today and our brain knows it",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2015-12-18"),
    urlToPost: "https://www.nytimes.com/2015/12/20/opinion/sunday/run-hide-fight-is-not-how-our-brains-work.html?smid=url-share",
},{
    id: "432",
    title: "Another post title",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2024-02-07"),
    urlToPost: "https://www.psychologytoday.com/intl/blog/i-got-a-mind-to-tell-you/202402/is-consciousness-mysterious"
},{
    id: "321",
    title: "The interesting lives of ants",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2024-02-07"),
    urlToPost: "https://www.psychologytoday.com/intl/blog/i-got-a-mind-to-tell-you/202402/is-consciousness-mysterious"
}]
