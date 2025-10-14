export interface Lecture {
    id: string;
    title: string;
    date: Date;
    event: string;
    urlToLecture?: string;
}

export const lectures : Lecture[] = [
{
    id: "100",
    title: "The Four Realms of Existence",
    date: new Date("2025-10-07"),
    event: "Athena Culture Center, Mailand ti Mendrisio, Switzerland",
  },
  {
    id: "101",
    title: "The Four Realms of Existence. On the neuroscience front, the festival will feature: Joseph LeDoux, one of the world's leading scholars of the neurobiology of emotions and longtime director of the Center for the Neuroscience of Fear and Anxiety in New York, who will discuss a new theory of the self and consciousness, capable of opening up unprecedented perspectives on what it means to be human.",
    date: new Date("2025-10-03"),
    event: "Bergamo Science Festival 2025, Bergamo, Italy",
    urlToLecture: "https://www.bergamoscienza.it/it/festival-corrente/xxiii-edizione-bergamoscienza-2025"
  },
  {
    id: "102",
    title: "The Four Realms of Existence",
    date: new Date("2025-09-03"),
    event: "International Society for Psychoneuroendocrinology, New Orleans, La.",
  },
    {
    id: "103",
    title: "Q&A about my role in Werner Herzog’s 'Theatre of Thought'",
    date: new Date("2025-08-21"),
    event: "Callicoon Theater, Callicoon, NY",
  },
  {
    id: "104",
    title: "The Four Realms of Existence",
    date: new Date("2025-07-13"),
    event: "Emotional Intelligence Conference, Manchester UK",
  },
  {
    id: "105",
    title: "The Four Realms of Existence",
    date: new Date("2025-06-21"),
    event: "Conference on Embodied Education, University of Cassino and Southern Lazio (Italy)",
  },
  {
    id: "106",
    title: "The Four Realms of Existence",
    date: new Date("2025-06-16"),
    event: "Hamburg Brain School Lecture Series",
  },
  {
    id: "107",
    title: "The Four Realms of Existence",
    date: new Date("2025-06-13"),
    event: "Rewiring Fear & Anxiety World Summit 2025",
  },
  {
    id: "108",
    title: "The Four Realms of Existence",
    date: new Date("2025-05-08"),
    event: "Annual Symposium for Leon Levy Scholarships in Neuroscience, New York Academy of Sciences",
  },
  {
    id: "109",
    title: "The Four Realms of Existence",
    date: new Date("2025-05-03"),
    event: "Society for Philosophy and Neuroscience, St. Louis Mo",
  },
  {
    id: "110",
    title: "The Four Realms of Existence",
    date: new Date("2025-04-25"),
    event: "Child Study Center, NYU Langone Medical School",
  },
  {
    id: "111",
    title: "Music and the Brain Panel Discussion",
    date: new Date("2025-04-22"),
    event: "The Helix Center, New York NY",
  },
  {
    id: "112",
    title: "The Four Realms of Existence",
    date: new Date("2025-04-04"),
    event: "Department of Psychology, University of Alabama",
  },
  {
    id: "113",
    title: "The Four Realms of Existence",
    date: new Date("2025-03-27"),
    event: "Seminary Road Event Space, Callicoon NY",
  },
  {
    id: "114",
    title: "The Four Realms of Existence",
    date: new Date("2025-03-28"),
    event: "The Hound Bookstore, Roscoe NY",
  },
  {
    id: "115",
    title: "The Four Realms of Existence",
    date: new Date("2025-03-19"),
    event: "Art and Science Symposium, Montclair State University, Montclair, New Jersey",
  },
  {
    id: "2001",
    title: "The Troubling Problem of Emotion",
    date: new Date("2025-11-18"),
    event: "Society for Neuroscience — History of Neuroscience Lecture",
  },
  {
    id: "2002",
    title: "What happened to the 'Mental' in 'Mental Disorders'?",
    date: new Date("2025-10-24"),
    event: "Brain & Behavior Research Foundation — Goldman-Rakic Award Lecture",
  },
  {
    id: "116",
    title: "Fear Anxiety",
    date: new Date("2024-10-18"),
    event: "European Anxiety Association",
  },
  {
    id: "117",
    title: "Honorary Degree Lecture",
    date: new Date("2024-10-10"),
    event: "University Fernando Pessoa, Porto Portugal",
  },
  {
    id: "118",
    title: "The Four Realms of Existence",
    date: new Date("2024-06-27"),
    event: "Brain, Behavior and Emotion Conference, Rio de Janeiro, Brazil",
  },
  {
    id: "119",
    title: "A New Theory of Being Human (The Four Realms of Existence)",
    date: new Date("2024-05-21"),
    event: "Smithsonian Associates, Washington, DC",
  },
  {
    id: "120",
    title: "The Four Realms of Existence",
    date: new Date("2024-05-04"),
    event: "Conference on Defining Brain Function, University of California, Santa Barbara, California",
  },
  {
    id: "121",
    title: "Brain, behavior, and being: Unraveling stress",
    date: new Date("2024-04-23"),
    event: "17th Annual Amygdala, Stress, and PTSD Conference, Uniformed Services University, Bethesda, MD",
    urlToLecture: "https://www.cstsonline.org/assets/media/documents/csts-amygdala-program-2024.pdf",
  },
  {
    id: "122",
    title: "The Four Realms of Existence",
    date: new Date("2024-04-05"),
    event: "Hunter College Neuroscience, New York, NY",
  },
  {
    id: "123",
    title: "The Four Realms of Existence",
    date: new Date("2024-02-02"),
    event: "Conference on Brain Research and the Future of Teaching, Academy for Neuroscientific Educational Management, Frankfurt, Germany",
  },
  {
    id: "124",
    title: "The Four Realms of Existence",
    date: new Date("2024-01-26"),
    event: "Hungarian Academy of Science, Pecs, Hungary",
  },
{
    id: "125",
    title: "The Four Realms of Existence",
    date: new Date("2023-12-15"),
    event: "International Philosophy in Biology and Medicine Group, University of Bordeaux, France",
  },
  {
    id: "5",
    title: "The Four Realms of Existence",
    date: new Date("2023-11-30"),
    event:
      "Rockefeller University — The Price Family Center for the Social Brain 2023 Symposium: Social Interactions, Emotional Processing, and Inference in the Brain (via Zoom)",
    urlToLecture:
      "https://www.rockefeller.edu/events-and-lectures/57966-the-price-family-center-for-the-social-brain-2023-symposium/",
  },
  {
    id: "6",
    title: "The Four Realms of Existence",
    date: new Date("2023-10-10"),
    event:
      "ROME Workshop, Accademia Nazionale dei Lincei — Mindful Connections (Oct 10–11, 2023)",
  },
  {
    id: "7",
    title: "Emotion Roundtable",
    date: new Date("2023-09-23"),
    event: "Helix Center NYC",
    urlToLecture: "https://www.helixcenter.org/roundtables/emotion/",
  },
  {
    id: "8",
    title: "The Four Realms of Existence",
    date: new Date("2023-09-06"),
    event: "LSU Psychiatry Grand Rounds",
  },
  {
    id: "9",
    title: "The Four Realms of Existence",
    date: new Date("2023-08-28"),
    event: "Plenary Lecture, European Brain and Behaviour Society, Amsterdam, Netherlands",
    urlToLecture: "https://ebbs2023.azuleon.org/plenarySpeakers",
  },
  {
    id: "10",
    title: "The Four Realms of Existence",
    date: new Date("2023-06-27"),
    event: "NIH Consciousness Workshop",
    urlToLecture:
      "https://neuroscienceblueprint.nih.gov/about/events/next-frontiers-consciousness-research-workshop",
  },
  {
    id: "11",
    title:
      "Our Realms of Existence: A Fresh Look at the Science of What and Who We Are",
    date: new Date("2023-06-22"),
    event:
      "A keynote talk by ASSC President Joseph LeDoux at the 26th meeting of the Association for the Scientific Study of Consciousness, at NYU",
  },
  {
    id: "12",
    title:
      "Our Realms of Existence: An exploration of the biology and psychology of life",
    date: new Date("2023-05-04"),
    event: "Cambridge Chaucer Lecture",
    urlToLecture: "https://www.mrc-cbu.cam.ac.uk/events/chaucer-club/",
  },
  {
    id: "13",
    title: "Biology, Psychology, and Life: Connecting the Dots",
    date: new Date("2023-04-27"),
    event: "Karolinska Institutet – What is Life? series",
  },
  {
    id: "14",
    title:
      "Heavy Mental: Music about Mind and Brain and Mental Disorders",
    date: new Date("2023-04-28"),
    event: "Kulturella hjärnan föreläsning at Karolinska Institutet",
  },
  {
    id: "15",
    title: "What Happened to the 'Mental' in Mental Disorders",
    date: new Date("2023-04-19"),
    event:
      "The Institute of Philosophy Chandaria Lecture 2023, London, UK",
  },
  {
    id: "16",
    title: "The Four Realms of Existence",
    date: new Date("2023-04-17"),
    event: "Sainsbury Wellcome Centre",
    urlToLecture:
      "https://www.sainsburywellcome.org/web/events/swc-seminar-four-realms-existence",
  },
{
    id: "17",
    title: "The Four Realms of Existence",
    date: new Date("2022-11-04"),
    event: "CUNY Cognitive Neuroscience Colloquium",
    urlToLecture: "https://www.gc.cuny.edu/cognitive-neuroscience",
  },
  {
    id: "18",
    title: "The Four Realms of Existence",
    date: new Date("2022-10-20"),
    event:
      "57th National Congress Psychiatric Association of Turkey, Keynote Address",
  },
  {
    id: "19",
    title:
      "Scientific Controversies No. 24: Body, Brain and Consciousness",
    date: new Date("2022-10-18"),
    event: "Pioneer Works, Brooklyn",
  },
  {
    id: "20",
    title: "Masters of the Mind Lecture",
    date: new Date("2022-10-05"),
    event:
      "Leuven Brain Institute — Masters of the Mind Lecture Series, Leuven, Belgium",
  },
  {
    id: "21",
    title:
      "Memory, Consciousness and the Emotions: Themes from the Work of Joseph LeDoux",
    date: new Date("2022-09-30"),
    event:
      "London School of Economics, Animal Sentience Group",
  },
  {
    id: "22",
    title:
      "What Happened to the 'Mental' in 'Mental' Disorders",
    date: new Date("2022-09-27"),
    event: "DEC (Département d'études cognitives)",
  },
  {
    id: "23",
    title: "The Four Realms of Existence",
    date: new Date("2022-09-16"),
    event:
      "University College London, Institute of Cognitive Neuroscience",
    urlToLecture: "https://www.ucl.ac.uk/icn/institute-cognitive-neuroscience",
  },
  {
    id: "24",
    title: "Putting the mental back in mental disorders",
    date: new Date("2022-09-08"),
    event: "Swiss Society of Psychiatry and Psychotherapy, Switzerland",
    urlToLecture: "https://www.ssbp.ch/",
  },
  {
    id: "25",
    title: "Honouring Karim Nader",
    date: new Date("2022-08-22"),
    event:
      "Molecular and Systems Neuroscience Cognition Symposium",
    urlToLecture:
      "https://www.mcgill.ca/neuro/channels/event/molecular-and-systems-neuroscience-cognition-symposium-honouring-karim-nader-313650",
  },
  {
    id: "26",
    title:
      "Wakeup Call: Mental States Are a Key Component of Mental Disorders",
    date: new Date("2022-08-10"),
    event:
      "The Inaugural NIH Consciousness Research Interest Group Seminar Series",
  },
  {
    id: "27",
    title: "From the way we were to the way we are",
    date: new Date("2022-05-19"),
    event:
      "The Braining Club, Systems Neuroscience Through the Lens of Evolutionary Theory Workshop",
  },
  {
    id: "28",
    title: "As Soon as there is life there is danger",
    date: new Date("2022-03-03"),
    event:
      "Biopsychology, Institute of Cognitive Neuroscience, Faculty of Psychology, Ruhr-University Bochum, Germany",
  },
  {
    id: "29",
    title: "As Soon as there is life there is danger",
    date: new Date("2022-02-19"),
    event: "International Society for the Systems Sciences",
    urlToLecture: "https://www.isss.org/home/",
  },
{
    id: "30",
    title: "Then and Now Panel: In this session, moderated by Liz Phelps, Gazzaniga and LeDoux talked how their collaboration influenced their separate scientific paths, including their common interest in consciousness.",
    date: new Date("2021-11-08"),
    event: "SFN 50th Anniversary Events",
  },
  {
    id: "31",
    title: "Mind-Wandering between Memory and Creativity",
    date: new Date("2021-09-27"),
    event: "Zoom",
  },
  {
    id: "32",
    title: "Putting the Mental Back into Mental Disorders",
    date: new Date("2021-09-03"),
    event:
      "Geopolitics and Global Futures Symposium, Geneva Centre for Security Policy",
  },
  {
    id: "33",
    title: "As Soon as there is life there is danger",
    date: new Date("2021-06-29"),
    event:
      "IBRO-RIKEN CBS Summer Program, Riken Center for Brain Science, Japan",
  },
  {
    id: "34",
    title: "The Deep History of Ourselves",
    date: new Date("2021-04-17"),
    event: "Teaching Purposeful Brains, Learning and the Brain",
  },
  {
    id: "35",
    title: "Emotions in the Arts, Humanities, and Sciences",
    date: new Date("2021-04-16"),
    event: "EBI & CLaME",
  },
  {
    id: "36",
    title: "As Soon as there is life there is danger",
    date: new Date("2021-04-09"),
    event:
      "International Congress of Education, Psychology and Neurosciences, São Pedro, Sinapses",
  },
  {
    id: "37",
    title: "As Soon as there is life there is danger",
    date: new Date("2021-02-21"),
    event:
      "The Integrated Brain and Behavior Research Center, University of Haifa, Israel",
  },
{
    id: "38",
    title: "As soon as there is life, there is danger",
    date: new Date("2020-11-24"),
    event:
      "XVI Simposio de Estudiantes de Filosofía, Pontificia Universidad Católica del Perú",
  },
  {
    id: "39",
    title: "As soon as there was life, there was danger",
    date: new Date("2020-09-12"),
    event: "33rd ECNP Congress",
  },
  {
    id: "40",
    title: "Joseph LeDoux on anxiety and fear",
    date: new Date("2020-05-19"),
    event: "New York State Writers Institute, University of Albany",
  },
  {
    id: "41",
    title: "Minds and Machines: Reloaded",
    date: new Date("2020-05-12"),
    event: "NYU Arts and Science",
  },
  {
    id: "42",
    title: "How Deep Do We Go?",
    date: new Date("2020-02-29"),
    event: "The Helix Center Roundtable",
  },
  {
    id: "150",
    title: "Author Talk: How we got Conscious Brains",
    event: "Center for Inquiry NYC",
    date: new Date("2019-11-20"),
  },
  {
    id: "44",
    title: "As soon as there is life, there is danger",
    date: new Date("2019-05-03"),
    event: "Saas-Free Summer Institute of Art, NYC",
  },
  {
    id: "45",
    title: "Silence & Memory",
    date: new Date("2019-04-23"),
    event: "National Sawdust",
    urlToLecture: "https://nationalsawdust.org",
  },
  {
    id: "46",
    title: "From split-brain to emotional consciousness",
    date: new Date("2019-03-27"),
    event: "Italian Academy of Sciences, Turin, Italy",
  },
  {
    id: "149",
    title: "EBI 2019 Distinguished Scientist Lecture",
    event: "UCLA and University of Hong Kong",
    date: new Date("2019-03-08"),
  },
  {
    id: "69",
    title: "Putting Emotion Into the Science of Consciousness",
    date: new Date("2019-08-09"),
    event: "Copernicus",
  },
  {
    id: "67",
    title: "As Soon As There Is Life, There Is Danger",
    date: new Date("2019-05-14"),
    event: "Accademia delle Scienze di Torino",
  },
{
    id: "47",
    title: "Putting Emotion into Consciousness",
    date: new Date("2018-06-26"),
    event: "22nd Meeting of the ASSC (Krakow, Poland)",
  },
  {
    id: "48",
    title: "Have we misunderstood what fear is?",
    date: new Date("2018-06-01"),
    event: "El Aleph Festival de Arte y Ciencia, MUAC, Mexico City",
  },
  {
    id: "70",
    title: "Joseph LeDoux: ¿Hemos entendido mal lo que es el miedo?",
    date: new Date("2018-06-01"),
    event: "Cultura en directo UNAM 2",
  },
  {
    id: "49",
    title:
      "Facing Fear: Why do our bodies and minds react the way they do when we’re in danger?",
    date: new Date("2018-03-07"),
    event: "Smithsonian’s Ripley Center, Washington, D.C.",
  },
  {
    id: "50",
    title: "OUTSIDE-IN: THE SOCIAL BRAIN, CULTURE, AND THE SEL",
    date: new Date("2018-03-02"),
    event: "Graduate Center, CUNY",
  },
  {
    id: "71",
    title: "Richard Brown - Neuroscience and Contemporary Theories of Consciousness",
    date: new Date("2018-02-26"),
    event: "NYU The Emotional Brain Institute",
  },
  {
    id: "51",
    title: "Anxiety",
    date: new Date("2018-02-10"),
    event: "Conference, Rome, Italy",
  },
  {
    id: "72",
    title: "NYU Animal Consciousness Conference Part 2, Day 2",
    event: "",
    date: new Date("2018-08-31"),
  },
  {
    id: "68",
    title: "Do Split Brain Patients Have Two Minds?",
    date: new Date("2018-10-25"),
    event: "NYU Center for Mind, Brain and Consciousness",
  },
{
    id: "52",
    title: "What is fear? And is fear od death really a 'fear'?",
    date: new Date("2017-03-03"),
    event: "Awareness of Death and Personal Mortality: Implications for Anthropogeny",
  },
{
    id: "53",
    title:
      "The struggle with fear - Implications for understanding and the treatment of fear",
    date: new Date("2016-12-17"),
    event: "Mega Event Brain Knowledge, Düsseldorf, Germany",
  },
  {
    id: "73",
    title:
      "Joseph E. LeDoux, Ph.D., was awarded the 2016 Jean-Marie Delwart International Prize",
    date: new Date("2016-11-09"),
    event: "Award",
  },
  {
    id: "54",
    title: "The Anxious Brain: The Neuroscience of Phobias",
    date: new Date("2016-10-18"),
    event: "AAAS – Neuroscience and Society",
  },
  {
    id: "151",
    title: "LeDoux: Anxiety and Neuropsychoanalysis",
    event: "LabLinks: Emotion and the Brain",
    date: new Date("2016-10-08"),
  },
  {
    id: "55",
    title: "Emotion and the Brain",
    date: new Date("2016-10-13"),
    event: "LabLinks",
  },
  {
    id: "56",
    title: "",
    date: new Date("2016-06-12"),
    event:
      "World Congress on Brain, Behavior and Emotions, Buenos Aires, Argentina",
  },
  {
    id: "57",
    title:
      "The Unconscious Is Less Mysterious But No Less Important Than You Thought",
    date: new Date("2016-04-21"),
    event: "Odyssey of the Mind",
  },
  {
    id: "58",
    title:
      "Conference explores 'Foundations of Emotions in Mind, Brain and Culture'",
    date: new Date("2016-02-09"),
    event: "Emory University (cmbc.emory.edu)",
    urlToLecture:
      "http://news.emory.edu/stories/2016/02/er_cmbc_conference/campus.html",
  },
{
    id: "59",
    title: "Memory, Trauma and Resilience",
    date: new Date("2015-11-18"),
    event: "Intrepid Sea, Air and Space Museum",
  },
  {
    id: "60",
    title: "The New York Consciousness Collective",
    date: new Date("2015-11-06"),
    event: "CUNY's Cognitive Science Speaker Series",
  },
  {
    id: "61",
    title:
      "Reacting and Acting When in Harm’s Way: What’s the Role of Fear?",
    date: new Date("2015-09-12"),
    event: "EBBS & EBPS Joint Meeting, Verona, Italy",
  },
  {
    id: "62",
    title: "Anxious",
    date: new Date("2015-07-15"),
    event: "The Rubin Museum of Art",
  },
  {
    id: "63",
    title: "Brains and Brews",
    date: new Date("2015-03-22"),
    event: "Brains and Brews",
  },
  {
    id: "64",
    title: "Talking about fear",
    date: new Date("2015-02-24"),
    event: "SOPSI 2015 Congress, Milano, Italy",
  },
  {
    id: "74",
    title:
      "LeDoux Recognized by APS for Fear, Anxiety Research - 2015 recipient of the APS William James Fellow Award",
    event: "27th APS Annual Convention, New York City",
    date: new Date("2015-05-21"),
    urlToLecture:
      "https://www.psychologicalscience.org/observer/ledoux-recognized-by-aps-for-fear-anxiety-research",
  },
  { id: "2012-01", title: "Neuroscience Day", date: new Date("2012-01-01"), event: "University of Toronto" },
  { id: "2012-02", title: "John P. McGovern Award Lecture in the Behavioral Sciences", date: new Date("2012-01-01"), event: "AAAS" },
  { id: "2012-03", title: "The Moral Brain", date: new Date("2012-01-01"), event: "2012 Bioethics Conference" },
  { id: "2012-04", title: "Seminar in Neurobiology", date: new Date("2012-01-01"), event: "Columbia University" },
  { id: "2012-05", title: "NACS Seminar: Survival and Emotion — What’s the Connection?", date: new Date("2012-01-01"), event: "University of Maryland" },
  { id: "2012-06", title: "Embodied Mind Conference", date: new Date("2012-01-01"), event: "" },
  { id: "2012-07", title: "Integrative Center for Learning & Memory Inaugural Symposium", date: new Date("2012-01-01"), event: "UCLA" },
  { id: "2012-08", title: "Jerilyn Ross Lecture — Integrating Mind-Body Connections: Advancing Science, Informing Practice for Anxiety and Related Disorders", date: new Date("2012-01-01"), event: "ADAA" },
  { id: "2012-09", title: "Learning & the Brain Symposium — Keynote", date: new Date("2012-01-01"), event: "" },
  { id: "2012-10", title: "Evolution and Function of Consciousness", date: new Date("2012-01-01"), event: "" },
  { id: "2012-11", title: "The Neuroscience and Psychology of Nostalgia — How memories of our past affect our present", date: new Date("2012-01-01"), event: "Center for Inquiry" },
  { id: "2012-12", title: "Pavlovian Society Annual Meeting", date: new Date("2012-01-01"), event: "" },
  { id: "2012-13", title: "Picower Institute 10th Anniversary Symposium", date: new Date("2012-01-01"), event: "" },
  { id: "2012-14", title: "Learning and Memory, Neuroeducation", date: new Date("2012-01-01"), event: "Dana Foundation" },
  { id: "2012-15", title: "The Amygdala Meeting", date: new Date("2012-01-01"), event: "UCL" },
  { id: "2012-16", title: "Learning & the Brain Symposium — (if separate appearance)", date: new Date("2012-01-01"), event: "" },

  // ---- Older historical items (unchanged from your array) ----
  {
    id: "143",
    title: "Stress in the City",
    date: new Date("2002-01-29"),
    event: "Rockefeller University",
  },
  {
    id: "144",
    title: "The Self: From Soul to Brain",
    date: new Date("2002-09-26"),
    event: "New York Academy of Sciences",
  },
  {
    id: "145",
    title: "The Synaptic Self: How Our Brains Become Who We Are",
    event:
      "7th Annual Stony Brook Mind/Brain Lecture. Probing the Mysteries of the Mind",
    date: new Date("2003-03-31"),
    urlToLecture:
      "http://www.theswartzfoundation.org/mind-brain-2003.asp",
  },
  {
    id: "146",
    title:
      "Fear: Its Political Uses and Abuses- A social research conference at New School University",
    event: "New School University",
    date: new Date("2004-02-06"),
  },
  {
    id: "147",
    title:
      "Joseph LeDoux Ph.D: Danger is Ancient—Fear Is A Recent Invention",
    event: "92Y / Science Salon",
    date: new Date("2020-03-11"),
  },
  {
    id: "148",
    title: "Schooling the Self",
    event: "Learning and the Brain",
    date: new Date("2020-01-23"),
  },
    {
    id: "149",
    title: "As soon as there was life, there was danger (Zoom)",
    event: "ACBS World Conference",
    date: new Date("2020-07-16"),
  },

  { id: "158", title: "FASEB", event: "New Orleans, Louisiana", date: new Date("1982-04-15") },
  { id: "159", title: "Neurobiology of Learning & Memory Conf. in the Neurochemistry Section", event: "UC Irvine, Irvine, California", date: new Date("1982-10-26") },
  { id: "160", title: "12 Annual SFN Meeting", event: "Minneapolis, Minnesota", date: new Date("1982-10-31") },
  { id: "161", title: "1st International Symposium of Neuropysch", event: "Morelia, Mexico (state of Michoacan)", date: new Date("1982-11-08") },
  { id: "162", title: "11th Symp. On Cerebral Blow Flow & Metabolism", event: "Paris, France", date: new Date("1983-06-20") },
  { id: "163", title: "13th Annual Meeting SFN", event: "Boston, Mass", date: new Date("1983-11-06") },
  { id: "164", title: "Conference on Memory Dysfunction: an integration on Animal and Human Research from Preclinical and Clinical Perspectives", event: "NYC (NYAS)", date: new Date("1984-06-13") },
  { id: "165", title: "8th Winter Conference on Neurobiology of Learning and Memory", event: "Prospector Sq, Park City, Utah", date: new Date("1984-01-14") },
  { id: "166", title: "14th Annual SFN meeting", event: "Anaheim, California", date: new Date("1984-10-10") },
  { id: "167", title: "4th World Congress of Biological Psychiatry", event: "Philadelphia, Pennyslvania", date: new Date("1985-09-08") },
  { id: "168", title: "15th Annual SFN meeting", event: "Dallas, Texas", date: new Date("1985-10-20") },
  { id: "169", title: "American Heart Assoc. 58th Scientific Sessions", event: "Washington, DC", date: new Date("1985-11-11") },
  { id: "170", title: "Winter Conference on Current Issues in Developmental Psychobiology", event: "Hawk's Cay, Florida", date: new Date("1986-01-09") },
  { id: "171", title: "16th Annual Meeting SFN", event: "Washington, DC", date: new Date("1986-11-09") },
  { id: "172", title: "11th Annual Conference on Learning & Memory", event: "Prospector Square, Park City, Utah", date: new Date("1987-01-10") },
  { id: "173", title: "Neural Mechanisms in Cardiovascular Regulation", event: "Vermont Academy, Saxtons River, VT", date: new Date("1987-06-28") },
  { id: "174", title: "Short Course in Computational Neuroscience", event: "Los Angeles, California", date: new Date("1987-06-04") },
  { id: "175", title: "Neuronal Control of Bodily Function - Basic & Clinical Aspects. IV New Frontiers of Stress Research", event: "University of Trier, Trier, Germany", date: new Date("1987-09-17") },
  { id: "176", title: "3rd Conference of Learning and Memory", event: "Irvine, California", date: new Date("1987-10-14") },
  { id: "177", title: "McDonnell Foundation Initiative in Cognitive Neuroscience Emotion Subcommittee", event: "New York, New York", date: new Date("1987-11-08") },
  { id: "178", title: "17th Annual Meeting SFN", event: "New Orleans, Louisiana", date: new Date("1987-11-16") },
  { id: "179", title: "Workshop on NS methods: use of electric shock as an Aversive Stimulus in Animal Research: Rationale, Approaches, Ethics", event: "Rockville, MD", date: new Date("1987-12-03") },
  { id: "180", title: "12th Annual Winter Conference on Neurobiology of Learning & Memory", event: "Park City, Utah", date: new Date("1988-01-09") },
  { id: "181", title: "McDonnell Foundation Emotion Meeting", event: "Cozemel, Mexico", date: new Date("1988-01-21") },
  { id: "182", title: "McDonnell Study Group: Cognition and Emotion Panel", event: "Paris, France", date: new Date("1988-05-15") },
  { id: "183", title: "McDonnell Study Group: Cognition and Emotion Panel", event: "San Diego, California", date: new Date("1988-09-22") },
  { id: "184", title: "Ann. Mtg of the Soc for Psychophysiological Research: Symposium on Theoretical Issues in the Physiology of Emotion", event: "San Francisco, California", date: new Date("1988-10-20") },
  { id: "185", title: "Talk: 'Fear Pathways in the Brain'", event: "Parma University, International School of Ethology 3rd Workshop: Ethology & Psychobiology of Fear and Defence", date: new Date("1988-10-21") },
  { id: "187", title: "Grass Traveling Scientist Lecture: 'Plasticity & the Neural Computation of Stimulus Value'", event: "Ottawa Gen. Hosp., Ottawa, Ontario, Canada", date: new Date("1988-11-03") },
  { id: "188", title: "SFN Meeting", event: "Toronto, Canada", date: new Date("1988-11-11") },
  { id: "189", title: "Dept of Psych @ Rutgers Behavioral NS Colloquium Series Lecture: 'Neural Mechanisms of Emotional Plasticity'", event: "New Brunswick, NJ", date: new Date("1988-11-14") },
  { id: "190", title: "McDonnell Foundation Emotion Meeting", event: "St Barts, Caribbean", date: new Date("1989-01-11") },
  { id: "192", title: "Lecture: \"Information flow from sensation to emotion: sensory pathways to the amygdala involved in fear & anxiety\"", event: "3rd Annual NS Day @ Dartmouth College, Hanover, NH: 'A Neural Systems Analysis of Fear & Anxiety' Symposium ", date: new Date("1989-01-27") },
  { id: "193", title: "Representation of affect in neural circuits", event: "1989 FESN Study Group on Learning and Memory. Geneva, Switzerland", date: new Date("1989-04-03") },
  { id: "194", title: "Seminar: \"Information Flow From Sensation to Emotion: Plasticity in the Neural Computation of Stimulus Value\"", event: "Dept of Neurology and NS, Einstein Med School, Bronx, NY", date: new Date("1989-04-26") },
  { id: "195", title: "Seminar: \"Subcortical Emotional Memories: Systems Circuitry & Cellular Mechanisms of Indelible Neural Traces\"", event: "Ctr for Neurobiology of Learning & Memory, UCLA, Los Angeles, California", date: new Date("1989-06-21") },
  { id: "196", title: "Visiting Professor at the Ctr for the Neurobiology of Learning & Memory, Lab of Norm Weinberger", event: "UC Irvine, Irvine, California", date: new Date("1989-06-07") },
  { id: "197", title: '"Modeling the Relation of Human Cognition with Emotion" — Santa Fe Institute Workshop', event: "Santa Fe, New Mexico", date: new Date("1989-10-12") },
  { id: "198", title: "19th Annual SFN Meeting", event: "Phoenix, AZ", date: new Date("1989-10-29") },
  { id: "199", title: "MacArthur Meeting: Temperamental Work Group", event: "Cambridge, Massachusetts", date: new Date("1989-11-09") },
  { id: "200", title: "External Review Committee for the Ctr for Neurobiology of Learning & Memory, UC Irvine", event: "Irvine, California", date: new Date("1989-12-14") },
  { id: "201", title: '"Newer Understanding of Cognition & Memory" — Talk at St. Luke\'s-Roosevelt Hospital', event: "New York, New York", date: new Date("1989-12-22") },
  { id: "202", title: 'MacArthur Mtg on Emotional Expression & Recognition in Animals — "Pathways of Emotional Processing" Session', event: "Dallas, Texas", date: new Date("1990-02-18") },
  { id: "203", title: '"Emotion as Memory: Neuropathways Mediating Indelible Neural Traces" — Seminar in Series on Neuropsychology', event: "Bethesda, Maryland", date: new Date("1990-03-20") },
  { id: "204", title: "Psychology Dept Lecture @ Vassar College", event: "Poughkeepsie, NY", date: new Date("1990-04-06") },
  { id: "205", title: "The 8th Takasago Symposium: The Physiological and Psychological Effects of Odors on Humans", event: "Tokyo, Japan", date: new Date("1990-05-16") },
  { id: "207", title: "5th Annual Meeting, International Society for Research on Emotions", event: "Rutgers, New Brunswick, NJ", date: new Date("1990-07-25") },
  { id: "208", title: "James S. McDonnell Foundation & NIMH NS Research Branch: Representation of Emotion in the Brain", event: "Gurney's Inn, Montauk, Long Island", date: new Date("1990-09-21") },
  { id: "209", title: "Thompson Conference: 5th Annual CA Developmental Research Conference", event: "Asilomar Conference Center, Pacific Grove, CA", date: new Date("1990-10-07") },
  { id: "210", title: '4th Conference on the Neurobiology of Learning & Memory: "Memory: Organization & Locus of Change" — Presentation: "Functional Roles of Brain Systems"', event: "Irvine, California", date: new Date("1990-10-17") },
  { id: "211", title: "20th Annual SFN Meeting", event: "St. Louis, Missouri", date: new Date("1990-10-28") },
  { id: "212", title: "The Future of Psychoanalytic Research: Education for Research Careers in Psychoanalysis. Dream or Reality?", event: "Bethesda, MD", date: new Date("1990-11-09") },
  { id: "213", title: 'Dartmouth Medical School, Dept of Psychiatry Grand Rounds: "Indelible Emotional Memories in the Brain"', event: "Hanover, NH", date: new Date("1990-11-26") },
  { id: "214", title: "Neuroscience Program Seminar Series @ University of Illinois @ Urbana-Champaign", event: "Urbana, Illinois", date: new Date("1990-12-04") },
  { id: "215", title: 'Neurology Grand Rounds: "Indelible Emotional Memories in the Brain"', event: "Nassau County Medical Center, East Meadow, NY", date: new Date("1991-01-11") },
  { id: "216", title: "Dept of NS & Cell Biology Seminar", event: "Robert Wood Johnson Medical School, UMDNJ, Piscataway, NJ", date: new Date("1991-02-05") },
  { id: "217", title: "Neurobiology Seminar Series", event: "NYU Medical Center, New York, NY", date: new Date("1991-02-11") },
  { id: "218", title: 'Neuropsychology Colloquium: "Emotional Memories: Indelible Neural Traces"', event: "Queens College, Queens, NY", date: new Date("1991-02-13") },
  { id: "219", title: '"Emotion & Memory" Lecture for Neuroscience Course for General Faculty Council', event: "Cornell Medical Center, New York, NY", date: new Date("1991-04-17") },
  { id: "220", title: '3rd Annual Dean\'s Day Lecture: "Emotional Memory and the Brain"', event: "NYU, New York, NY", date: new Date("1991-05-04") },
  { id: "221", title: "Brain Mechanisms in Emotion and Memory", event: "NY Academy of Sciences, New York, NY", date: new Date("1991-05-13") },
  { id: "222", title: '"Limbic Memory Learning" Lecture at Fundamental Neurobiological Approaches to Disease', event: "The Neurosciences Institute, New York, NY", date: new Date("1991-05-19") },
  { id: "223", title: "Neurons, Vision and Cognition Symposium", event: "NYU, New York, NY", date: new Date("1991-05-28") },
  { id: "224", title: 'Lecture: "Advances in Modern Biological Sciences"', event: "Faculty Resource Network, NYU, New York, NY", date: new Date("1991-05-06") },
  { id: "225", title: 'NRI Rockefeller', event: "Rockefeller University, New York, NY", date: new Date("1991-05-23") },
  { id: "226", title: '3rd Annual APS Convention — Presidential Symposium: "Emotion and Memory: Emotional Circuits & Their Memories"', event: "Washington, DC", date: new Date("1991-06-13") },
  { id: "227", title: "Psychology Dept. Colloquium Talk", event: "Brown University, Providence, RI", date: new Date("1991-06-27") },
  { id: "228", title: '"Brain & Emotion" Lecture, James S, McDonnell Foundation Summer Institute in Cognitive Neuroscience', event: "Dartmouth College & Medical School, Hanover, NH", date: new Date("1991-07-01") },
  { id: "229", title: 'Brown University', event: "Providence, RI", date: new Date("1991-09-25") },
  { id: "230", title: 'Swiss Psychology Summer School: "Emotion and Behavior" + University of Geneva Talk: "Emotional Systems of the Brain"', event: "Montreux and Geneva, Switzerland", date: new Date("1991-10-07") },
  { id: "231", title: "Memoria: The Memory Culture of the Middle Ages & Renaissance", event: "Maison Francoise, NYU, New York, NY", date: new Date("1991-10-10") },
  { id: "232", title: "Hemholtz Club Presentation", event: "UC Irvine, Irvine, California", date: new Date("1991-10-28") },
  { id: "233", title: 'SFN Symposium: "Behavioral Neuroscience: What Do Amygdala Neurons Know?"', event: "New Orleans, Louisiana", date: new Date("1991-11-14") },
  { id: "234", title: "Department of Psychology Lecture", event: "Brooklyn College, Brooklyn, NY", date: new Date("1991-11-25") },
  { id: "235", title: "McDonnell-Pew Cognitive Neuroscience Colloquium", event: "MIT, Cambridge, MA", date: new Date("1991-12-05") },
  {
    id: "236",
    title: "Seminar at Center for Neurobiology & Behavior",
    event: "Columbia University / NYS Psychiatric Institute, New York, NY",
    date: new Date("1992-01-09"),
  },
  {
    id: "237",
    title: "Neurobiology of Learning and Memory Conference",
    event: "Park City, Utah",
    date: new Date("1992-01-11"),
  },
  {
    id: "238",
    title: "AAAS Meeting (Sponsored by Society for Psychophysiological Research)",
    event: "Chicago, Illinois",
    date: new Date("1992-02-06"),
  },
  {
    id: "239",
    title: "Joint Princeton-Rutgers-Robert Wood Johnson Med School: Symposium on Learning & Memory",
    event: "New Jersey",
    date: new Date("1992-04-16"),
  },
  {
    id: "240",
    title: 'Lecture: "Is Affect Mental?" Study Group on Psychoanalysis and Neuroscience',
    event: "New York Psychoanalytic Institute, New York, NY",
    date: new Date("1992-05-16"),
  },
  {
    id: "241",
    title: '4th Annual APS Convention: Talk in Panel "Rapid vs. Slower-Developing Conditioned Responses"',
    event: "San Diego, California",
    date: new Date("1992-06-20"),
  },
  {
    id: "242",
    title: "Planning Meeting on Emotions — MacArthur Foundation Network on Mind-Body Interactions",
    event: "Chicago, Illinois",
    date: new Date("1992-07-17"),
  },
  {
    id: "243",
    title: "Satellite Symposium of the VII FESBE Annual Meeting: Emotion & Memory",
    event: "Itatiaia, Brazil",
    date: new Date("1992-08-23"),
  },
  {
    id: "244",
    title: "Joint NIMH/NASA Conference on NeuroLab Shuttle Mission",
    event: "Rockville, MD",
    date: new Date("1992-09-16"),
  },
  {
    id: "245",
    title: 'Cold Spring Harbor Learning & Memory Meeting',
    event: "Cold Spring Harbor, NY",
    date: new Date("1992-09-30"),
  },
  {
    id: "246",
    title: 'Society for Psychophysiological Research Annual Meeting: "A Psychophysiology of Emotion in the Brain"',
    event: "San Diego, California",
    date: new Date("1992-10-14"),
  },
  {
    id: "247",
    title: 'Lecture: "An Emotional Memory System in the Brain"',
    event: "Harvard University Dept. of Psychology, Cambridge, MA",
    date: new Date("1992-10-21"),
  },
  {
    id: "248",
    title: 'Mechanisms of Behavior Modification Seminar Series: "An Emotional Memory System in the Brain"',
    event: "Rockefeller University, New York, NY",
    date: new Date("1992-11-04"),
  },
  {
    id: "249",
    title: "Meeting on Emotions",
    event: "Sponsored by MacArthur and McDonnell Foundations, Washington, DC",
    date: new Date("1992-11-08"),
  },
  {
    id: "250",
    title: "17th Annual Winter Conference on Neurobiology of Learning and Memory",
    event: "Park City, Utah",
    date: new Date("1993-01-09"),
  },
  {
    id: "251",
    title: 'International Neuropsychological Society: Workshop "Emotional Systems in the Brain"',
    event: "Galveston, Texas",
    date: new Date("1993-02-23"),
  },
  {
    id: "252",
    title: "Grand Rounds: Emotional Memory System in the Brain",
    event: "St. Vincent’s, NYC",
    date: new Date("1993-03-04"),
  },
  {
    id: "253",
    title: 'McDonnell-Pew Center for Cognitive Neuroscience: In Search of the Emotional Brain',
    event: "Salk Institute for Biological Sciences, La Jolla, CA",
    date: new Date("1993-03-08"),
  },
  {
    id: "254",
    title: "Learning Workshop",
    event: "Jerusalem, Israel",
    date: new Date("1993-05-30"),
  },
  {
    id: "255",
    title: "James S. McDonnell Summer Institute and Conference: Molecular & Cellular Plasticity",
    event: "Resort at Squaw Creek, Lake Tahoe, CA",
    date: new Date("1993-06-28"),
  },
  {
    id: "256",
    title: "NIMH Meeting: Cognitive Neuroscience and Neural Plasticity",
    event: "Washington, DC",
    date: new Date("1993-10-28"),
  },
  {
    id: "257",
    title: "Annual SFN Meeting",
    event: "Washington, DC",
    date: new Date("1993-11-08"),
  },
  {
    id: "258",
    title: "Center for Neurological Sciences",
    event: "University of CT Health Center, Farmington, CT",
    date: new Date("1994-01-20"),
  },
  {
    id: "259",
    title: '"Brain Mechanisms of Emotional Memory"',
    event: "Uniformed Services University of Health Sciences, Bethesda, MD",
    date: new Date("1994-03-09"),
  },
  {
    id: "260",
    title: 'Learning Disabilities Assoc. of America: "Social Competence: A Neurobiological Perspective"',
    event: "Washington, DC",
    date: new Date("1994-03-16"),
  },
  {
    id: "261",
    title: "Columbia University Psychology Department Colloquium Series",
    event: "New York, NY",
    date: new Date("1994-03-23"),
  },
  {
    id: "262",
    title: "The Emotional Motor System",
    event: "Island of Schiermonnikoog, The Netherlands",
    date: new Date("1994-04-24"),
  },
  {
    id: "263",
    title: "The Neurobiology of Learning & Memory: Where We Are and Where We Should Be Going",
    event: "Center for Behavioral Neuroscience, Stony Brook, NY",
    date: new Date("1994-05-23"),
  },
  {
    id: "264",
    title: 'FASEB: "Neural Mechanisms in Cardiovascular Regulation"',
    event: "Saxtons River, Vermont",
    date: new Date("1994-06-14"),
  },
  {
    id: "265",
    title: "24th Annual SFN Meeting: Symposium — The Amygdala: from Circuits & Synapses to Emotional Memory",
    event: "Miami, Florida",
    date: new Date("1994-11-14"),
  },
  {
    id: "266",
    title: "Cold Spring Harbor Laboratory: Learning & Memory",
    event: "Cold Spring Harbor, NY",
    date: new Date("1994-10-12"),
  },
  {
    id: "267",
    title: "University of Pennsylvania: Psychology Department Colloquium Lecture",
    event: "Philadelphia, PA",
    date: new Date("1994-12-12"),
  },
  {
    id: "268",
    title: '19th Winter Conference on "Neurobiology of Learning and Memory"',
    event: "Park City, Utah",
    date: new Date("1995-01-14"),
  },
  {
    id: "269",
    title: 'UVA Health Sciences Center Seminar: "Emotion, Memory and the Brain"',
    event: "Charlottesville, VA",
    date: new Date("1995-03-08"),
  },
  {
    id: "270",
    title: 'Geneva Emotion Week and Waume "Artificial Emotions": Talk — Neural Computation of Emotional Meaning by the Brain',
    event: "Carouge, Switzerland",
    date: new Date("1995-04-08"),
  },
  {
    id: "271",
    title: 'International Symposium Perception, Memory and Emotion: Frontiers in Neuroscience',
    event: "Toyama, Japan",
    date: new Date("1995-07-06"),
  },
  {
    id: "272",
    title: "IBRO World Congress of Neuroscience: Neural Mechanisms of Emotion and Related Behavior",
    event: "Kyoto, Japan",
    date: new Date("1995-07-09"),
  },
  {
    id: "273",
    title: "Meeting of European Neuroscience",
    event: "Amsterdam, The Netherlands",
    date: new Date("1995-09-03"),
  },
  {
    id: "274",
    title: 'Lecture',
    event: "Puerto Rico",
    date: new Date("1995-09-01"),
  },
  {
    id: "275",
    title: "University of Arizona Psychology Department Colloquium",
    event: "Tucson, Arizona",
    date: new Date("1995-10-06"),
  },
  {
    id: "276",
    title: "National Academy of Sciences, 7th Annual Symposium on Frontiers of Science",
    event: "Newport, CA",
    date: new Date("1995-11-02"),
  },
  {
    id: "277",
    title: "Biological & Psychological Perspectives on Memory and Memory Disorders",
    event: "New York, NY",
    date: new Date("1995-12-01"),
  },
  {
    id: "278",
    title: 'American College of Neuropsychopharmacology Panel: Emotional Regulation & Psychopathology; Lecture: Emotion, Memory, and the Brain',
    event: "San Juan, Puerto Rico",
    date: new Date("1995-12-12"),
  },
  {
    id: "279",
    title: "Dept of Psychiatry Grand Rounds Lecture",
    event: "NYS Psychiatric Institute/Columbia Univ, NYC",
    date: new Date("1996-01-05"),
  },
  {
    id: "280",
    title: "James S. McDonnell Foundation: Cognitive Retreat",
    event: "Rancho Valencia, CA",
    date: new Date("1996-01-12"),
  },
  {
    id: "281",
    title: "Winter Conference of Learning and Memory",
    event: "Park City, Utah",
    date: new Date("1996-01-13"),
  },
  {
    id: "282",
    title: "Environmental & Genetic Determination of Behavior: Hormones, Stress & Development of Brain & Behavior",
    event: "Rockefeller University, New York, NY",
    date: new Date("1996-01-19"),
  },
  {
    id: "283",
    title: 'Hebb Lecture Series: "Emotion, Memory, and the Brain"',
    event: "Dept of Psychology, McGill University, Montreal, Canada",
    date: new Date("1996-02-02"),
  },
  {
    id: "284",
    title: "Center for Adaptive Systems and Dept of Cognitive & Neural Systems: Emotion, Memory, and the Brain",
    event: "Boston University, Boston, MA",
    date: new Date("1996-03-22"),
  },
  {
    id: "285",
    title: "3rd Annual Meeting of Cognitive Neuroscience Society: Brain Mechanisms of Emotion Symposium",
    event: "San Francisco, CA",
    date: new Date("1996-03-31"),
  },
  {
    id: "286",
    title: "Neural Processes in Cognition",
    event: "University of Pittsburgh / Carnegie Mellon, Pittsburgh, PA",
    date: new Date("1996-04-25"),
  },
  {
    id: "287",
    title: "NY Hospital-Cornell Medical Center, Westchester Division",
    event: "White Plains, NY",
    date: new Date("1996-05-21"),
  },
  {
    id: "288",
    title: "Annual NIMH Post-doctoral Training Program in Emotion Research",
    event: "Madison, Wisconsin",
    date: new Date("1996-06-12"),
  },
  {
    id: "289",
    title: 'McDonnell Summer Institute in Cognitive Neuroscience: "Emotional Memory and the Amygdala: Neural Circuits"',
    event: "Dartmouth Medical Center, Lebanon, NH",
    date: new Date("1996-07-03"),
  },
  {
    id: "290",
    title: "Bridging the Gap Between Education & Neuroscience: A Collaborative Workshop",
    event: "Inverness Hotel & Golf Club, Englewood, CO",
    date: new Date("1996-07-26"),
  },
  {
    id: "291",
    title: "Mass General Hospital / Harvard Medical School Seminar",
    event: "Mass General Hospital, Charlestown, MA",
    date: new Date("1996-09-19"),
  },
  {
    id: "292",
    title: "Roger Loucks Lecturer, Dept of Psychology",
    event: "Seattle, Washington",
    date: new Date("1996-10-08"),
  },
  {
    id: "293",
    title: "Seminar at the Depts of Psychology & Psychiatry, Anatomy & Neurobiology",
    event: "Burlington, VT",
    date: new Date("1996-11-01"),
  },
  {
    id: "294",
    title: "26th Annual SFN Meeting",
    event: "Washington, DC",
    date: new Date("1996-11-17"),
  },
  {
    id: "295",
    title: "Neuroscience and Behavior Colloquium Series Lecture",
    event: "University of Massachusetts Amherst, Amherst, MA",
    date: new Date("1996-12-04"),
  },
  {
    id: "296",
    title: "Perspectives in Neuroscience Lecture",
    event: "UC Davis, Davis, California",
    date: new Date("1997-02-05"),
  },
  {
    id: "297",
    title: "Weizmann Institute Sabbatical",
    event: "Rehovot, Israel",
    date: new Date("1997-03-01"),
  },
  {
    id: "298",
    title: 'Dan Alliance Brain Initiative / Smithsonian Lecture Series: "The Brain: Understanding the Human Psyche"',
    event: "Washington, DC",
    date: new Date("1997-05-07"),
  },
  {
    id: "299",
    title: 'Mathilde Solowey Award Lecture in the Neurosciences: "The Emotional Brain"',
    event: "NIH, Bethesda, MD",
    date: new Date("1997-05-08"),
  },
  {
    id: "300",
    title: 'International Symposium: "Molecular Biology of the Nervous System"',
    event: "Toronto, Canada",
    date: new Date("1997-06-12"),
  },
  {
    id: "301",
    title: "APA: Neal Miller Distinguished Lecture",
    event: "Chicago, Illinois",
    date: new Date("1997-08-17"),
  },
  {
    id: "302",
    title: "Fairfield/Litchfield Branch of CT Psychiatric Society Lecture",
    event: "Weston, CT",
    date: new Date("1997-11-12"),
  },
  {
    id: "303",
    title: "Presidential Lecture",
    event: "27th Annual SFN Meeting, New Orleans, Louisiana",
    date: new Date("1997-10-23"),
  },
  {
    id: "304",
    title: "NIMH Fear & Anxiety Satellite Symposium",
    event: "27th Annual SFN Meeting, New Orleans, Louisiana", 
    date: new Date("1997-10-24"),
  },
  {
    id: "305",
    title: 'Foundation for Human Potential: Emotional Intelligence, Education & the Brain — A Symposium',
    event: "The Art Institute, Chicago, Illinois",
    date: new Date("1997-12-05"),
  },
  {
    id: "306",
    title: 'FC Donders Lecture: "Emotion, Memory, and the Brain"',
    event: "Nijmegen, The Netherlands",
    date: new Date("1997-12-10"),
  },
  {
    id: "307",
    title: "Beth Israel Medical Center: Grand Rounds",
    event: "New York, New York",
    date: new Date("1997-12-11"),
  },
  {
    id: "310",
    title: '1st Annual Goldsmith Lecture: The Emotional Brain',
    event: "Institute of Cognitive Neuroscience. Dept of Pharmacology, Oxford, UK",
    date: new Date("1998-02-08")
  },
  {
    id: "311",
    title: 'Nobel Minisymposium on "The Neural Mechanisms of Fear"',
    event: "Karolinska Institute, Stockholm, Sweden",
    date: new Date("1998-02-12")
  },
  {
    id: "312",
    title: "LTP and Fear Conditioning in the Amygdala",
    event: "Keystone Symp on Mol & Cell Bio: The Hippo: Toward a Mol Understanding of Cognition. Salt Lake City, Utah",
    date: new Date("1998-03-07")
  },
  {
    id: "314",
    title: "Lecture",
    event: "Queens, NY",
    date: new Date("1998-03-22")
  },
  {
    id: "315",
    title: 'Brain Neurocircuitry of Anxiety and Fear: Implications for Clinical Research and Practice',
    event: "ADAA Sci. Sat. Mting. Washington, DC",
    date: new Date("1998-03-25")
  },
  {
    id: "316",
    title: "Workshop on Neurobiology of Depressive Illness: Synaptic Plasticity Underlying Emotional Memory",
    event: "Rockefeller Univ., New York, NY",
    date: new Date("1998-03-27")
  },
  {
    id: "317",
    title: "NJ Writing Project in Texas",
    event: "Houston, Texas",
    date: new Date("1998-03-28")
  },
  {
    id: "318",
    title: "1998 Charles Fisher Memorial Lecture at the NY Psychoanalytic Society",
    event: "New York, NY",
    date: new Date("1998-05-12")
  },
  {
    id: "319",
    title: 'The Future of the Study of Emotion',
    event: "NIMH, Discovering our Selves: The Science of Emotion. Bethesda, MD",
    date: new Date("1998-05-05")
  },
  {
    id: "320",
    title: 'American Psychiatric Association: Frontier of Science Lecture',
    event: "Toronto, Canada",
    date: new Date("1998-06-02")
  },
  {
    id: "321",
    title: "Vatican Conference: Mind, Brain Problem",
    event: "Krakow, Poland",
    date: new Date("1998-06-21")
  },
  {
    id: "322",
    title: "James S McDonnell Foundation Meeting",
    event: "Lake Tahoe, California",
    date: new Date("1998-07-12")
  },
  {
    id: "323",
    title: 'Invited Speaker Lecture "Amygdala and Stress"',
    event: "WHO Meeting on Stress and Adaptation. Montreal, Canada",
    date: new Date("1998-09-21")
  },
  {
    id: "324",
    title: "NIDA: Cellular & Molecular Basis of Emotional Memory: Implication for Addiction",
    event: "Bethesda, MD",
    date: new Date("1998-09-23")
  },
  {
    id: "325",
    title: 'Emotion, Qualia, & Consciousness: "The Neuroscience of Fear: Perspectives from Animal Research"',
    event: "Ischia, Italy",
    date: new Date("1998-10-19")
  },
  {
    id: "326",
    title: 'Emotion, Memory & the Brain',
    event: "78th Annual Meeting NY Academy of Medicine. Mt Sinai Medical Center, New York, NY",
    date: new Date("1998-12-04")
  },
  {
    id: "327",
    title: "Lecture",
    event: "Ponce, Puerto Rico",
    date: new Date("1998-12-05")
  },
  {
    id: "328",
    title: "Biology of Emotions Lecture",
    event: "Beth Israel Medical Center, New York, NY",
    date: new Date("1998-12-23")
  },
  {
    id: "329",
    title: "Baton Rouge",
    event: "Baton Rouge, Louisiana",
    date: new Date("1999-01-11")
  },
  {
    id: "330",
    title: "Neuroscience Seminar Series",
    event: "UCLA, Los Angeles, California",
    date: new Date("1999-01-25")
  },
  {
    id: "331",
    title: "Butler Hospital CME: Understanding the Emotional Brain: Implications for Treatment and Research",
    event: "Providence, Rhode Island",
    date: new Date("1999-02-02")
  },
  {
    id: "332",
    title: 'INS Conference: Special Topic – "Emotion, Memory and the Brain"',
    event: "Boston, MA",
    date: new Date("1999-02-10")
  },
  {
    id: "333",
    title: 'CME: "1999 Review of Basic & Clinical Neurosciences" – Limbic System lecture',
    event: "Columbia University",
    date: new Date("1999-02-20")
  },
  {
    id: "334",
    title: "WI Alliance for Arts Education – Summit 13",
    event: "University of Wisconsin, Madison, WI",
    date: new Date("1999-02-24")
  },
  {
    id: "335",
    title: "1st Conference on Brain & Communication: Conscious and Unconscious Processing",
    event: "Georgetown University, Washington, DC",
    date: new Date("1999-04-08")
  },
  {
    id: "336",
    title: 'Symposium "Limbic Structures and Functions" (needs confirmation)',
    event: "Magdeburg, Germany",
    date: new Date("1999-04-22")
  },
  {
    id: "337",
    title: "CSH Meeting",
    event: "Cold Spring Harbor, Long Island, NY",
    date: new Date("1999-04-28")
  },
  {
    id: "338",
    title: "American Psychiatric Association: The Neuroscience of Severe Mental Disorders Symposium",
    event: "Washington, DC",
    date: new Date("1999-05-15")
  },
  {
    id: "339",
    title: 'How can Technology Emulate Biological Intelligence?',
    event: "3rd Int. Conference on Cognitive & Neural Systems: How does the Brain Control Behavior? Boston University, Boston, MA",
    date: new Date("1999-05-26")
  },
  {
    id: "341",
    title: "North American Society of Teachers of the Alexander Technique",
    event: "Amherst College, Western Massachusetts",
    date: new Date("1999-06-23")
  },
  {
    id: "342",
    title: 'Neuron Circuits Conference: "Fear Learning: from Systems to Synapses"',
    event: "Monte Verita, Ascona, Switzerland",
    date: new Date("1999-09-26")
  },
  {
    id: "343",
    title: 'La Caixa Foundation: Emotion & Knowledge: The Evolution of the Nervous System & Intelligence',
    event: "The Science Museum, Barcelona, Spain",
    date: new Date("1999-10-01")
},
{
    id: "344",
    title: 'Naturing Nature: Plasticity in Emotional Networks"',
    event: "Foundation Ipsen, Jean-Louis Signoret Prize. Paris, France",
    date: new Date("1999-11-12")
},
{
    id: "345",
    title: 'Lecture',
    event: "Puerto Rico",
    date: new Date("1999-12-05")
},
{
    id: "346",
    title: 'Conference at Princeton University',
    event: "Princeton, NJ",
    date: new Date("1999-12-15")
},
{
    id: "347",
    title: 'Neurobiology Seminar',
    event: "Caltech, Pasadena, California",
    date: new Date("2000-01-11")
},
  {
    id: "348",
    title: "Rose M. Litman Lecture 'Emotional Synapses'",
    event: "Univ of CO, Boulder, CO",
    date: new Date("2000-02-03")
  },
  {
    id: "349",
    title: "Emotion, Memory and the Brain",
    event: "NYU/Child Study Center Grand Rounds Lecture Series. New York, New York",
    date: new Date("2000-02-11")
  },
  {
    id: "350",
    title: "Emotions and the Brain",
    event: "AAAs Meeting. Washington, DC",
    date: new Date("2000-02-17")
  },
  {
    id: "351",
    title: "Emotional Synapses",
    event: "NS Seminar Series, Univ. of Maryland, Baltimore, MD",
    date: new Date("2000-03-08")
  },
  {
    id: "352",
    title: "NY Academy of Sciences Psychology Section Lecture",
    event: "New York, New York",
    date: new Date("2000-04-17")
  },
  { 
    id: "353", 
    title: "UCSF Grand Rounds Presentation", 
    event: "San Francisco, CA", 
    date: new Date("2000-04-25") 
  },
  { 
    id: "354", 
    title: "New Research: Emotional Synapses", 
    event: "Learning and the Brain Conference, Boston, MA", 
    date: new Date("2000-04-30") 
  },
  { 
    id: "355", 
    title: "The Role of Neural Plasticity in Chemical Intolerance", 
    event: "New York Academy of Sciences Conference, Rockefeller University, New York, NY", 
    date: new Date("2000-06-16") 
  },
  { 
    id: "356", 
    title: "Personality and the Brain: Closing the GAP", 
    event: "Learning Sciences and Brain Research: Potential Implications for Education Policies and Practices. OECD, CERI & Sackler Institute. New York, NY", 
    date: new Date("2000-06-16") 
  },
  { 
    id: "357", 
    title: "Conference on Man and Mind", 
    event: "Stockholm, Sweden", 
    date: new Date("2000-09-24") 
  },
  { 
    id: "358", 
    title: "VolkswagenStiftung", 
    event: "Bremen, Germany", 
    date: new Date("2001-09-28") 
  },
  { 
    id: "359", 
    title: "Psychiatry Grand Rounds Talk: Emotion, Memory and the Brain", 
    event: "Westchester Medical Center, Valhalla, NY", 
    date: new Date("2000-10-10") },
  { 
    id: "360", 
    title: "Emotions:Deconstruction how they happen and why they impact work effectiveness", 
    event: "Emotional Intelligence Conference: Effective Leadership, High-Performing Organizations, Better Business Results. Chicago, IL", 
    date: new Date("2000-10-11") },
  { 
    id: "361", 
    title: "Kuopio Neuroscience Lecture Series", 
    event: "University of Kuopio, Kuopio, Finland", 
    date: new Date("2000-10-15") },
  { 
    id: "362", 
    title: "30th Annual SFN Meeting", 
    event: "New Orleans, LA", 
    date: new Date("2000-11-04") },
  { 
    id: "363", 
    title: "Distinguished Speaker Series Lectures", 
    event: "Psychology Department, Cornell University, Ithaca, NY", 
    date: new Date("2000-11-16") },
  { 
    id: "364", 
    title: "ACNP Annual Meeting: Fear and Anxiety: Linking the Neurobiology with the Psychopathology", 
    event: "San Juan, Puerto Rico", 
    date: new Date("2000-12-10") },
  { 
    id: "365", 
    title: "VA Medical Center / University of Pennsylvania Continuing Medical Education", 
    event: "Philadelphia, PA", 
    date: new Date("2001-01-10") },
  { 
    id: "366", 
    title: "Neuropsychology Colloquium Series", 
    event: "Queens College, Queens, NY", 
    date: new Date("2001-02-21") },
  { 
    id: "367", 
    title: "Flynn Lecture in Psychiatry", 
    event: "Yale University, New Haven, CT", 
    date: new Date("2001-03-01") },
  { 
    id: "368", 
    title: "DeLange Conference on the Neurobiology of Perception and Communications: From Synapse to Society", 
    event: "Rice University, Houston, TX", 
    date: new Date("2001-03-04") },
  { 
    id: "369", 
    title: "2nd Kuopio Alzheimer Symposium", 
    event: "University of Kuopio, Kuopio, Finland", 
    date: new Date("2001-03-13") },
  { 
    id: "370", 
    title: "Learning and Memory", 
    event: "Cold Spring Harbor, Long Island", 
    date: new Date("2001-04-25") },
  { 
    id: "371", 
    title: "Learning and the Brain Conference: New Research: Emotional Synapses", 
    event: "Washington, DC", 
    date: new Date("2001-05-02") },
  { 
    id: "372", 
    title: "SFB 2nd Symposium on Limbic Structures and Functions", 
    event: "Magdeburg, Germany", 
    date: new Date("2001-05-17") },
  { 
    id: "373", 
    title: "30th Annual SFN Meeting: Symposium on Consolidation and Reconsolidation of Memory", 
    event: "San Diego, CA", 
    date: new Date("2001-11-10") },
  { 
    id: "374", 
    title: "Neurological Basis for Justice Roundtable Workshop", 
    event: "Gruter Institute for Law and Behavioral Research Roundtable Workshop. Portola Valley, CA", 
    date: new Date("2001-11-16") },
  { 
    id: "375", 
    title: "The Adult Brain: Synaptic Self", 
    event: "Dana/Smithsonian Lecture Series: The Secret Life of the Brain. Washington, DC", 
    date: new Date("2001-11-20") },
  { 
    id: "376", 
    title: "Integrative Approaches to Analyzing Cognitivie Functions", 
    event: "1st Symposium of VolkswagenStiftung: Dynamics and Adaptivity of Neuronal Systems. Bremen, The Netherlands", 
    date: new Date("2001-09-28") },
  { 
    id: "377", 
    title: "Pavlovian Meeting", 
    event: "New Brunswick, NJ", 
    date: new Date("2001-10-11") },
  { 
    id: "378", 
    title: "What is it to be Human? What science can and cannot tell us about human nature", 
    event: "Institute of Ideas. New York, NY", 
    date: new Date("2001-10-26") },
  { 
    id: "379", 
    title: "The Biology of Fear: From Basic to Clinical Science", 
    event: "American College of Psychiatrists, CME Plenary. Kohala Coast, Hawaii", 
    date: new Date("2002-02-27") },
  { 
    id: "380", 
    title: "Neural Control of Behavior", 
    event: "UCLA, Los Angeles, CA", 
    date: new Date("2002-03-14") },
  { 
    id: "381", 
    title: "Emotional Memory:The Integration of Modern Psychoanalysis & Contempory Neuroscience", 
    event: "PCNJ Caspersen School: Enlisting Emotional Memory to Create the Self. Drew University, Madison, NJ", 
    date: new Date("2002-04-06") },
  { 
    id: "382", 
    title: "Panel Trauma, Dissociation, & Conflict: The Space where Neuroscience, Cognitive Science and Psychoanalysis Overlap", 
    event: "Division 39 Conf 22nd Annual Meeting of the APA 'Evolving Domains: Psychoanalysis in Dialogue with Science, Culture & Technology'. New York, NY", 
    date: new Date("2002-04-12") },
  { 
    id: "383", 
    title: "Southwestern Psychological Association: Distinguished Scientist Lecturer", 
    event: "Corpus Christi, TX", 
    date: new Date("2002-04-18") },
  { 
    id: "384", 
    title: "Brookdale University Hospital and Medical Center Grand Rounds: The Emotional Brain", 
    event: "Brooklyn, NY", 
    date: new Date("2002-05-07") },
  { 
    id: "385", 
    title: "Northwestern University", 
    event: "Evanston, IL", 
    date: new Date("2002-05-16") },
  { 
    id: "386", 
    title: "Conference Pathos, Passion, Feelings-Emotions in the Arts, and talk: Passions of the Soul: how the Brain Makes the Selfon Emotions in the Arts: Passions of the Soul", 
    event: "Frankfurt Opera House, Frankfurt, Germany", 
    date: new Date("2002-05-30") },
  { 
    id: "387", 
    title: "CINP Congress: Collegium Internationale Neuro-Psychopharmacologicum", 
    event: "Montreal, Canada", 
    date: new Date("2002-06-23") },
  { 
    id: "388", 
    title: "110th APA Annual Convention: Synaptic Self", 
    event: "Chicago, IL", 
    date: new Date("2002-08-23") },
  { 
    id: "389", 
    title: "Seminar at University of Rochester, Department of Neurobiology and Anatomy", 
    event: "Rochester, NY", 
    date: new Date("2002-09-12") },
  { 
    id: "390", 
    title: "Herbert Spencer Lecture Series: How Our Brains Learn to Be Who We Are", 
    event: "University of Oxford, Oxford, UK", 
    date: new Date("2002-10-23") },
  {
    id: "391", 
    title: "32nd SFN Meeting", 
    event: "Orlando, FL", 
    date: new Date("2002-11-02") },
  { 
    id: "392", 
    title: "ITSS", 
    event: "Baltimore, MD", 
    date: new Date("2002-11-08") },
  { 
    id: "393", 
    title: "Stanford Seminar", 
    event: "Stanford, CA", 
    date: new Date("2002-11-21") 
  },
{
    id: "400",
    title: "Fear, Stress and the Brain",
    event: "Psychological Trauma: Maturation Processes & Therapeutic Interventions. Boston, Mass",
    date: new Date("2003-05-29")
  },
  {
    id: "401",
    title: "Anxiety Disorder Assoc. of Amer.: Novel Approaches to Refractory Anxiety Disorderer",
    event: "Washington, DC",
    date: new Date("2003-06-16")
  },
  {
    id: "402",
    title: "Neuronal Circuits",
    event: "Ascona, Italy",
    date: new Date("2003-09-28")
  },
  {
    id: "403",
    title: "Gallup University",
    event: "Omaha, Nebraska",
    date: new Date("2003-10-07")
  },
  {
    id: "404",
    title: "McGovern Sympos. Inst: \"Mechanisms Underlying Perception, Action and Mind: talkl \"Emotional Synapses and their Memories\"",
    event: "Cambridge, Mass",
    date: new Date("2003-10-20")
  },
  {
    id: "405",
    title: "Bauer Foundation Colloqium Series",
    event: "Brandeis Univ., Waltham, Mass",
    date: new Date("2003-12-01")
  },
  {
    id: "406",
    title: "SFN",
    event: "New Orleans, Louisiana",
    date: new Date("2003-11-06")
  },
  {
    id: "407",
    title: "42nd ACNP Annual Meeting Panel: \"How the Prefrontal Cortex Modulates Subcortical Circuitry in Fear and Anxiety Disorders\"",
    event: "San Juan, Puerto Rico",
    date: new Date("2003-12-07")
  },
  {
    id: "408",
    title: "Grand Rounds @ Payne Whitney Clinic/Cornell Med College",
    event: "New York, New York",
    date: new Date("2003-01-14")
  },
  {
    id: "409",
    title: "HHMI-Janelia Farm Workshop Perception & Behavior",
    event: "Chevy Chase, Maryland",
    date: new Date("2004-01-20")
  },
  {
    id: "410",
    title: "Fear: Its Political Uses and Abuses. Session: Fear & How it Works: Science and Social Science",
    event: "New York, New York",
    date: new Date("2004-02-05")
  },
  {
    id: "411",
    title: "Talk at Ann Arbor, Univ of MI",
    event: "Ann Arbor, Michigan",
    date: new Date("2004-02-10")
  },
  {
    id: "412",
    title: "Grass Lecture, Emory U",
    event: "Atlanta, Georgia",
    date: new Date("2004-03-16")
  },
  {
    id: "413",
    title: "Talk: Emotion, Memory and the Brain",
    event: "10th Annual WI Sympos. On Emotion: Emotion Regulation: Neurobiological Substrates of Normal and Abnormal Processes. Madison, Wisconsin",
    date: new Date("2004-04-22")
  },
  {
    id: "414",
    title: "Soc Biol Psych 59th Ann: Neuroplasticity: Pres. Lecture: From Soul to Synapses",
    event: "New York, New York",
    date: new Date("2004-04-29")
  },
  {
    id: "415",
    title: "APA Meeting",
    event: "New York, New York",
    date: new Date("2004-05-01")
  },
  {
    id: "416",
    title: "Wallenberg Symposium: speaking in \"Affective control of sensory information\"",
    event: "Helsinki,  Finland",
    date: new Date("2004-05-27")
  },
  {
    id: "417",
    title: "15th Annual Albert Barrett Neuroscience Lecture",
    event: "Univer. of MI, Ann Arbor, MI",
    date: new Date("2004-06-08")
  },
  {
    id: "418",
    title: "Marymount University",
    event: "Arlington, VA",
    date: new Date("2004-06-22")
  },
  {
    id: "419",
    title: "Magda Arnold Symposium",
    event: "New York, New York",
    date: new Date("2004-07-07")
  },
  {
    id: "420",
    title: "CSHL Axon Guidance & Neural Plasticity",
    event: "Cold Spring Harbor, Long Island",
    date: new Date("2004-09-18")
  },
  {
    id: "421",
    title: "4th Picower-Riken Neurosci Sympos \"New Frontiers in Brain Science: From Molecules to Mind\" Session: Addiction and Memory",
    event: "MIT, Cambridge, MA",
    date: new Date("2004-09-22")
  },
  {
    id: "422",
    title: "34th Annual SFN Meeting",
    event: "San Diego, CA",
    date: new Date("2004-10-23")
  },
  {
    id: "423",
    title: "Extinction Conference",
    event: "Ponce, Puerto Rico",
    date: new Date("2005-02-02")
  },
  {
    id: "424",
    title: "Columbia/Simons Foundation Autism Regency Hotel",
    event: "New York, New York",
    date: new Date("2005-02-25")
  },
  {
    id: "425",
    title: "Penn State Lecture",
    event: "Penn State, PA",
    date: new Date("2005-02-28")
  },
  {
    id: "426",
    title: "Consciousness: How does the brain create mind. Lecture: The Emotional Brain",
    event: "NIH, Bethesda, MD",
    date: new Date("2005-03-22")
  },
  {
    id: "427",
    title: "Consciousnes",
    event: "Oxford, UK",
    date: new Date("2005-05-01")
  },
  {
    id: "428",
    title: "\"The Neuroscience of Emotion\"",
    event: "Korolinska Institute, Stockholm, Sweden",
    date: new Date("2005-06-09")
  },
  {
    id: "429",
    title: "Dept of Psychiatry Mt Sinai: From Memory to Meta-Memory",
    event: "New York, New York",
    date: new Date("2005-09-15")
  },
  {
    id: "430",
    title: "SFN Meeting",
    event: "Washington, DC",
    date: new Date("2005-11-12")
  },
  {
    id: "431",
    title: "Columbia Conference on Art and the New Biology of Mind",
    event: "New York, New York",
    date: new Date("2006-03-24")
  },
  {
    id: "432",
    title: "Foundation Fyssen",
    event: "Paris, France",
    date: new Date("2006-03-31")
  },
  {
    id: "433",
    title: "Chichele Lecture Consciousness Symposium",
    event: "All Souls College, Oxford, UK?",
    date: new Date("2006-05-19")
  },
  {
    id: "434",
    title: "APA 2006 Convention",
    event: "New Orleans, Louisiana",
    date: new Date("2006-08-10")
  },
  {
    id: "436",
    title: "16th Neuropharmacology: LTP-40 Unforgettable Years",
    event: "Atlanta, GA",
    date: new Date("2006-10-11")
  },
  {
    id: "437",
    title: "SFN",
    event: "Atlanta, GA",
    date: new Date("2006-10-14")
  },
  {
    id: "438",
    title: "ISTSS 22nd Annual Meeting",
    event: "Hollywood, CA",
    date: new Date("2006-11-05")
  },
  {
    id: "439",
    title: "Global Creative Leadership Summit",
    event: "New York, New York",
    date: new Date("2006-11-13")
  },
  {
    id: "440",
    title: "NYS Psychiatric Inst./Columbia U Dept of Psychiatry Grand Rounds",
    event: "New York, New York",
    date: new Date("2006-11-17")
  },
  {
    id: "441",
    title: "Faculty & Staff Devel. Ctr @ NYU Coll. Of Dent. NYU Dental Liberal Arts @ Lunch: Neural Basis of Emotions",
    event: "New York, New York",
    date: new Date("2007-01-24")
  },
  {
    id: "442",
    title: "NIH Neuroscience Series Sem.: \"How does it feel? Closing the Gap Between Unconscious and Conscious Emotion",
    event: "Bethesda, MD",
    date: new Date("2007-02-04")
  },
  {
    id: "443",
    title: "\"How does it feel? Closing the Gap between the Unconscious and Conscious Emotion\" Lecture",
    event: "London, UK",
    date: new Date("2007-02-19")
  },
  {
    id: "444",
    title: "2007 Psychopharmacology Program: Clinical Dialogue: Update on Psychopharmacology",
    event: "New York, New York",
    date: new Date("2007-03-02")
  },
  {
    id: "445",
    title: "Tinnitus Research Consortium",
    event: "Chicago, Illinois",
    date: new Date("2007-04-22")
  },
  {
    id: "446",
    title: "The Neuroscience of Fear @Dept of Neurobiology",
    event: "Boston, MA",
    date: new Date("2007-05-02")
  },

  {
    id: "448",
    title: "Global Leadership Summit/UN Fund for Internationasl Partnerships: Featured speaker",
    event: "NYC",
    date: new Date("2007-09-17")
  },
  {
    id: "449",
    title: "Society for Risk Analysis",
    event: "San Antonio, Texas",
    date: new Date("2007-12-09")
  },
  {
    id: "450",
    title: "Inter. Sympos. On Learning, Memory, & Cognitive Function: Mechisms, Pathology. &Therapeutics",
    event: "Valencia, Spain",
    date: new Date("2008-02-10")
  },
    {
    id: "451",
    title: "Lectio Magistralis Joseph LeDoux The Four Realms of the Self",
    event: "San Raffaele University, Milan, Italy",
    date: new Date("2025-10-03"),
    urlToLecture: "https://info.unisr.it/en/lectio-magistralis-ledoux"
  }
]