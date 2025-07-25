export interface Show {
    _id?: number;
    title?: string;
    band?: string;
    date: Date;
    venue?: string;
    address?: string;
    notes?: string;
    photoUrl?: string;
    showUrl?: string;
}

export const shows: Show[] = [
{
    _id: 1,
    title: "Secret Science Club",
    date: new Date("2006-11-01"),
    venue: "Union Hall",
    address: "Brooklyn, NYC"
  },
  {
    _id: 2,
    title: "Philoctetes Center for Imagination and Creativity",
    date: new Date("2006-12-16"),
    address: "NYC"
  },
  {    
    _id: 3,
    title: "Entertaining Science",
    date: new Date("2007-03-04"),
    venue: "Cornelia Street Cafe",
    address: "NYC"
  },

  {
        _id: 5,
    title: "NYU Graduation",
    date: new Date("2007-05-08"),
    venue: "Madison Square Garden",
    address: "NYC"
  },
  {
        _id: 6,
    title: "CD Release Party for Heavy Mental",
    date: new Date("2007-10-10"),
    venue: "Otto’s Shrunken Head",
    address: "NYC"
  },
  {
        _id: 7,
    title: "John F. Kennedy Center, Millennium Stage",
    date: new Date("2008-01-03"),
    address: "Washington, DC"
  },
  {
    _id: 8,
    title: "Exit Art, Common Senses",
    date: new Date("2008-02-29"),
    address: "NYC"
  },
  {
        _id: 9,
    title: "Arlene’s Grocery",
    date: new Date("2008-03-11"),
    address: "NYC"
  },
  {
        _id: 10,
    title: "92d Street Y",
    date: new Date("2008-04-03"),
    address: "NYC"
  },
  {
        _id: 11,
    title: "Mind Over Matter",
    date: new Date("2008-04-18"),
    venue: "Rubin Museum of Tibetan Art",
    address: "NYC"
  },
  {
        _id: 12,
    title: "Earth Day Festival",
    date: new Date("2008-04-19"),
    venue: "Off the Grid",
    address: "NYC"
  },
  {
        _id: 13,
    title: "Rock-It Science Festival",
    date: new Date("2009-03-03"),
    venue: "Highline Ballroom",
    address: "NYC"
  },
  {
        _id: 14,
    title: "Lakeside Lounge",
    date: new Date("2009-06-02"),
    address: "NYC"
  },
  {
        _id: 15,
    title: "Kenny’s Castaways",
    date: new Date("2009-09-24"),
    address: "NYC"
  },
  {    _id: 16,
    title: "Mind Science Foundation",
    date: new Date("2009-12-08"),
    address: "San Antonio, TX"
  },
  {
        _id: 17,
    title: "The Rubin Museum of Tibetan Art",
    date: new Date("2010-04-19"),
    address: "NYC",
    notes: "with LeNYC"
  },
  {
        _id: 18,
    title: "Entertaining Science",
    date: new Date("2010-05-10"),
    venue: "Cornelia Street Cafe",
    address: "NYC"
  },
  {
        _id: 19,
    title: "Fear at the Secret Science Club",
    date: new Date("2010-06-22"),
    venue: "Secret Science Club",
    address: "NYC"
  },
  {
        _id: 20,
    title: "NPR Science Friday live performance",
    date: new Date("2010-07-09"),
    venue: "NPR"
  },
  {
        _id: 21,
    title: "Theory of My Mind record release",
    date: new Date("2010-09-29"),
    venue: "NYC"
  },
  {
        _id: 22,
    title: "Newmark Theatre",
    date: new Date("2010-08-29"),
    address: "Portland, OR"
  },
  {
        _id: 23,
    title: "Qualia Fest",
    date: new Date("2010-12-14"),
    venue: "Parkside Lounge",
    address: "NYC"
  },
  {
    _id: 30,
    title: "Banjo Jims",
    band: "Amygdaloids",
    date: new Date("2011-05-13"),
    address: "NYC"
  },
  {
    _id: 31,
    title: "World Science Fair",
    band: "Amygdaloids",
    date: new Date("2011-06-03"),
    address: "NYC"
  },
  {
    _id: 32,
    title: "Coco 66",
    band: "Amygdaloids",
    date: new Date("2011-06-26"),
    address: "NYC"
  },
  {
    _id: 33,
    title: "Goggies Lounge",
    band: "Amygdaloids",
    date: new Date("2011-08-12"),
    address: "NYC"
  },
  {
    _id: 34,
    title: "The Living Room",
    band: "Amygdaloids",
    date: new Date("2011-08-16"),
    address: "NYC"
  },
  {
    _id: 35,
    title: "Qualia Fest",
    band: "Amygdaloids",
    date: new Date("2011-12-06"),
    venue: "Local 629",
    address: "NYC"
  },
  
  // 2012 Shows
  {
    _id: 36,
    title: 'CD release for "All in Our Minds" at Bowery Electric',
    band: "Amygdaloids",
    date: new Date("2012-01-26"),
    venue: "Bowery Electric",
    address: "NYC"
  },
  {
    _id: 37,
    title: "Bar East",
    band: "Amygdaloids",
    date: new Date("2012-03-29"),
    address: "NYC"
  },
  {
    _id: 38,
    title: "I Am Science",
    band: "Amygdaloids",
    date: new Date("2012-04-03"),
    venue: "The Bell House",
    address: "NYC"
  },
  {
    _id: 39,
    title: "A night of Mind and Brain and Magic, with Mark Mitton",
    band: "Amygdaloids",
    date: new Date("2012-05-09"),
    venue: "Sidewalk Café",
    address: "NYC",
    notes: "with Mark Mitton"
  },
  {
    _id: 40,
    title: "New York Academy of Sciences",
    band: "Amygdaloids",
    date: new Date("2012-03-27"),
    address: "NYC"
  },
  {
    _id: 41,
    title: "I Am Science Festival",
    band: "Amygdaloids",
    date: new Date("2012-05-22"),
    venue: "The Bell House",
    address: "NYC"
  },
  {
    _id: 42,
    title: "A Night at Galapagos Art Center",
    band: "Amygdaloids",
    date: new Date("2012-08-02"),
    venue: "Galapagos Art Center",
    address: "NYC"
  },
  {
    _id: 43,
    title: "French Consulate",
    band: "Amygdaloids",
    date: new Date("2012-10-12"),
    venue: "French Consulate",
    address: "NYC"
  },
  {
    _id: 44,
    title: "Qualia Fest",
    band: "Amygdaloids",
    date: new Date("2012-12-02"),
    venue: "Bowery Electric",
    address: "NYC"
  },
  {
    _id: 50,
    title: "Group Therapy",
    band: "Joe and Amanda",
    date: new Date("2013-02-08"),
    venue: "le poisson rouge",
    address: "NYC",
    notes: "Joe, Daniela, Tyler, and Amanda"
  },
  {
    _id: 51,
    title: "The American Association for the Advancement of Science meeting",
    band: "Joe with Stuart Chatwood",
    date: new Date("2013-02-18"),
    venue: "Vancouver, CA",
    address: ""
  },
  {
    _id: 52,
    title: "Second Annual Heavy Mental Variety Show",
    band: "Joe and Amanda",
    date: new Date("2013-05-18"),
    venue: "New York Psychoanalytic Institute",
    address: "New York",
    notes: "Joe, Daniela, Tyler, and Amanda"
  },
  {
    _id: 53,
    title: "Sidewalk Café",
    band: "Joe and Amanda",
    date: new Date("2013-03-09"),
    venue: "Sidewalk Café",
    address: "NYC"
  },
  {
    _id: 54,
    title: "Make Music New York",
    band: "Joe and Amanda",
    date: new Date("2013-06-21"),
    venue: "Make Music New York",
    address: "NYC",
    notes: "Joe, Amanda, and Serena Jost"
  },
  {
    _id: 55,
    title: "A night with the Amygdaloids",
    band: "Amygdaloids",
    date: new Date("2013-10-11"),
    venue: "Helix Center",
    address: "NYC"
  },
  {
    _id: 56,
    title: "Performance at Child Conference",
    band: "Joe and Amanda",
    date: new Date("2013-11-08"),
    venue: "Child Conference",
    address: "Indianapolis, Indiana"
  },
  {
    _id: 57,
    title: "Black Box Theatre, NYU Tisch School",
    band: "Joe and Colin",
    date: new Date("2013-12-13"),
    venue: "Black Box Theatre, NYU Tisch School",
    address: "NYC"
  },
  {
    _id: 58,
    title: "Cantina Royale",
    band: "Joe and Colin",
    date: new Date("2013-12-18"),
    venue: "Cantina Royale",
    address: "NYC"
  },

  // 2014 Shows
  {
    _id: 59,
    title: "Cameo Galler",
    band: "Joe, Daniela, Tyler, and Amanda",
    date: new Date("2014-02-23"),
    address: "NYC"
  },
  {
    _id: 60,
    title: "Palis des congress de Montreal",
    band: "Joe and Colin",
    date: new Date("2014-04-06"),
    venue: "Palis des congress de Montreal",
    address: "Montreal, Canada",
    notes: "Joe, Daniela, Tyler, and Colin"
  },
  {
    _id: 61,
    title: "Bowery Electric",
    band: "Joe and Colin",
    date: new Date("2014-03-13"),
    venue: "Bowery Electric",
    address: "NYC"
  },
  {
    _id: 62,
    title: "North Branch Inn",
    band: "Joe and Colin",
    date: new Date("2014-08-09"),
    venue: "North Branch Inn",
    address: "North Branch, NY",
    notes: "Joe and Colin"
  },
  {
    _id: 63,
    title: "German Psych Association Meeting",
    band: "Joe with German scientists",
    date: new Date("2014-09-22"),
    venue: "German Psych Association Meeting",
    address: "",
    notes: "with the German Amygdaloids"
  },
  {
    _id: 64,
    title: "HiFi with Courtney Lee Adams Jr",
    band: "Joe and Colin",
    date: new Date("2014-10-11"),
    venue: "HiFi",
    address: "NYC",
    notes: "with Courtney Lee Adams Jr"
  },
  {
    _id: 65,
    title: "Pianos Bar",
    band: "Joe and Colin",
    date: new Date("2014-10-01"),
    venue: "Pianos Bar",
    address: "NYC"
  },
  {
    _id: 66,
    title: "Blue Moon Saloon",
    band: "Joe and Colin",
    date: new Date("2014-10-25"),
    venue: "Blue Moon Saloon",
    address: "Lafayette, LA"
  },
  {
    _id: 67,
    title: "Live on KRVS (NPR)",
    band: "Joe and Colin",
    date: new Date("2014-10-25"),
    venue: "KRVS (NPR)",
    address: "Lafayette, LA"
  },
  {
    _id: 68,
    title: "NYU Global Center",
    band: "Joe and Colin",
    date: new Date("2014-11-18"),
    venue: "NYU Global Center",
    address: "NYC",
    notes: "with Rosanne Cash"
  },
  {
    _id: 69,
    title: "HiFi Bar",
    band: "Joe and Colin",
    date: new Date("2015-01-11"),
    venue: "HiFi Bar",
    address: "NYC"
  },
  {
    _id: 70,
    title: "Sidewalk Cafe",
    band: "Joe and Colin",
    date: new Date("2015-01-15"),
    venue: "Sidewalk Cafe",
    address: "NYC",
    notes: "Joe, Daniela, Tyler, and Colin"
  },
  {
    _id: 71,
    title: "Bowery Electric",
    band: "Joe and Colin",
    date: new Date("2015-03-13"),
    venue: "Bowery Electric",
    address: "NYC",
    notes: "Joe, Daniela, Tyler, and Colin"
  },
  {
    _id: 72,
    title: "DROM",
    band: "Joe and Colin",
    date: new Date("2015-03-22"),
    venue: "DROM",
    address: "NYC",
    notes: "Joe, Daniela, Tyler, and Colin"
  },
  {
    _id: 73,
    title: "Private Event at Will Cotton Studio",
    band: "Joe and Colin",
    date: new Date("2015-05-07"),
    venue: "Will Cotton Studio",
    address: "NYC",
    notes: "Joe and Colin"
  },
  {
    _id: 74,
    title: "Sidewalk Cafe",
    band: "Joe and Colin",
    date: new Date("2015-05-10"),
    venue: "Sidewalk Cafe",
    address: "NYC"
  },
  {
    _id: 75,
    title: "Cornelia Street Café",
    band: "Joe and Colin",
    date: new Date("2015-06-22"),
    venue: "Cornelia Street Café",
    address: "NYC"
  },
  {
    _id: 76,
    title: "Rock Valley Schoolhouse",
    band: "Joe and Colin",
    date: new Date("2015-06-28"),
    venue: "Rock Valley Schoolhouse",
    address: "Long Eddy, NY"
  },
  {
    _id: 77,
    title: "INNERSLEEVES RECORDS",
    band: "Joe and Colin",
    date: new Date("2015-07-09"),
    venue: "INNERSLEEVES RECORDS",
    address: "Amagansett, NY"
  },
  {
    _id: 78,
    title: "Music and Cognition Conference",
    band: "Joe and Colin",
    date: new Date("2015-07-29"),
    venue: "Music and Cognition Conference",
    address: "Nashville, TN"
  },
  {
    _id: 79,
    title: "Vanderbilt University, Blair Theater",
    band: "Joe and Colin",
    date: new Date("2015-08-01"),
    venue: "Vanderbilt University, Blair Theater",
    address: "Nashville, TN"
  },
  {
    _id: 80,
    title: "The Basement",
    band: "Joe and Colin",
    date: new Date("2015-08-02"),
    venue: "The Basement",
    address: "Nashville, TN"
  },
  {
    _id: 81,
    title: "HiFi Bar",
    band: "Joe and Colin",
    date: new Date("2015-10-21"),
    venue: "HiFi Bar",
    address: "NYC"
  },
  {
    _id: 82,
    title: "Private Event",
    band: "Joe and Colin",
    date: new Date("2015-11-20"),
    venue: "Private Event",
    address: "NYC"
  },
    // 2016 Shows
  {
    _id: 90,
    title: "Sidewalk Café",
    band: "Joe and Colin",
    date: new Date("2016-01-11"),
    venue: "Sidewalk Café",
    address: "NYC"
  },
  {
    _id: 91,
    title: "Kimmel Center, NYU",
    band: "Joe and Colin",
    date: new Date("2016-03-18"),
    venue: "Kimmel Center, NYU",
    address: "NYC"
  },
  {
    _id: 92,
    title: "DROM",
    band: "Joe and Colin",
    date: new Date("2016-04-03"),
    venue: "DROM",
    address: "NYC",
    notes: "Joe, Daniela, Tyler, and Colin"
  },
  {
    _id: 93,
    title: "Rock Valley Schoolhouse",
    band: "Joe and Colin",
    date: new Date("2016-08-07"),
    venue: "Rock Valley Schoolhouse",
    address: "Long Eddy, NY"
  },
  {
    _id: 94,
    title: "Kimmel Center, NYU",
    band: "Joe and Colin",
    date: new Date("2016-09-22"),
    venue: "Kimmel Center, NYU",
    address: "NYC"
  },
  {
    _id: 95,
    title: "Sidewalk Cafe",
    band: "Joe and Colin",
    date: new Date("2016-10-25"),
    venue: "Sidewalk Cafe",
    address: "NYC"
  },
  {
    _id: 96,
    title: "HiFi Bar",
    band: "Joe and Colin",
    date: new Date("2016-11-21"),
    venue: "HiFi Bar",
    address: "NYC"
  },

  // 2017 Shows
  {
    _id: 97,
    title: "The Burren",
    band: "Joe and Colin",
    date: new Date("2017-01-10"),
    venue: "The Burren",
    address: "Somerville, MA"
  },
  {
    _id: 98,
    title: "Sidewalk Café",
    band: "Joe and Colin",
    date: new Date("2017-01-31"),
    venue: "Sidewalk Café",
    address: "NYC",
    notes: "Joe, Colin, Daniela, Tyler"
  },
  {
    _id: 99,
    title: "The Blue Room",
    band: "Joe and Colin",
    date: new Date("2017-03-08"),
    venue: "The Blue Room",
    address: "Sarah Lawrence College, Bronxville, NY",
    notes: "Joe and Colin"
  },
  {
    _id: 100,
    title: "Rock Valley Schoolhouse",
    band: "Joe and Colin",
    date: new Date("2017-07-30"),
    venue: "Rock Valley Schoolhouse",
    address: "Long Eddy, NY"
  },
  {
    _id: 101,
    title: "Sidewalk Café",
    band: "Joe and Colin",
    date: new Date("2017-10-19"),
    venue: "Sidewalk Café",
    address: "NYC"
  },
  {
    _id: 102,
    title: "Upsala",
    band: "Joe and Colin",
    date: new Date("2017-11-02"),
    venue: "Upsala",
    address: "Sweden"
  },
  {
    _id: 103,
    title: "Stavanger",
    band: "Joe and Colin",
    date: new Date("2017-11-07"),
    venue: "Stavanger",
    address: "Norway"
  },

  // 2018 Shows
  {
    _id: 104,
    title: "Alphabet Beer Company",
    band: "Joe and Colin",
    date: new Date("2018-01-07"),
    venue: "Alphabet Beer Company",
    address: "NYC"
  },
  {
    _id: 105,
    title: "CUNY Graduate Center",
    band: "Joe",
    date: new Date("2018-03-02"),
    venue: "CUNY Graduate Center",
    address: "NYC"
  },
  {
    _id: 106,
    title: "Rome, Italy",
    band: "Joe and Colin",
    date: new Date("2018-03-08"),
    venue: "Rome, Italy",
    address: ""
  },
  {
    _id: 107,
    title: "Spectrum",
    band: "Joe and Colin",
    date: new Date("2018-05-10"),
    venue: "Spectrum",
    address: "NYC",
    notes: "Joe, Colin, Daniela, Tyler"
  },
  {
    _id: 108,
    title: "The Smithsonian, S. Dillon Ripley Center",
    band: "Joe and Colin",
    date: new Date("2018-05-23"),
    venue: "The Smithsonian, S. Dillon Ripley Center",
    address: "Washington DC"
  },
  {
    _id: 109,
    title: "Mexico City",
    band: "Joe and Colin",
    date: new Date("2018-05-31"),
    venue: "Mexico City",
    address: "Mexico"
  },
  {
    _id: 110,
    title: "Rock Valley Schoolhouse",
    band: "Joe and Colin",
    date: new Date("2018-08-26"),
    venue: "Rock Valley Schoolhouse",
    address: "Long Eddy, NY"
  },
  {
    _id: 111,
    title: "House Concert",
    band: "Joe and Colin",
    date: new Date("2018-10-27"),
    venue: "House Concert",
    address: "Nashville, TN"
  },
  {
    _id: 112,
    title: "Sidewalk Café",
    band: "Joe and Colin",
    date: new Date("2018-11-18"),
    venue: "Sidewalk Café",
    address: "NYC",
    notes: "Joe, Colin, Daniela, Tyler"
  },
  {
    _id: 113,
    title: "Sidewalk Café",
    band: "Joe and Colin",
    date: new Date("2018-12-07"),
    venue: "Sidewalk Café",
    address: "NYC"
  },

  // 2019 Shows
  {
    _id: 114,
    title: "Academia Delle Scienze and XO Café",
    band: "Joe and Colin",
    date: new Date("2019-04-14"),
    venue: "Academia Delle Scienze and XO Café",
    address: "Turin, Italy",
    notes: "Joe, Daniela, and Colin"
  },
  {
    _id: 115,
    title: "National Sawdust",
    band: "Colin, Corneius Dufalo, Ittai Shipira",
    date: new Date("2019-05-24"),
    venue: "National Sawdust",
    address: "NYC"
  },
  {
    _id: 116,
    title: "Rock Valley School House",
    band: "Joe and Colin",
    date: new Date("2019-09-01"),
    venue: "Rock Valley School House",
    address: "Long Eddy, NY"
  },
  {
    _id: 117,
    title: "Niagara Bar",
    band: "Joe and Colin",
    date: new Date("2019-12-10"),
    venue: "Niagara Bar",
    address: "NYC",
    notes: "Joe, Tyler, Daniela, and Colin"
  },

  // 2020 and 2021 (Pandemic Pause)
  {
    _id: 118,
    title: "Rock Valley School House",
    band: "Joe and Colin",
    date: new Date("2022-07-03"),
    venue: "Rock Valley School House",
    address: "Long Eddy, NY"
  },

  // 2023 Shows
  {
    _id: 119,
    title: "The Marsh Theater",
    band: "Joe and Colin",
    date: new Date("2023-01-14"),
    venue: "The Marsh Theater",
    address: "San Francisco, CA"
  },
  {
    _id: 120,
    title: "Pub",
    band: "Joe and Amanda",
    date: new Date("2023-04-15"),
    venue: "Pub",
    address: "London, UK"
  },
  {
    _id: 121,
    title: "Karolinska Institute",
    band: "Joe and Colin",
    date: new Date("2023-04-24"),
    venue: "Karolinska Institute",
    address: "Stockholm, Sweden"
  },
  {
    _id: 122,
    title: "Candyland Art Space",
    band: "Joe and Colin",
    date: new Date("2023-04-24"),
    venue: "Candyland Art Space",
    address: "Stockholm, Sweden"
  },
  {
    _id: 123,
    title: "Association for the Scientific Study of Consciousness",
    band: "Joe and Colin",
    date: new Date("2023-06-23"),
    venue: "Kimmel C Center, NYU",
    address: "NYC",
    notes: "with David Humphrey, Heather Fergusen, and Richard Barone"
  },
  {
    _id: 124,
    title: "Rockwood Music Hall",
    band: "Joe and Colin",
    date: new Date("2023-06-25"),
    venue: "Rockwood Music Hall",
    address: "NYC"
  },
  {
    _id: 125,
    title: "Smithsonian",
    band: "Joe and Colin",
    date: new Date("2023-07-23"),
    venue: "Smithsonian",
    address: "Washington, DC"
  },
  {
    _id: 126,
    title: "Time and Space Gallery",
    band: "Joe and Colin",
    date: new Date("2023-08-05"),
    venue: "Time and Space Gallery",
    address: "Hudson, NY"
  },
  {
    _id: 127,
    title: "Hurleyville Performing Arts Center",
    band: "Joe and Colin",
    date: new Date("2023-08-11"),
    venue: "Hurleyville Performing Arts Center",
    address: "Hurleyville, NY"
  },
  {
    _id: 128,
    title: "Basilica Hudson",
    band: "Joe and Colin",
    date: new Date("2023-07-09"),
    venue: "Basilica Hudson",
    address: "Hudson, NY"
  },
  {
    _id: 129,
    title: "Right Proper Brewing Company",
    band: "Joe and Colin",
    date: new Date("2023-11-12"),
    venue: "Right Proper Brewing Company",
    address: "Washington, DC"
  },
  {
    _id: 130,
    title: "LeDoux Lab Closing Party",
    band: "Joe and Colin",
    date: new Date("2023-11-17"),
    venue: "LeDoux Lab Closing Party",
    address: "NYU, NYC",
    notes: "Joe, Tyler, Daniela, Colin"
  },

  // 2024 Shows
  {
    _id: 131,
    title: "House Concert",
    band: "Joe and Colin",
    date: new Date("2024-06-13"),
    venue: "House Concert",
    address: "NYC"
  },
  {
    _id: 132,
    title: "Rio De Janeiro",
    band: "Joe and Colin",
    date: new Date("2024-06-23"),
    venue: "Rio De Janeiro",
    address: "Brazil"
  },
  {
    _id: 133,
    title: "Rock Valley School House",
    band: "Joe and Colin",
    date: new Date("2024-09-01"),
    venue: "Rock Valley School House",
    address: "Long Eddy, NY"
  },
  {
    _id: 134,
    title: "University Fernando Pessoa",
    band: "Joe and Amanda",
    date: new Date("2024-10-10"),
    venue: "University Fernando Pessoa",
    address: "Porto, Portugal"
  },
  {
    _id: 135,
    title: "Mount Sinai Student Retreat",
    band: "Joe and Colin",
    date: new Date("2024-11-08"),
    venue: "Mount Sinai Student Retreat",
    address: "NYC"
  },
  {
    _id: 136,
    title: "Clive Davis Institute of Recorded Music",
    band: "Joe and Colin",
    date: new Date("2024-12-06"),
    venue: "Clive Davis Institute of Recorded Music",
    address: "NYC",
    notes: "Joe, Daniela, Tyler, Colin, David Humphrey"
  },
  {
    _id: 137,
    title: "The Garage, Clive Davis Institute of Recorded Music",
    band: "Joe and Colin",
    date: new Date("2024-12-07"),
    venue: "The Garage",
    address: "NYC",
    notes: "Joe, Daniela, Colin, Jeff Perez, Sam, Lenny Kaye, Eric Ambel, Richard Barone"
  },
  {
    _id: 138,
    title: "NYC release of Verner Herzog’s Theatre of Thought",
    band: "Joe and Tyler",
    date: new Date("2024-12-12"),
    venue: "Film Forum",
    address: "NYC"
  },

  // 2025 Shows
  {
    _id: 139,
    title: "Seminary Hill",
    band: "Joe and Colin",
    date: new Date("2025-03-27"),
    venue: "Seminary Hill",
    address: "Callicoon, NY"
  },
  {
    _id: 140,
    title: "The Hound Bookstore",
    band: "Joe and Colin",
    date: new Date("2025-03-28"),
    venue: "The Hound Bookstore",
    address: "Roscoe, NY"
  },
  {
    _id: 141,
    title: "Ritz Carlton",
    band: "Joe and Colin",
    date: new Date("2025-09-03"),
    venue: "Ritz Carlton",
    address: "New Orleans, LA"
  },
  {
    _id: 142,
    title: "Verner Herzog’s Theatre of Thought release",
    band: "Joe and Colin",
    date: new Date("2025-09-04"),
    venue: "Broad Theatre",
    address: "New Orleans"
  }
]