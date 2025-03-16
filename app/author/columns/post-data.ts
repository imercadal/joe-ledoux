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
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/202402/heating-eating-and-thinking"
}, {
    id: "986",
    title: "Rethinking Dual Process Models of Thought",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2024-01-17"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/202401/rethinking-dual-process-models-of-thought"
},  {
    id: "985",
    title: "Understanding the Neurobiological Realm of Existence",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2023-11-22"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/202311/understanding-the-neurobiological-realm-of-existence"
}, {
    id: "984",
    title: "Our Four Realms of Existence: The Biological Realm",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2023-10-31"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/202310/our-four-realms-of-existence-the-biological-realm"
}, {
    id: "983",
    title: "Our Four Realms of Existence",
    mediaCompany: "Psychology Today",
    section: "I Got a Mind to Tell You",
    date: new Date("2023-10-22"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/202310/our-four-realms-of-existence"
}, {
    id: "982",
    title: "Heavy Mental",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2023-09-12"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/202309/heavy-mental"
}, {
    id: "981",
    title: "Human Fear and Anxiety",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2019-12-10"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201912/human-fear-and-anxiety"
}, {
    id: "980",
    title: "Implications for Therapy of Six Simple Brain Principles",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2019-11-25"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201911/implications-therapy-six-simple-brain-principles"
}, {
    id: "979",
    title: "An Emotion Is...",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2019-11-11"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201911/emotion-is"
}, {
    id: "978",
    title: "Have We Misunderstood Our Emotions?",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2019-10-28"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201910/have-we-misunderstood-our-emotions"
}, {
    id: "977",
    title: "You're a Radical Behaviorist Disguised as a Neuroscientist",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2019-10-23"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201910/youre-radical-behaviorist-disguised-neuroscientist"
}, {
    id: "976",
    title: "How Deep Do We Go?",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2019-10-18"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/201910/how-deep-do-we-go"
}, {
    id: "975",
    title: "Psychotherapy as a Learning Experience",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2015-08-25"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201508/psychotherapy-learning-experience"
}, {
    id: "974",
    title: "What's Wrong with Antianxiety Drugs?",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2015-08-16"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201508/whats-wrong-antianxiety-drugs"
}, {
    id: "973",
    title: "The Amygdala Is Not the Brain's Fear Center",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2015-08-10"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-mind-tell-you/201508/the-amygdala-is-not-the-brains-fear-center"
}, {
    id: "972",
    title: "Welcome to \"I Got a Mind to Tell You\"",
    mediaCompany: "Psychology Today",   
    section: "I Got a Mind to Tell You",
    date: new Date("2015-08-04"),
    urlToPost: "https://www.psychologytoday.com/us/blog/i-got-a-mind-to-tell-you/201508/welcome-to-i-got-a-mind-to-tell-you"
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
    urlToPost: "https://archive.nytimes.com/opinionator.blogs.nytimes.com/2013/04/07/for-the-anxious-avoidance-can-have-an-upside/",
}, {
    id: "764",
    title: "Finding Clues in the Fearful Brain",
    mediaCompany: "New York Times",
    section: "Opinion Column & Opinionator",
    date: new Date("2012-03-25"),
    urlToPost: "https://archive.nytimes.com/opinionator.blogs.nytimes.com/2012/03/25/following-fear-down-the-brains-pathways/",
}, {
    id: "763",
    title: "Searching the Brain for the Roots of Fear",
    mediaCompany: "New York Times",
    section: "Opinion Column & Opinionator",
    date: new Date("2012-01-22"),
    urlToPost: "https://archive.nytimes.com/opinionator.blogs.nytimes.com/2012/01/22/anatomy-of-fear/",
}, {
    id: "544",
    title: "An Idiosyncratic Early 60s Playlist",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2010-06-27"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2010/06/idiosyncratic-early-60s-playlist-june.html",
},{
    id: "543",
    title: "Tomorrow Never Knows",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-23"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/05/post-20-tomorrow-never-knows.html",
}, {
    id: "542",
    title: "New York State of Mind",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-18"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/05/post-19-new-york-state-of-mind.html"
}, {
    id: "541",
    title: "Guns, Germs, and Squeals",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-13"),
    urlToPost: "https://www.huffpost.com/entry/guns-germs-and-squeals_b_201754"
}, {
    id: "540",
    title: "How does your brain work?",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-06-08"),
    urlToPost: "https://www.huffpost.com/entry/how-does-your-brain-work_b_200571"
}, {
    id: "539",
    title: "Highway 61 Revisited",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-11"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/05/post-16-highway-61-revisited.html"
}, {
    id: "538",
    title: "The Long and Winding Road",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-08"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/05/post-15-long-and-winding-road.html"
}, {
    id: "537",
    title: "Spanish Castle Magic",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-07"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/05/post-14-spanish-castle-magic.html"
}, {
    id: "536",
    title: "The Boy from New York City",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-02"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/05/post-13-boy-from-new-york-city.html"
}, {
    id: "535",
    title: "Oh Lord, Please Don’t Let Me Be Misunder...",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-05-01"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/05/post-12-oh-lord-please-dont-let-me-be.html"
}, {
    id: "534",
    title: "Slow Down",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-30"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-11-slow-down.html"
}, {
    id: "533",
    title: "Synchronicity",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-27"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-10-synchronicity.html"
}, {
    id: "532",
    title: "A Hard Night’s Day",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-26"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-9-nights-hard-day.html"
}, {
    id: "531",
    title: "Radio, Radio",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-24"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-8-radio-radio.html"
}, {
    id: "530",
    title: "Hold on, I‘m Coming",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-23"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-7-hold-on-im-coming.html"
}, {
    id: "529",
    title: "Interstellar Overdrive",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-20"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-6-interstellar-overdrive.html"
}, {
    id: "528",
    title: "guys, spies, rough stuff, and snuff",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-17"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/guys-spies-rough-stuff-and-snuff.html"
}, {
    id: "527",
    title: "Curse of the Watchtower, or Life Imitates...",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-14"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-4-life-imitates-blog.html"
}, {
    id: "526",
    title: "One is the loneliest number",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-14"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/post-3-one-is-loneliest-number.html"
}, {
    id: "525",
    title: "WHY \"FOR WHAT IT'S WORTH\" by Joseph LeDoux",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-11"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/why-for-what-its-worth-by-joseph-ledoux.html"
}, {
    id: "524",
    title: "Saturday April 11, 2009, Cambridge UK",
    mediaCompany: "Personal Blog",
    section: "For What It's Worth",
    date: new Date("2009-04-11"),
    urlToPost: "https://ledouxjoseph.blogspot.com/2009/04/saturday-april-11-2009-cambridge-uk.html"
}
]