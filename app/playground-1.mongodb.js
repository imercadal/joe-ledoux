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
    title: "Emotions are key to understanding consciousness",
    mediaCompany: "Psychology Today",
    date: new Date("2024-09-16"),
    type: "read",
    tags: ["neuroscience"],
    urlToItem: "https://www.psychologytoday.com/ca/blog/finding-purpose/202409/emotions-are-key-to-understanding-consciousness",
  }, {
    title: "Heavy Mental: Music about Mind and Brain and Mental Disorders",
    mediaCompany: "Karolinska Institute, Sweden",
    date: new Date("2023-04-28"),
    type: "read",
    tags: ["neuroscience", "music"],
    urlToItem: "https://www.facebook.com/photo/?fbid=10159452967687253&set=a.36984067252",
  }, {
    title: "Progress at Philosophical Psychology",
    mediaCompany: "Daily Nous",
    date: new Date("2022-11-21"),
    type: "read",
    tags: ["books"],
    urlToItem: "https://dailynous.com/2022/11/21/progress-at-philosophical-psychology-guest-post/",
  }, {
    title: "On role models and Joe LeDoux",
    mediaCompany: "Oxford Academic Journal",
    date: new Date("2025-01-01"),
    type: "read",
    tags: ["neuroscience"],
    urlToItem: "https://academic.oup.com/cercor/article/35/1/15/7824640?guestAccessKey=938e4415-211d-4de4-abc0-f57b349bbd93&login=false&utm_source=authortollfreelink&utm_campaign=cercor&utm_medium=email",
  }, {
    title: "Doutoramento Honoris Causa atribuído a Joseph E. LeDoux",
    mediaCompany: "Universidade Fernando Pessoa",
    date: new Date("2024-10-10"),
    type: "read",
    tags: ["neuroscience"],
    urlToItem: "https://www.ufp.pt/doutoramento-honoris-causa-atribuido-a-joseph-e-ledoux-na-ufp/",
  }, {
    title: "S2E3 Joseph LeDoux, The Amygdaloids",
    mediaCompany: "All in a Days Work Podcast",
    date: new Date("2024-12-15"),
    type: "listen",
    tags: ["neuroscience", "music"],
    urlToItem: "https://open.spotify.com/episode/7fQozfcXLVlowiBXaN4iF2?si=j6VTMJSuTDCj-fQfytP4ww",
  }, {
    title: "Scientific Method: How we understand anxiety",
    mediaCompany: "WAMU & NPR BRAIN",
    date: new Date("2022-02-21"),
    type: "listen",
    tags: ["neuroscience"],
    urlToItem: "https://the1a.org/segments/the-scientific-method-the-science-of-anxiety/",
  }, {
    title: "The amygdala",
    mediaCompany: "Anxiety Bites",
    date: new Date("2022-07-20"),
    type: "listen",
    tags: ["neuroscience"],
    urlToItem: "https://www.iheart.com/podcast/1119-anxiety-bites-87432530/episode/the-amygdala-99631905/",
  }, {
    title: "Emotion, Cognition, Consciousness, Behavior & Brain Evolution",
    mediaCompany: "Mind & Matter",
    date: new Date("2022-06-02"),
    type: "listen",
    tags: ["neuroscience"],
    urlToItem: "https://open.spotify.com/episode/4ICBPuectMk5ijLTUpY2iE?si=0f05810a58874aef",
  }, {
    title: "Our Realms of Existence: A Fresh Look at the Science of What and Who We Are",
    mediaCompany: "Association for the Scientific Study of Consciousness",
    date: new Date("2023-07-24"),
    type: "watch",
    tags: ["neuroscience, books"],
    urlToItem: "https://youtu.be/jjjDx_fGIYY",
  }, {
    title: "LBI Masters of the Mind lecture by Prof Joseph LeDoux",
    mediaCompany: "Leuven Brain Institute",
    date: new Date("2022-11-28"),
    type: "watch",
    tags: ["neuroscience"],
    urlToItem: "https://www.youtube.com/watch?v=CA8AFWizMVM",
  }, {
    title: "Richard Hill catches up with Joseph LeDoux",
    mediaCompany: "The Science of Psychotherapy",
    date: new Date("2022-08-28"),
    type: "watch",
    tags: ["neuroscience"],
    urlToItem: "https://www.youtube.com/watch?v=VDm4YJqgVJI",
  }, {
    title: "A made up media item for books and music",
    mediaCompany: "Manana Media",
    date: new Date("2022-08-28"),
    type: "watch",
    tags: ["books", "music"],
    urlToItem: "https://www.youtube.com/watch?v=VDm4YJqgVJI",
  }, {
    title: "A made up media item for books and music",
    mediaCompany: "Desvelo Media",
    date: new Date("2022-08-28"),
    type: "listen",
    tags: ["neuroscience", "music"],
    urlToItem: "https://www.youtube.com/watch?v=VDm4YJqgVJI",
  }, {
    title: "A made up media item for books and music",
    mediaCompany: "Omaigosh Media",
    date: new Date("2022-08-28"),
    type: "listen",
    tags: ["books", "music"],
    urlToItem: "https://www.youtube.com/watch?v=VDm4YJqgVJI",
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