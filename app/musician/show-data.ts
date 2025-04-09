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
},
{
    _id: 6,
    title: "Lecture and Performance: Fear at Secret Science Club",
    band: "The Amygdaloids",
    date: new Date("2010-06-23"),
    venue: "Secret Science Club, The Bell House, Brooklyn",
    notes: "Joe and Daniela will lecture on Fear; launched The Amygdaloids in November 2006"
  },
  {
    _id: 7,
    title: "Lecture and Performance – 3.1.10 @ 7PM",
    band: "The Amygdaloids",
    date: new Date("2010-08-30"),
    venue: "Newmark Theater",
    notes: "Joe will lecture on The Emotional Brain and then perform"
  },
  {
    _id: 8,
    title: "The Brain in Words and Music",
    band: "The Amygdaloids",
    date: new Date("2010-08-18"),
    venue: "Don Hill’s",
    notes: "Featuring Lenny Kaye and others; lectures on neuroscience and magic tricks"
  },
  {
    _id: 9,
    title: "The Brain in Words and Music: Release Party for 'Theory of My Mind'",
    band: "The Amygdaloids",
    date: new Date("2010-06-23"),
    venue: "",
    notes: ""
  },
  {
    _id: 10,
    title: "Catch Us If You Can",
    band: "The Amygdaloids",
    date: new Date("2010-06-23"),
    venue: "",
    notes: "The band plays its last show before the summer"
  },
  {
    _id: 11,
    title: "How We Get Highly Strung",
    band: "The Amygdaloids",
    date: new Date("2011-08-03"),
    venue: "",
    notes: "An evening with Lenny Kaye and Joseph LeDoux; Lecture and Performance – 4.19.10 @ 7PM"
  },
  {
    _id: 12,
    title: "TWO ACOUSTIC (folk rock) SHOWS: AUG 12 AND AUG 16",
    band: "The Amygdaloids",
    date: new Date("2011-06-21"),
    venue: "Googies Lounge above the Living Room",
    notes: "FRIDAY AUGUST 12, 7:30p sharp, 45 min"
  },
  {
    _id: 13,
    title: "Sunday Show at Coco66",
    band: "The Amygdaloids",
    date: new Date("2011-06-03"),
    venue: "Coco66, Greenpoint Brooklyn",
    address: "66 Greenpoint Ave",
    notes: "Evening event with Richard Lloyd, Joe LeDoux and Andy Snyder"
  },
  {
    _id: 14,
    title: "Rhythms on the Brain: Music, Memory, and Emotion",
    band: "The Amygdaloids",
    date: new Date("2011-05-11"),
    venue: "",
    notes: "Featuring Joe Levy and others"
  },
  {
    _id: 15,
    title: "Friday the 13th. Fright Night w/ The Amygdaloids",
    band: "The Amygdaloids",
    date: new Date("2010-12-02"),
    venue: "",
    notes: "Featuring fear-themed songs"
  },
  {
    _id: 16,
    title: "NY CONSCIOUSNESS COLLECTIVE PRESENT: QUALIA FREAK-FEST 2010",
    band: "The Amygdaloids",
    date: new Date("2010-12-14"),
    venue: "Parkside Lounge",
    address: "317 E Houston St (between Attorney St)",
    notes: ""
  },
  {
    _id: 17,
    title: "Nerd Night: Scientist Talking Science and Playing Science Themed Music",
    band: "The Amygdaloids",
    date: new Date("2012-05-09"),
    venue: "",
    notes: "5th annual Nerd Nite Nerdtacular with presentations and archaeological insights"
  },
  {
    _id: 18,
    title: "IAmScience",
    band: "The Amygdaloids",
    date: new Date("2012-04-04"),
    venue: "THE BELL HOUSE",
    notes: "Featured band event (Tuesday May 22 noted in description)"
  },
  {
    _id: 19,
    title: "The Amygdaloids Present: A Night of Mind & Brain",
    band: "The Amygdaloids",
    date: new Date("2012-01-05"),
    venue: "",
    notes: ""
  },
  {
    _id: 20,
    title: "All in Our Minds EP Release Party for The Amygdaloids",
    band: "The Amygdaloids",
    date: new Date("2012-01-27"),
    venue: "Bowery Electric",
    notes: "Happy New Year release party"
  },
  {
    _id: 21,
    title: "Gigs and New Music Coming",
    band: "The Amygdaloids",
    date: new Date("2011-11-21"),
    venue: "",
    notes: "Amanda Thorpe's release party"
  },
  {
    _id: 22,
    title: "A Night With the Amygdaloids",
    band: "The Amygdaloids",
    date: new Date("2013-10-03"),
    venue: "The Helix Center",
    notes: "Return performance with exploration of mind"
  },
  {
    _id: 23,
    title: "Second Annual Heavy MeNtal Variety Show",
    band: "The Amygdaloids",
    date: new Date("2013-05-18"),
    venue: "",
    notes: "A night of mind, brain, and magic"
  },
  {
    _id: 24,
    title: "Group Therapy: A Benefit Featuring The Amygdaloids and other NYU bands",
    band: "The Amygdaloids",
    date: new Date("2013-02-08"),
    venue: "Le Poisson Rouge (158 Bleecker Street, NYC)",
    notes: "Benefit event with multiple NYU bands"
  },
  {
    _id: 25,
    title: "THE NY CONSCIOUSNESS COLLECTIVE PRESENTS QUALIA FEST 2012",
    band: "The Amygdaloids",
    date: new Date("2012-12-04"),
    venue: "",
    notes: ""
  },
  {
    _id: 26,
    title: "What We Play is Life – A Musical Celebration of Community Resilience",
    band: "The Amygdaloids",
    date: new Date("2016-01-05"),
    venue: "",
    notes: "In partnership with the French consulate and Tulanc University"
  },
  {
    _id: 27,
    title: "Don Piper with So We Are and Eric Ambel",
    band: "So We Are",
    date: new Date("2015-10-15"),
    venue: "",
    notes: "Featuring Colin Dempsey; live performance"
  },
  {
    _id: 28,
    title: "So We Are + Courtney Lee Adams Jr. at HiFi Back Room",
    band: "So We Are",
    date: new Date("2015-03-27"),
    venue: "HiFi Back Room",
    notes: "Acoustic duo performance with Courtney Lee Adams Jr."
  },
  {
    _id: 29,
    title: "Brain and Music Conference, Nashville, Tennessee – August 1, 2015",
    band: "The Amygdaloids",
    date: new Date("2015-08-01"),
    venue: "Nashville, Tennessee",
    notes: "Conference performance"
  },
  {
    _id: 30,
    title: "Brains and Brews",
    band: "The Amygdaloids",
    date: new Date("2014-03-10"),
    venue: "",
    notes: "Event with Eric Klann and Joseph LeDoux; discussion on music and memory"
  },
  {
    _id: 31,
    title: "ROCK YOUR MIND! to Feature NYU Scientists at the Bowery Electric",
    band: "The Amygdaloids",
    date: new Date("2016-11-05"),
    venue: "Bowery Electric",
    notes: "Concert to benefit science programming"
  },
  {
    _id: 32,
    title: "So We Are & The Rock Valley Retinue",
    band: "So We Are",
    date: new Date("2016-10-10"),
    venue: "HiFi",
    notes: "Live performance"
  },
  {
    _id: 33,
    title: "The Sounds of Fear: a pre Halloween show",
    band: "The Amygdaloids",
    date: new Date("2016-10-25"),
    venue: "Sidewalk",
    notes: "Pre Halloween show with unplugged fear-themed songs (Oct 25 at 7:15 PM & Oct 26 at 8:30 PM)"
  },
  {
    _id: 34,
    title: "So We Are in an Inauguration Celebration at NYU",
    band: "So We Are",
    date: new Date("2016-06-15"),
    venue: "NYU",
    notes: "Performance of songs about mind and brain"
  },
  {
    _id: 35,
    title: "So We Are & the Rock Valley Retinue – Summer Music 2016",
    band: "So We Are",
    date: new Date("2016-01-14"),
    venue: "The Rock Valley Schoolhouse",
    notes: "Featuring Joe LeDoux and company; performance noted for August 7"
  },
  {
    _id: 36,
    title: "Heavy Mental Music",
    band: "The Amygdaloids",
    date: new Date("2018-02-12"),
    venue: "",
    notes: "Come and melt your brain with scientists rocking out"
  },
  {
    _id: 37,
    title: "A Musical Performance by So We Are with Colin Dempsey",
    band: "So We Are",
    date: new Date("2018-02-08"),
    venue: "",
    notes: "Following THE SOCIAL BRAIN, CULTURE, AND THE SELF event"
  },
  {
    _id: 38,
    title: "So We Are in Roma, February 2018",
    band: "So We Are",
    date: new Date("2017-10-02"),
    venue: "Italian Psychoanalytic Dialogues, Rome",
    notes: "Performance in Rome"
  },
  {
    _id: 39,
    title: "So We Are: On the Viking Trail",
    band: "So We Are",
    date: new Date("2017-01-17"),
    venue: "Sidewalk NYC",
    notes: ""
  },
  {
    _id: 40,
    title: "Music, Art, Science: An Evening",
    band: "The Amygdaloids",
    date: new Date("2016-12-22"),
    venue: "Sidewalk, NYC",
    notes: "Evening event combining music, art, and science"
  },
  {
    _id: 41,
    title: "So We Are at The Burren",
    band: "So We Are",
    date: new Date("2023-03-20"),
    venue: "The Burren, Somerville, MA",
    notes: ""
  },
  {
    _id: 42,
    title: "Joseph LeDoux & Amanda Thorpe of The Amygdaloids",
    band: "The Amygdaloids",
    date: new Date("2019-10-21"),
    venue: "",
    notes: "A set of Amygdaloids songs performed in London"
  },
  {
    _id: 43,
    title: "Amygdaloids Reboot: Avenue",
    band: "The Amygdaloids",
    date: new Date("2018-11-26"),
    venue: "",
    notes: "2nd Annual Heavy MeNtal Holiday Reunion – Tuesday, December 10, 2019"
  },
  {
    _id: 44,
    title: "Heavy Mental Returns, Unplugged",
    band: "The Amygdaloids",
    date: new Date("2018-04-26"),
    venue: "",
    notes: "Reunion performance scheduled for Friday, Dec 7 at 8 PM"
  },
  {
    _id: 45,
    title: "Silence and Memory: An Exploration of Music, Mind and Brain – Spectrum in Bushwick",
    band: "The Amygdaloids",
    date: new Date("2018-02-12"),
    venue: "Spectrum in Bushwick",
    notes: "Featuring musician/psychotherapist Cornelius"
  },
  {
    _id: 46,
    title: "So We Are Upcoming Performance in Washington, D.C.",
    band: "So We Are",
    date: new Date("2023-07-24"),
    venue: "Washington, D.C.",
    notes: "Performance following LeDoux’s Smithsonian lecture 'Facing Fear'"
  },
  {
    _id: 47,
    title: "Hurleyville Performing Arts Centre Film Screening",
    band: "The Amygdaloids",
    date: new Date("2023-07-18"),
    venue: "Hurleyville Performing Arts Centre",
    notes: "Film screening with filmmaker talkback & performance focusing on Dr. Joseph LeDoux"
  },
  {
    _id: 48,
    title: "IN-PERSON DISCUSSION, LIVE MUSIC, SPECIAL EVENT",
    band: "The Amygdaloids",
    date: new Date("2023-06-22"),
    venue: "",
    notes: "Discussion on Art, Neural Science, and Music with art writer Nancy"
  },
  {
    _id: 49,
    title: "The Amygdaloids Live at Rockwood Hall – Sunday June 25 at 10p",
    band: "The Amygdaloids",
    date: new Date("2023-06-25"),
    venue: "Rockwood Music Hall",
    notes: "Heavy MeNtal live performance"
  },
  {
    _id: 50,
    title: "25 YEARS OF CONSCIOUSNESS | JUN 23 @ 7:30PM at NYU’s Skirball Theater",
    band: "The Amygdaloids",
    date: new Date("2023-05-04"),
    venue: "NYU’s Skirball Theater",
    notes: "Performance celebrating 25 years of consciousness"
  },
  {
    _id: 51,
    title: "Heavy Mental Gig at Candyland in Stockholm",
    band: "The Amygdaloids and So We Are",
    date: new Date("2023-05-04"),
    venue: "Candyland, Stockholm",
    notes: "Performance featuring LeDoux, Colin Dempsey, The Amygdaloids and So We Are"
  }
]