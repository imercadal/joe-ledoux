export interface Lecture {
    id: string;
    title: string;
    date: Date;
    event: string;
    urlToLecture?: string;
}

export const lectures : Lecture[] = [{
    id: "1",
    title: "Brain, behavior, and being: Unraveling stress",
    date: new Date("2024-04-23"),
    event: "17th Annual Amygdala, Stress, and PTSD Conference.",
    urlToLecture: 'https://www.cstsonline.org/assets/media/documents/csts-amygdala-program-2024.pdf',
}, 
{
    id: "2",
    title: "Joe LeDoux, Our Four Realms of Existence",
    date: new Date("2023-12-01"),
    event: "Philosophy in Biology and Medicine Series (PIBM)",
    urlToLecture: "https://www.youtube.com/watch?v=dLSzD6Yw69c"
},
{
    id: "3",
    title: "The Four Realms of Existence",
    date: new Date("2024-02-02"),
    event: "AFNB - Akademie für neurowissenschaftliches Bildungsmanagement",
},

  {
    id: "4",
    title: "The Four Realms of Existence (Thomas Pradeu)",
    date: new Date("2023-12-15"),
    event: "Lecture to Philosophy in Biology and Medicine, University of Bordeaux, France",

  },
  {
    id: "5",
    title: "The Four Realms of Existence",
    date: new Date("2023-11-30"),
    event: "The Price Family Center for the Social Brain 2023, Symposium Social Interactions, Emotional Processing, and Inference in the Brain",
    urlToLecture: "https://www.rockefeller.edu/events-and-lectures/57966-the-price-family-center-for-the-social-brain-2023-symposium/"
  },
  {
    id: "6",
    title: "The Four Realms of Existence",
    date: new Date("2023-10-10"),
    event: "ROME Workshop, ACCADEMIA NAZIONALE DEI LINCEI CENTRO LINCEO INTERDISCIPLINARE, BENIAMINO SEGRE INTERNATIONAL CONFERENCE, Mindful Connections",
    urlToLecture: ""
  },
  {
    id: "7",
    title: "Emotion Roundtable",
    date: new Date("2023-09-23"),
    event: "Helix Center NYC",
    urlToLecture: "https://www.helixcenter.org/roundtables/emotion/"
  },
  {
    id: "8",
    title: "The Four Realms of Existence",
    date: new Date("2023-09-06"),
    event: "LSU Psychiatry Grand Rounds",
    urlToLecture: ""
  },
  {
    id: "9",
    title: "The Four Realms of Existence",
    date: new Date("2023-08-28"),
    event: "Plenary Lecture, European Brain and Behaviour Society, Amsterdam, Netherlands",
    urlToLecture: "https://ebbs2023.azuleon.org/plenarySpeakers"
  },
  {
    id: "10",
    title: "The Four Realms of Existence",
    date: new Date("2023-06-27"),
    event: "NIH Consciousness Workshop",
    urlToLecture: "https://neuroscienceblueprint.nih.gov/about/events/next-frontiers-consciousness-research-workshop"
  },
  {
    id: "11",
    title: "Our Realms of Existence: A Fresh Look at the Science of What and Who We Are",
    date: new Date("2023-06-22"),
    event: "A keynote talk by ASSC President Joseph LeDoux at the 26th meeting of the Association for the Scientific Study of Consciousness, at NYU",
    urlToLecture: ""
  },
  {
    id: "12",
    title: "Our Realms of Existence: An exploration of the biology and psychology of life",
    date: new Date("2023-05-04"),
    event: "Cambridge Chaucer Lecture",
    urlToLecture: "https://www.mrc-cbu.cam.ac.uk/events/chaucer-club/"
  },
  {
    id: "13",
    title: "Biology, Psychology, and Life: Connecting the Dots",
    date: new Date("2023-04-27"),
    event: "Karolinska Institutet – What is Life? series",
    urlToLecture: ""
  },
  {
    id: "14",
    title: "Heavy Mental: Music about Mind and Brain and Mental Disorders",
    date: new Date("2023-04-28"),
    event: "Kulturella hjärnan föreläsning at Karolinska Institutet",
    urlToLecture: ""
  },
  {
    id: "15",
    title: "What Happened to the 'Mental' in Mental Disorders",
    date: new Date("2023-04-19"),
    event: "The Institute of Philosophy Chandaria Lecture 2023, London, UK",
    urlToLecture: ""
  },
  {
    id: "16",
    title: "The Four Realms of Existence",
    date: new Date("2023-04-17"),
    event: "Sainsbury Wellcome Centre",
    urlToLecture: "https://www.sainsburywellcome.org/web/events/swc-seminar-four-realms-existence"
  },
   // 2022
  {
    id: "17",
    title: "The Four Realms of Existence",
    date: new Date("2022-11-04"),
    event: "CUNY Cognitive Neuroscience Colloquium",
    urlToLecture: "https://www.gc.cuny.edu/cognitive-neuroscience"
  },
  {
    id: "18",
    title: "The Four Realms of Existence",
    date: new Date("2022-10-20"),
    event: "57th National Congress Psychiatric Association of Turkey, Keynote Address",
    urlToLecture: ""
  },
  {
    id: "19",
    title: "Scientific Controversies No. 24: Body, Brain and Consciousness",
    date: new Date("2022-10-18"),
    event: "Pioneer Works, Brooklyn",
    urlToLecture: ""
  },
  {
    id: "20",
    title: "Masters of the Mind Lecture",
    date: new Date("2022-10-05"),
    event: "LBI Masters of the Mind",
    urlToLecture: ""
  },
  {
    id: "21",
    title: "Memory, Consciousness and the Emotions: Themes from the Work of Joseph LeDoux",
    date: new Date("2022-09-30"),
    event: "London School of Economics, Animal Sentience Group",
    urlToLecture: ""
  },
  {
    id: "22",
    title: "What Happened to the 'Mental' in 'Mental' Disorders",
    date: new Date("2022-09-27"),
    event: "DEC (Département d'études cognitives)",
    urlToLecture: ""
  },
  {
    id: "23",
    title: "The Four Realms of Existence",
    date: new Date("2022-09-16"),
    event: "University College London, Institute of Cognitive Neuroscience",
    urlToLecture: "https://www.ucl.ac.uk/icn/institute-cognitive-neuroscience"
  },
  {
    id: "24",
    title: "Putting the mental back in mental disorders",
    date: new Date("2022-09-08"),
    event: "Swiss Society of Psychiatry and Psychotherapy, Switzerland",
    urlToLecture: "https://www.ssbp.ch/"
  },
  {
    id: "25",
    title: "Honouring Karim Nader",
    date: new Date("2022-08-22"),
    event: "Molecular and Systems Neuroscience Cognition Symposium",
    urlToLecture: "https://www.mcgill.ca/neuro/channels/event/molecular-and-systems-neuroscience-cognition-symposium-honouring-karim-nader-313650"
  },
  {
    id: "26",
    title: "Wakeup Call: Mental States Are a Key Component of Mental Disorders",
    date: new Date("2022-08-10"),
    event: "The Inaugural NIH Consciousness Research Interest Group Seminar Series",
    urlToLecture: ""
  },
  {
    id: "27",
    title: "From the way we were to the way we are",
    date: new Date("2022-05-19"),
    event: "The Braining Club: Systems Neuroscience Through the Lens of Evolutionary Theory Workshop",
    urlToLecture: ""
  },
  {
    id: "28",
    title: "As Soon as there is life there is danger",
    date: new Date("2022-03-03"),
    event: "Biopsychology, Institute of Cognitive Neuroscience, Faculty of Psychology, Ruhr-University Bochum, Germany",
    urlToLecture: ""
  },
  {
    id: "29",
    title: "As Soon as there is life there is danger",
    date: new Date("2022-02-19"),
    event: "International Society for the Systems Sciences",
    urlToLecture: "https://www.isss.org/home/"
  },
   // 2021
  {
    id: "30",
    title: "Then and Now Panel",
    date: new Date("2021-11-08"),
    event: "SFN 50th Anniversary Events",
    urlToLecture: ""
  },
  {
    id: "31",
    title: "Mind-Wandering between Memory and Creativity",
    date: new Date("2021-09-27"),
    event: "Zoom",
    urlToLecture: ""
  },
  {
    id: "32",
    title: "Putting the Mental Back into Mental Disorders",
    date: new Date("2021-09-03"),
    event: "Geopolitics and Global Futures Symposium, Geneva Centre for Security Policy",
    urlToLecture: ""
  },
  {
    id: "33",
    title: "As Soon as there is life there is danger",
    date: new Date("2021-06-29"),
    event: "IBRO-RIKEN CBS Summer Program, Riken Center for Brain Science, Japan",
    urlToLecture: ""
  },
  {
    id: "34",
    title: "The Deep History of Ourselves",
    date: new Date("2021-04-17"),
    event: "Teaching Purposeful Brains, Learning and the Brain",
    urlToLecture: ""
  },
  {
    id: "35",
    title: "Emotions in the Arts, Humanities, and Sciences",
    date: new Date("2021-04-16"),
    event: "EBI & CLaME",
    urlToLecture: ""
  },
  {
    id: "36",
    title: "As Soon as there is life there is danger",
    date: new Date("2021-04-09"),
    event: "International Congress of Education, Psychology and Neurosciences, São Pedro, Sinapses",
    urlToLecture: ""
  },
  {
    id: "37",
    title: "As Soon as there is life there is danger",
    date: new Date("2021-02-21"),
    event: "The Integrated Brain and Behavior Research Center, University of Haifa, Israel",
    urlToLecture: ""
  },
   // 2020
  {
    id: "38",
    title: "As soon as there is life, there is danger",
    date: new Date("2020-11-24"),
    event: "XVI Simposio de Estudiantes de Filosofía, Pontificia Universidad Católica del Perú",
    urlToLecture: ""
  },
  {
    id: "39",
    title: "As soon as there was life, there was danger",
    date: new Date("2020-09-12"),
    event: "33rd ECNP Congress",
    urlToLecture: ""
  },
  {
    id: "40",
    title: "Joseph LeDoux on anxiety and fear",
    date: new Date("2020-05-19"),
    event: "New York State Writers Institute, University of Albany",
    urlToLecture: ""
  },
  {
    id: "41",
    title: "Minds and Machines: Reloaded",
    date: new Date("2020-05-12"),
    event: "NYU Arts and Science",
    urlToLecture: ""
  },
  {
    id: "42",
    title: "How Deep Do We Go?",
    date: new Date("2020-02-29"),
    event: "The Helix Center Roundtable",
    urlToLecture: ""
  },
   // 2019
  {
    id: "43",
    title: "How we got Conscious Brains",
    date: new Date("2019-11-20"),
    event: "Center for Inquiry New York City Public Group",
    urlToLecture: ""
  },
  {
    id: "44",
    title: "As soon as there is life, there is danger",
    date: new Date("2019-05-03"),
    event: "Saas-Free Summer Institute of Art, NYC",
    urlToLecture: ""
  },
  {
    id: "45",
    title: "Silence & Memory",
    date: new Date("2019-04-23"),
    event: "National Sawdust",
    urlToLecture: "https://nationalsawdust.org"
  },
  {
    id: "46",
    title: "From split-brain to emotional consciousness",
    date: new Date("2019-03-27"),
    event: "Italian Academy of Sciences, Turin, Italy",
    urlToLecture: ""
  },

  {
    id: "47",
    title: "Putting Emotion into Consciousness",
    date: new Date("2018-06-26"),
    event: "22nd Meeting of the ASSC (Krakow, Poland)",
    urlToLecture: ""
  },
  {
    id: "48",
    title: "Have we misunderstood what fear is?",
    date: new Date("2018-06-01"),
    event: "El Aleph Festival de Arte y Ciencia, MUAC, Mexico City",
    urlToLecture: ""
  },
  {
    id: "49",
    title: "Facing Fear: Why do our bodies and minds react the way they do when we’re in danger?",
    date: new Date("2018-03-07"),
    event: "Smithsonian’s Ripley Center, Washington, D.C.",
    urlToLecture: ""
  },
  {
    id: "50",
    title: "OUTSIDE-IN: THE SOCIAL BRAIN, CULTURE, AND THE SEL",
    date: new Date("2018-03-02"),
    event: "Graduate Center, CUNY",
    urlToLecture: ""
  },
  {
    id: "51",
    title: "Anxiety",
    date: new Date("2018-02-10"),
    event: "Conference, Rome, Italy",
    urlToLecture: ""
  },

  {
    id: "52",
    title: "WHAT IS FEAR? AND IS FEAR OF DEATH REALLY A 'FEAR'?",
    date: new Date("2017-03-03"),
    event: "Awareness of Death and Personal Mortality: Implications for Anthropogeny",
    urlToLecture: ""
  },

  {
    id: "53",
    title: "The struggle with fear - Implications for understanding and the treatment of fear",
    date: new Date("2016-12-17"),
    event: "Mega Event Brain Knowledge, Düsseldorf, Germany",
    urlToLecture: ""
  },
  {
    id: "54",
    title: "The Anxious Brain: The Neuroscience of Phobias",
    date: new Date("2016-10-18"),
    event: "AAAS – Neuroscience and Society",
    urlToLecture: ""
  },
  {
    id: "55",
    title: "Emotion and the Brain",
    date: new Date("2016-10-13"),
    event: "LabLinks",
    urlToLecture: ""
  },
  {
    id: "56",
    title: "",
    date: new Date("2016-06-12"),
    event: "World Congress on Brain, Behavior and Emotions, Buenos Aires, Argentina",
    urlToLecture: ""
  },
  {
    id: "57",
    title: "The Unconscious Is Less Mysterious But No Less Important Than You Thought",
    date: new Date("2016-04-21"),
    event: "Odyssey of the Mind",
    urlToLecture: ""
  },
  {
    id: "58",
    title: "Foundations of Emotions in Mind, Brain and Culture",
    date: new Date("2016-02-09"),
    event: "Conference (cmbc.emory.edu)",
    urlToLecture: ""
  },

  {
    id: "59",
    title: "Memory, Trauma and Resilience",
    date: new Date("2015-11-18"),
    event: "Intrepid Sea, Air and Space Museum",
    urlToLecture: ""
  },
  {
    id: "60",
    title: "The New York Consciousness Collective",
    date: new Date("2015-11-06"),
    event: "CUNY's Cognitive Science Speaker Series",
    urlToLecture: ""
  },
  {
    id: "61",
    title: "Reacting and Acting When in Harm’s Way: What’s the Role of Fear?",
    date: new Date("2015-09-12"),
    event: "EBBS & EBPS Joint Meeting, Verona, Italy",
    urlToLecture: ""
  },
  {
    id: "62",
    title: "Anxious",
    date: new Date("2015-07-15"),
    event: "The Rubin Museum of Art",
    urlToLecture: ""
  },
  {
    id: "63",
    title: "Brains and Brews",
    date: new Date("2015-03-22"),
    event: "Brains and Brews",
    urlToLecture: ""
  },
  {
    id: "64",
    title: "Talking about fear",
    date: new Date("2015-02-24"),
    event: "SOPSI 2015 Congress, Milano, Italy",
    urlToLecture: ""
  },
 {
    id: "66",
    title: "Systems Neuroscience Through the Lens of Evolutionary Theory Workshop",
    date: new Date("2022-05-19"),
    event: "The Braining Club",
    urlToLecture: ""
 },
 {
    id: "67",
    title: "As Soon As There Is Life, There Is Danger",
    date: new Date("2019-05-14"),
    event: "Accademia delle Scienze di Torino",
    urlToLecture: ""
 },
 {
    id: "68",
    title: "Do Split Brain Patients Have Two Minds?",
    date: new Date("2018-10-25"),
    event: "NYU Center for Mind, Brain and Consciousness",
    urlToLecture: ""
 },
 {
    id: "69",
    title: "Putting Emotion Into the Science of Consciousness",
    date: new Date("2019-08-09"),
    event: "Copernicus",
    urlToLecture: ""
 },
 {
    id: "70",
    title: "Joseph LeDoux: ¿Hemos entendido mal lo que es el miedo?",
    date: new Date("2018-06-01"),
    event: "Cultura en directo UNAM 2",
    urlToLecture: ""
 },
 {
    id: "71",
    title: "Richard Brown - Neuroscience and Contemporary Theories of Consciousness",
    date: new Date("2018-02-26"),
    event: "NYU The Emotional Brain Institute",
    urlToLecture: ""
 },
 {
    id: "72",
    title: "NYU Animal Consciousness Conference Part 2, Day 2",
    date: new Date("2018-08-31"),
    event: "",
    urlToLecture: ""
 },
 {
    id: "73",
    title: "Joseph E. LeDoux, Ph.D., was awarded the 2016 Jean-Marie Delwart International Prize",
    date: new Date("2016-11-09"),
    event: "Award",
    urlToLecture: ""
  },
  {
    id: "74",
    title: "LeDoux Recognized by APS for Fear, Anxiety Research - 2015 recipient of the APS William James Fellow Award",
    date: new Date("2015-05-21"),
    event: "27th APS Annual Convention, New York City",
    urlToLecture: "https://www.psychologicalscience.org/observer/ledoux-recognized-by-aps-for-fear-anxiety-research"
  },


  {
    id: "100",
    title: "The Four Realms of Existence",
    date: new Date("2025-10-07"),
    event: "Athena Culture Center, Mailand ti Mendrisio, Switzerland",
  },
  {
    id: "101",
    title: "The Four Realms of Existence",
    date: new Date("2025-10-03"),
    event: "Bergamo Science Festival, Bergamo Italy",
  },
  {
    id: "102",
    title: "The Four Realms of Existence",
    date: new Date("2025-09-03"),
    event: "International Society for Psychoneuroendocrinology, New Orleans, La.",
  },
  {
    id: "103",
    title: "The Four Realms of Existence",
    date: new Date("2025-07-13"),
    event: "Emotional Intelligence Conference, Manchester UK",
  },
  {
    id: "104",
    title: "The Four Realms of Existence",
    date: new Date("2025-06-21"),
    event: "Conference on Embodied Education, University of Cassino and Southern Lazio (Italy)",
  },
  {
    id: "105",
    title: "The Four Realms of Existence",
    date: new Date("2025-06-16"),
    event: "Hamburg Brain School Lecture Series",
  },
  {
    id: "106",
    title: "The Four Realms of Existence",
    date: new Date("2025-06-13"),
    event: "Rewiring Fear & Anxiety World Summit 2025",
  },
  {
    id: "107",
    title: "Q&A about of my role in Werner Herzog’s Theatre of Thought",
    date: new Date("2025-06-03"),
    event: "Callicoon Theater, Callicoon NY",
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
    title: "The Four Realms of Existence",
    date: new Date("2024-04-23"),
    event: "Conference on The Amygdala, Stress and PTSD, Uniformed Services University, Bethesda, MD",
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
    id: "126",
    title: "The Four Realms of Existence",
    date: new Date("2023-11-30"),
    event: "Rockefeller University, The Price Family Symposium Social on the Social Brain (via Zoom)",
  },
  {
    id: "127",
    title: "The Four Realms of Existence",
    date: new Date("2023-10-10"),
    event: "Workshop, Accademia Nazionale, Mindful Connections, Rome, Italy",
  },
  {
    id: "128",
    title: "The Four Realms of Existence",
    date: new Date("2023-09-06"),
    event: "Louisiana State University Psychiatry Grand Rounds",
  },
  {
    id: "129",
    title: "The Four Realms of Existence",
    date: new Date("2023-08-28"),
    event: "European Brain and Behavior Society, Amsterdam, Netherlands",
  },
  {
    id: "130",
    title: "The Four Realms of Existence",
    date: new Date("2023-06-27"),
    event: "NIH Consciousness Workshop, Bethesda, MD",
  },
  {
    id: "131",
    title: "The Four Realms of Existence",
    date: new Date("2023-06-22"),
    event:
      "Association for the Scientific Study of Consciousness (ASSC), Presidential Lecture by Joseph LeDoux",
  },
  {
    id: "132",
    title: "The Four Realms of Existence",
    date: new Date("2023-05-04"),
    event: "Chaucer Club, University of Cambridge, Cambridge, UK",
  },
  {
    id: "133",
    title: "Biology, Psychology, and Life: Connecting the Dots",
    date: new Date("2023-04-27"),
    event: "What is Life? series at the Karolinska Institute, Stockholm, Sweden",
  },
  {
    id: "134",
    title: "The Four Realms of Existence",
    date: new Date("2023-04-17"),
    event: "Sainsbury Wellcome Centre, University College, London",
  },
  {
    id: "135",
    title: "The Four Realms of Existence",
    date: new Date("2022-10-20"),
    event: "57th National Congress Psychiatric Association of Turkey, Istanbul, Turkey (via Zoom)",
  },
  {
    id: "136",
    title: "The Four Realms of Existence",
    date: new Date("2022-10-05"),
    event: "Masters of the Mind Lecture Series, Leuven Brain Institute, Leuven, Belgium",
  },
  {
    id: "137",
    title: "The Four Realms of Existence",
    date: new Date("2022-09-30"),
    event:
      "Conference on Memory, Consciousness and the Emotions: Themes from the Work of Joseph LeDoux, London School of Economics, London, UK",
  },
  {
    id: "138",
    title: "The Four Realms of Existence",
    date: new Date("2022-09-16"),
    event: "Institute of Cognitive Neuroscience, University College, London, UK",
  },
  {
    id: "139",
    title: "Putting the mental back in mental disorders",
    date: new Date("2022-09-08"),
    event: "Swiss Society of Psychiatry and Psychotherapy, Switzerland",
  },
  {
    id: "140",
    title: "Wakeup Call: Mental States Are a Key Component of Mental Disorders",
    date: new Date("2022-08-10"),
    event: "The Inaugural NIH Consciousness Research Interest Group Seminar Series",
  },
  {
    id: "141",
    title: "From the way we were to the way we are",
    date: new Date("2022-05-19"),
    event:
      "The Braining Club, Systems Neuroscience Through the Lens of Evolutionary Theory Workshop",
  },
  {
    id: "142",
    title: "As Soon as there is life, there is danger",
    date: new Date("2022-03-03"),
    event:
      "Biopsychology, Institute of Cognitive Neuroscience, Ruhr-University, Bochum, Germany",
  },
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
    event: "7th Annual Stony Brook Mind/Brain Lecture. Probing the Mysteries of the Mind",
    date: new Date("2003-03-31"),
    urlToLecture: "http://www.theswartzfoundation.org/mind-brain-2003.asp"
  },
  {
    id: "146",
    title: "Fear: Its Political Uses and Abuses- A social research conference at New School University",
    event: "New School University",
    date: new Date("2004-02-06"),
  },

]