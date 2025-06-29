export interface Show {
    _id?: number;
    title?: string;
    band?: string;
    date: Date;
    venue: string;
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
    venue: "Philoctetes Center",
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
    _id: 4,
    title: "Cornelia Street Cafe",
    date: new Date("2007-03-19"),
    venue: "Cornelia Street Cafe",
    address: "NYC"
  },
  {
        _id: 5,
    title: "Madison Square Garden, NYU Graduation",
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
    venue: "John F. Kennedy Center",
    address: "Washington, DC"
  },
  {
        _id: 8,
    title: "Exit Art, Common Senses",
    date: new Date("2008-02-29"),
    venue: "Exit Art",
    address: "NYC"
  },
  {
        _id: 9,
    title: "Arlene’s Grocery",
    date: new Date("2008-03-11"),
    venue: "Arlene’s Grocery",
    address: "NYC"
  },
  {
        _id: 10,
    title: "92d Street Y",
    date: new Date("2008-04-03"),
    venue: "92d Street Y",
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
    title: "Off the Grid, Earth Day Festival",
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
    venue: "Lakeside Lounge",
    address: "NYC"
  },
  {
        _id: 15,
    title: "Kenny’s Castaways",
    date: new Date("2009-09-24"),
    venue: "Kenny’s Castaways",
    address: "NYC"
  },
  {    _id: 16,
    title: "Mind Science Foundation",
    date: new Date("2009-12-08"),
    venue: "Mind Science Foundation",
    address: "San Antonio, TX"
  },
  {
        _id: 17,
    title: "The Rubin Museum of Tibetan Art",
    date: new Date("2010-04-19"),
    venue: "Rubin Museum of Tibetan Art",
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
    venue: "Newmark Theatre",
    address: "Portland, OR"
  },
  {
        _id: 23,
    title: "Qualia Fest",
    date: new Date("2010-12-14"),
    venue: "Parkside Lounge",
    address: "NYC"
  }
]