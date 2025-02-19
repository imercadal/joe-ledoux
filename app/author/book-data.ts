export interface Book {
    id: string;
    title: string;
    subhead: string;
    authors: string;
    year: number;
    synopsis: string;
    url: string;
    strandLink: string;
    audibleLink: string;
    amazonLink: string;
    barnesLink: string;
    imageUrl: string;
    praise: string[];
    praiseInfo: string[];
    bookWebsiteUrl: string;
}

export const books : Book[] = [{
    id: "1",
    title: "THE FOUR  REALMS OF EXISTENCE",
    subhead: "A new theory of being human",
    authors: "Joseph E. LeDoux",
    year: 2023,
    synopsis : "Joseph LeDoux argues that ideas like the self are increasingly barriers to discovery and understanding. He offers a new framework, theorizing four realms of existence—bodily, neural, cognitive, and conscious. Together, these four realms operate continuously as an “ensemble of being” to make humans who and what we are.",
    url: "https://www.cns.nyu.edu/ledoux/The-Four-Realms-of-Existence/pages/synopsis.html",
    strandLink: 'https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html',
    audibleLink: 'https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html',
    amazonLink: 'https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html',
    barnesLink: 'https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html',
    imageUrl: 'four-realms.png',
    praise: ["This book is marvelous", "Some of the best Ive read this year"],
    praiseInfo: ['Jeffrey Sachs, Columbia University. Winner of 2015 Blue Planet Prize.', 'Trevor Robbins, University of Cambridge. Winner of the 2014 Brain Prize'],
    bookWebsiteUrl: ''
}, {
    id: "2",
    title: "THE DEEP HISTORY OF OURSELVES",
    subhead: "The Four-Billion-Year Story of How We Got Conscious Brains",
    authors: "Joseph E. LeDoux",
    year: 2019,
    synopsis: "Deep History argues that the key to understanding important aspects of human behavior lies in viewing evolution through the prism of the first living organisms. By tracking the chain of the evolutionary timeline he shows how even the earliest single-cell organisms had to solve problems similar to those we and our cells do each day. Along the way, LeDoux explores our place in nature, how the evolution of nervous systems enhanced the ability of organisms to survive and thrive, and how the emergence of what we humans understand as consciousness made both our greatest and most horrendous achievements as a species possible.",
    url: "https://www.sciencedirect.com/science/article/pii/S0149763424000708",
    strandLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    audibleLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    amazonLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    barnesLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    imageUrl: 'deep-history.png',
    praise: ["This book is wonderfoul", "Some of the top books Ive read this year"],
    praiseInfo: ['Jeffrey Sachs, Columbia University. Winner of 2015 Blue Planet Prize.', 'Trevor Robbins, University of Cambridge. Winner of the 2014 Brain Prize'],
    bookWebsiteUrl: ''
}, {
    id: "3",
    title: "ANXIOUS",
    subhead: "Using the brain to understand fear and anxiety",
    authors: "Joseph E. LeDoux",
    year: 2015,
    synopsis: "LeDoux’s groundbreaking premise is that we’ve been thinking about fear and anxiety in the wrong way. These are not innate states waiting to be unleashed from the brain, but experiences that we assemble cognitively. Treatment of these problems must address both their conscious manifestations and underlying non-conscious processes. While knowledge about how the brain works will help us discover new drugs, LeDoux argues that the greatest breakthroughs may come from using brain research to help reshape psychotherapy.",
    url: "https://www.sciencedirect.com/science/article/pii/S0149763424000708",
    strandLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    audibleLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    amazonLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    barnesLink: 'https://www.strandbooks.com/anxious-using-the-brain-to-understand-and-treat-fear-and-anxiety-9780143109044.html',
    imageUrl: 'deep-history.png',
    praise: ["This book is wonderfoul", "Some of the top books Ive read this year"],
    praiseInfo: ['Jeffrey Sachs, Columbia University. Winner of 2015 Blue Planet Prize.', 'Trevor Robbins, University of Cambridge. Winner of the 2014 Brain Prize'],
    bookWebsiteUrl: ''
}
]
