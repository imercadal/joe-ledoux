/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('joeledoux');

db.getCollection('media').insertMany([
  {
    title: "Our Realms of Existence: A Fresh Look at the Science of What and Who We Are",
    mediaCompany: "Association for the Scientific Study of Consciousness",
    date: new Date("2023-07-24"),
    type: "watch",
    tags: ["neuroscience, books"],
    urlToItem: "https://www.youtube.com/watch?v=jjjDx_fGIYY",
    embedUrl: "https://www.youtube.com/embed/jjjDx_fGIYY?si=XKo3scPTZYUQsiIe"
  }, {
    title: "LBI Masters of the Mind lecture by Prof Joseph LeDoux",
    mediaCompany: "Leuven Brain Institute",
    date: new Date("2022-11-28"),
    type: "watch",
    tags: ["neuroscience"],
    urlToItem: "https://www.youtube.com/watch?v=CA8AFWizMVM",
    embedUrl: "https://www.youtube.com/embed/CA8AFWizMVM?si=_EGqAuP4mQeB5nrg"
  }, {
    title: "Richard Hill catches up with Joseph LeDoux",
    mediaCompany: "The Science of Psychotherapy",
    date: new Date("2022-08-28"),
    type: "watch",
    tags: ["neuroscience"],
    urlToItem: "https://www.youtube.com/watch?v=VDm4YJqgVJI",
    embedUrl: "https://www.youtube.com/embed/VDm4YJqgVJI?si=7KX3A9_G0czfcQcN"
  }, {
    title: "A made up media item for books and music",
    mediaCompany: "Manana Media",
    date: new Date("2022-08-28"),
    type: "watch",
    tags: ["books", "music"],
    urlToItem: "https://www.youtube.com/watch?v=jjjDx_fGIYY",
    embedUrl: "https://www.youtube.com/embed/VDm4YJqgVJI?si=VydVlCWmE7A-K2pn"
  }, {
    title: "Our Realms of Existence: A Fresh Look at the Science of What and Who We Are",
    mediaCompany: "Association for the Scientific Study of Consciousness",
    date: new Date("2023-07-24"),
    type: "watch",
    tags: ["neuroscience", "books"],
    urlToItem: "https://www.youtube.com/watch?v=jjjDx_fGIYY",
    embedUrl: "https://www.youtube.com/embed/jjjDx_fGIYY?si=XKo3scPTZYUQsiIe"
  }, {
    title: "LBI Masters of the Mind lecture by Prof Joseph LeDoux",
    mediaCompany: "Leuven Brain Institute",
    date: new Date("2022-11-28"),
    type: "watch",
    tags: ["books"],
    urlToItem: "https://www.youtube.com/watch?v=jjjDx_fGIYY",
    embedUrl: "https://www.youtube.com/embed/CA8AFWizMVM?si=_EGqAuP4mQeB5nrg"
  }, {
    title: "Richard Hill catches up with Joseph LeDoux",
    mediaCompany: "The Science of Psychotherapy",
    date: new Date("2022-08-28"),
    type: "watch",
    tags: ["music", "neuroscience", "books"],
    urlToItem: "https://www.youtube.com/watch?v=VDm4YJqgVJI",
    embedUrl: "https://www.youtube.com/embed/VDm4YJqgVJI?si=7KX3A9_G0czfcQcN",

  }, {
    title: "A made up media item for books and music",
    mediaCompany: "Manana Media",
    date: new Date("2022-08-28"),
    type: "watch",
    tags: ["books", "music"],
    urlToItem: "https://www.youtube.com/watch?v=jjjDx_fGIYY",
    embedUrl: "https://www.youtube.com/embed/VDm4YJqgVJI?si=VydVlCWmE7A-K2pn"
  }

  
]);

console.log(db.getCollection('media').find({}));
/*
db.books.updateOne(
  { _id: ObjectId("67bb9e45b027fe7dc05fafcd") },
  { 
    $set: { 
      "reviews.1": {
        content: "With brilliance, wit, and wisdom, LeDoux traces four billion years of life… Utterly fascinating.",
        author: "Jeffrey Sachs, Columbia University. Winner of 2015 Blue Planet Prize.",
        reviewUrl: "https://example.com"
      }
    }
  }
);

db.books.updateOne(
  { _id: ObjectId("67bb9e45b027fe7dc05fafcd") },
  { 
    $push: { 
      reviews: { 
        content: "An amazing, mind-expanding read.",
        author: "Trevor Robbins, University of Cambridge. Winner of the 2014 Brain Prize.",
        reviewUrl: "https://example.com"
      } 
    }
  }
);


db.books.updateOne(
  { _id: ObjectId("67bb9e45b027fe7dc05fafcd") },
  { $set: { "reviews.0.content": "An amazing, mind-expanding read." } }
);


db.getCollection('books').insertMany([

]);
*/


/*
// 
// , {
    title: "TITLE",
    authors: "Joseph E. LeDoux",
    date: new Date("2021-12-02"),
    journal : "JOURNAL",
    link : "",
}, {
    title: "TITLE",
    authors: "Joseph E. LeDoux",
    date: new Date("2021-12-02"),
    journal : "JOURNAL",
    link : "",
}, {
    title: "TITLE",
    authors: "Joseph E. LeDoux",
    date: new Date("2021-12-02"),
    journal : "JOURNAL",
    link : "",
}, {
    title: "TITLE",
    authors: "AUTHORS",
    date: new Date("2021-12-02"),
    journal : "JOURNAL",
    link : "",
}

Insert a few documents into the sales collection.

db.getCollection('books').insertMany([{
    id: "1",
    title: "The four realms of existence",
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
    title: "The Deep History of Ourselves",
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
    title: "Anxious",
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
} , {
    id: "4",
    title: "The Emotional Brain",
    subhead: "Using the brain to understand fear and anxiety",
    authors: "Joseph E. LeDoux",
    year: 1996,
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
]);

console.log(db.getCollection('books').find({}));
*/