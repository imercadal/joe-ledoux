export interface Review {
    content: string;
    author: string;
    reviewUrl: string;
}
  
export interface AdvancedPraise {
    praise: string;
    author: string;
    role: string;
}
  
export interface Store {
    name: string;
    url: string;
  }

export interface Book {
    _id?: number;
    title: string;
    subhead: string;
    year: string;
    imageUrl: string;
    allCitationsDownload: string;
    citationsByPartDownload: string;
    notesDownload: string;
    synopsis: string;
    reviews: Review[];
    advancedPraise: AdvancedPraise[];
    stores: Store[];
}


export const books: Book[] = [
    {
      title: "The Four Realms of Existence",
      subhead: "A new theory of being human",
      year: "2023",
      imageUrl: "/318_Four_Realms_Cover.webp",
      allCitationsDownload: "",
      citationsByPartDownload: "",
      notesDownload: "",
      synopsis:
        "Joseph LeDoux argues that ideas like the self are increasingly barriers to discovery and understanding. He offers a new framework, theorizing four realms of existence—bodily, neural, cognitive, and conscious. Together, these four realms operate continuously as an “ensemble of being” to make humans who and what we are.",
      reviews: [
        { content: "Neuroscientist LeDoux (The Deep History of Ourselves) presents a rigorously scientific yet eminently readable exploration of what it means to be human... the author delves into complex notions of personality and the self, the construction of internal narratives, and memory, elegantly making the case for the emergent properties of the mind without recourse to an undetectable soul or reducing the complexity of human existence to merely physical factors. The result is a finely wrought, thought-provoking feast for the mind. (Oct.)", 
            author: "Publishers Weekly", 
            reviewUrl: "https://www.publishersweekly.com/9780674261259" 
        },
        {
          content: "In The Four Realms of Existence LeDoux, a neuroscientist at New York University, suggests that there are four basic varieties of life on Earth: biological, neurobiological, cognitive and conscious. The book provides an in-depth description of these realms (I found the cognitive one especially thought-provoking) and describes how they evolved, in a way that is reminiscent of Mitchell’s approach. In this scheme, most living things occupy only the biological realm. Organisms with nervous systems are also neurobiological. Of these, some animals show model-based behaviour — using past experience to predict the future effects of their actions, and in doing so optimizing outcomes. These count as cognitive creatures.",
          author: "Liad Mudrik, Nature Book Review",
          reviewUrl: "https://www.nature.com/articles/d41586-023-03335-5"
        }
      ],
      advancedPraise: [
          {
            praise: "Joseph LeDoux is one of the most influential researchers and engaging writers in contemporary neuroscience. In The Four Realms of Existence, LeDoux takes the reader on an eye-opening journey into some of the most profound mysteries of mind and brain. Full of provocative ideas and startling insights, this captivating book is essential reading for anyone interested in understanding the basis of human experience..",
            author: "Daniel L. Schacter",
            role: "author of The Seven Sins of Memory: How the Mind Forgets and Remembers"
          }, 
          {
            praise: "Joe LeDoux is a leading light in the neuroscience of consciousness, and his new book is fascinating, engaging, and provocative. He proposes that consciousness is a kind of story that the brain tells itself, and he backs up this intriguing proposal with a wealth of evidence, including many discoveries of his own. Well worth reading.",
            author: "Anil Seth",
            role: "author of Being You: A New Science of Consciousness"
          },
          {
            praise: "LeDoux is a deep and synthetic thinker, aiming to advance our understanding of the mind in a way that is consistent with our best science and philosophy. His encyclopedic mastery of evolutionary biology, neurobiology, cognitive neuroscience, psychology, and the philosophy of mind allows him to build a theory of mind that does justice to the theory of evolution. A terrific book!",
            author: "Owen Flanagan",
            role: "author of How to Do Things with Emotions"
          },
          {
            praise: "One of our great scientific storytellers, Joe LeDoux deftly exposes the insufficiencies of current understandings of self and personality to capture the totality of who and what a person is in this fascinating and deeply researched book on what it means to be human.",
            author: "Daniel J. Levitin",
            role: "author of The Organized Mind and Successful Aging"
          }
      ],
      stores: [
        { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-four-realms-of-existence-joseph-e-ledoux/1143014710?ean=9780674261259" },
        { name: "Strand", url: "https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html" },
        { name: "Audible", url: "https://www.audible.com/pd/The-Four-Realms-of-Existence-Audiobook/B0C5NSNXDB?qid=1740345143&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=S3PH3MH5MM0FHJDSGNPW&plink=r1tHhVpZMhUxVrmP&pageLoadId=8uUftRqQb3lL0bnr&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1" },
        { name: "Amazon", url: "https://www.amazon.com/Four-Realms-Existence-Theory-Being/dp/0674261259" },
      ]
    },     {
        title: "The Deep History of Ourselves",
        subhead: "The Four-Billion-Year Story of How We Got Conscious Brains",
        year: "2019",
        imageUrl: "/317_Deep_History_Cover.webp",
        allCitationsDownload: "",
        citationsByPartDownload: "",
        notesDownload: "",
        synopsis:
          "Joseph LeDoux argues that ideas like the self are increasingly barriers to discovery and understanding. He offers a new framework, theorizing four realms of existence—bodily, neural, cognitive, and conscious. Together, these four realms operate continuously as an “ensemble of being” to make humans who and what we are.",
        reviews: [
          { content: "Neuroscientist LeDoux (The Deep History of Ourselves) presents a rigorously scientific yet eminently readable exploration of what it means to be human... the author delves into complex notions of personality and the self, the construction of internal narratives, and memory, elegantly making the case for the emergent properties of the mind without recourse to an undetectable soul or reducing the complexity of human existence to merely physical factors. The result is a finely wrought, thought-provoking feast for the mind. (Oct.)", 
              author: "Publishers Weekly", 
              reviewUrl: "https://www.publishersweekly.com/9780674261259" 
          },
          {
            content: "In The Four Realms of Existence LeDoux, a neuroscientist at New York University, suggests that there are four basic varieties of life on Earth: biological, neurobiological, cognitive and conscious. The book provides an in-depth description of these realms (I found the cognitive one especially thought-provoking) and describes how they evolved, in a way that is reminiscent of Mitchell’s approach. In this scheme, most living things occupy only the biological realm. Organisms with nervous systems are also neurobiological. Of these, some animals show model-based behaviour — using past experience to predict the future effects of their actions, and in doing so optimizing outcomes. These count as cognitive creatures.",
            author: "Liad Mudrik, Nature Book Review",
            reviewUrl: "https://www.nature.com/articles/d41586-023-03335-5"
          }
        ],
        advancedPraise: [
            {
              praise: "Joseph LeDoux is one of the most influential researchers and engaging writers in contemporary neuroscience. In The Four Realms of Existence, LeDoux takes the reader on an eye-opening journey into some of the most profound mysteries of mind and brain. Full of provocative ideas and startling insights, this captivating book is essential reading for anyone interested in understanding the basis of human experience..",
              author: "Daniel L. Schacter",
              role: "author of The Seven Sins of Memory: How the Mind Forgets and Remembers"
            }, 
            {
              praise: "Joe LeDoux is a leading light in the neuroscience of consciousness, and his new book is fascinating, engaging, and provocative. He proposes that consciousness is a kind of story that the brain tells itself, and he backs up this intriguing proposal with a wealth of evidence, including many discoveries of his own. Well worth reading.",
              author: "Anil Seth",
              role: "author of Being You: A New Science of Consciousness"
            },
            {
              praise: "LeDoux is a deep and synthetic thinker, aiming to advance our understanding of the mind in a way that is consistent with our best science and philosophy. His encyclopedic mastery of evolutionary biology, neurobiology, cognitive neuroscience, psychology, and the philosophy of mind allows him to build a theory of mind that does justice to the theory of evolution. A terrific book!",
              author: "Owen Flanagan",
              role: "author of How to Do Things with Emotions"
            },
            {
              praise: "One of our great scientific storytellers, Joe LeDoux deftly exposes the insufficiencies of current understandings of self and personality to capture the totality of who and what a person is in this fascinating and deeply researched book on what it means to be human.",
              author: "Daniel J. Levitin",
              role: "author of The Organized Mind and Successful Aging"
            }
        ],
        stores: [
          { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-four-realms-of-existence-joseph-e-ledoux/1143014710?ean=9780674261259" },
          { name: "Strand", url: "https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html" },
          { name: "Audible", url: "https://www.audible.com/pd/The-Four-Realms-of-Existence-Audiobook/B0C5NSNXDB?qid=1740345143&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=S3PH3MH5MM0FHJDSGNPW&plink=r1tHhVpZMhUxVrmP&pageLoadId=8uUftRqQb3lL0bnr&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1" },
          { name: "Amazon", url: "https://www.amazon.com/Four-Realms-Existence-Theory-Being/dp/0674261259" },
        ]
      }, {
        title: "Anxious",
        subhead: "Using the brain to understand fear and anxiety",
        year: "2015",
        imageUrl: "/316_Anxious_Cover.webp",
        allCitationsDownload: "",
        citationsByPartDownload: "",
        notesDownload: "",
        synopsis:
          "Joseph LeDoux argues that ideas like the self are increasingly barriers to discovery and understanding. He offers a new framework, theorizing four realms of existence—bodily, neural, cognitive, and conscious. Together, these four realms operate continuously as an “ensemble of being” to make humans who and what we are.",
        reviews: [
          { content: "Neuroscientist LeDoux (The Deep History of Ourselves) presents a rigorously scientific yet eminently readable exploration of what it means to be human... the author delves into complex notions of personality and the self, the construction of internal narratives, and memory, elegantly making the case for the emergent properties of the mind without recourse to an undetectable soul or reducing the complexity of human existence to merely physical factors. The result is a finely wrought, thought-provoking feast for the mind. (Oct.)", 
              author: "Publishers Weekly", 
              reviewUrl: "https://www.publishersweekly.com/9780674261259" 
          },
          {
            content: "In The Four Realms of Existence LeDoux, a neuroscientist at New York University, suggests that there are four basic varieties of life on Earth: biological, neurobiological, cognitive and conscious. The book provides an in-depth description of these realms (I found the cognitive one especially thought-provoking) and describes how they evolved, in a way that is reminiscent of Mitchell’s approach. In this scheme, most living things occupy only the biological realm. Organisms with nervous systems are also neurobiological. Of these, some animals show model-based behaviour — using past experience to predict the future effects of their actions, and in doing so optimizing outcomes. These count as cognitive creatures.",
            author: "Liad Mudrik, Nature Book Review",
            reviewUrl: "https://www.nature.com/articles/d41586-023-03335-5"
          }
        ],
        advancedPraise: [
            {
              praise: "Joseph LeDoux is one of the most influential researchers and engaging writers in contemporary neuroscience. In The Four Realms of Existence, LeDoux takes the reader on an eye-opening journey into some of the most profound mysteries of mind and brain. Full of provocative ideas and startling insights, this captivating book is essential reading for anyone interested in understanding the basis of human experience..",
              author: "Daniel L. Schacter",
              role: "author of The Seven Sins of Memory: How the Mind Forgets and Remembers"
            }, 
            {
              praise: "Joe LeDoux is a leading light in the neuroscience of consciousness, and his new book is fascinating, engaging, and provocative. He proposes that consciousness is a kind of story that the brain tells itself, and he backs up this intriguing proposal with a wealth of evidence, including many discoveries of his own. Well worth reading.",
              author: "Anil Seth",
              role: "author of Being You: A New Science of Consciousness"
            },
            {
              praise: "LeDoux is a deep and synthetic thinker, aiming to advance our understanding of the mind in a way that is consistent with our best science and philosophy. His encyclopedic mastery of evolutionary biology, neurobiology, cognitive neuroscience, psychology, and the philosophy of mind allows him to build a theory of mind that does justice to the theory of evolution. A terrific book!",
              author: "Owen Flanagan",
              role: "author of How to Do Things with Emotions"
            },
            {
              praise: "One of our great scientific storytellers, Joe LeDoux deftly exposes the insufficiencies of current understandings of self and personality to capture the totality of who and what a person is in this fascinating and deeply researched book on what it means to be human.",
              author: "Daniel J. Levitin",
              role: "author of The Organized Mind and Successful Aging"
            }
        ],
        stores: [
          { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-four-realms-of-existence-joseph-e-ledoux/1143014710?ean=9780674261259" },
          { name: "Strand", url: "https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html" },
          { name: "Audible", url: "https://www.audible.com/pd/The-Four-Realms-of-Existence-Audiobook/B0C5NSNXDB?qid=1740345143&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=S3PH3MH5MM0FHJDSGNPW&plink=r1tHhVpZMhUxVrmP&pageLoadId=8uUftRqQb3lL0bnr&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1" },
          { name: "Amazon", url: "https://www.amazon.com/Four-Realms-Existence-Theory-Being/dp/0674261259" },
        ]
      }, {
        title: "The Emotional Brain",
        subhead: "Using the brain to understand fear and anxiety",
        year: "2015",
        imageUrl: "/315_Emotional_brain_Cover.webp",
        allCitationsDownload: "",
        citationsByPartDownload: "",
        notesDownload: "",
        synopsis:
          "Joseph LeDoux argues that ideas like the self are increasingly barriers to discovery and understanding. He offers a new framework, theorizing four realms of existence—bodily, neural, cognitive, and conscious. Together, these four realms operate continuously as an “ensemble of being” to make humans who and what we are.",
        reviews: [
          { content: "Neuroscientist LeDoux (The Deep History of Ourselves) presents a rigorously scientific yet eminently readable exploration of what it means to be human... the author delves into complex notions of personality and the self, the construction of internal narratives, and memory, elegantly making the case for the emergent properties of the mind without recourse to an undetectable soul or reducing the complexity of human existence to merely physical factors. The result is a finely wrought, thought-provoking feast for the mind. (Oct.)", 
              author: "Publishers Weekly", 
              reviewUrl: "https://www.publishersweekly.com/9780674261259" 
          },
          {
            content: "In The Four Realms of Existence LeDoux, a neuroscientist at New York University, suggests that there are four basic varieties of life on Earth: biological, neurobiological, cognitive and conscious. The book provides an in-depth description of these realms (I found the cognitive one especially thought-provoking) and describes how they evolved, in a way that is reminiscent of Mitchell’s approach. In this scheme, most living things occupy only the biological realm. Organisms with nervous systems are also neurobiological. Of these, some animals show model-based behaviour — using past experience to predict the future effects of their actions, and in doing so optimizing outcomes. These count as cognitive creatures.",
            author: "Liad Mudrik, Nature Book Review",
            reviewUrl: "https://www.nature.com/articles/d41586-023-03335-5"
          }
        ],
        advancedPraise: [
            {
              praise: "Joseph LeDoux is one of the most influential researchers and engaging writers in contemporary neuroscience. In The Four Realms of Existence, LeDoux takes the reader on an eye-opening journey into some of the most profound mysteries of mind and brain. Full of provocative ideas and startling insights, this captivating book is essential reading for anyone interested in understanding the basis of human experience..",
              author: "Daniel L. Schacter",
              role: "author of The Seven Sins of Memory: How the Mind Forgets and Remembers"
            }, 
            {
              praise: "Joe LeDoux is a leading light in the neuroscience of consciousness, and his new book is fascinating, engaging, and provocative. He proposes that consciousness is a kind of story that the brain tells itself, and he backs up this intriguing proposal with a wealth of evidence, including many discoveries of his own. Well worth reading.",
              author: "Anil Seth",
              role: "author of Being You: A New Science of Consciousness"
            },
            {
              praise: "LeDoux is a deep and synthetic thinker, aiming to advance our understanding of the mind in a way that is consistent with our best science and philosophy. His encyclopedic mastery of evolutionary biology, neurobiology, cognitive neuroscience, psychology, and the philosophy of mind allows him to build a theory of mind that does justice to the theory of evolution. A terrific book!",
              author: "Owen Flanagan",
              role: "author of How to Do Things with Emotions"
            },
            {
              praise: "One of our great scientific storytellers, Joe LeDoux deftly exposes the insufficiencies of current understandings of self and personality to capture the totality of who and what a person is in this fascinating and deeply researched book on what it means to be human.",
              author: "Daniel J. Levitin",
              role: "author of The Organized Mind and Successful Aging"
            }
        ],
        stores: [
          { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-four-realms-of-existence-joseph-e-ledoux/1143014710?ean=9780674261259" },
          { name: "Strand", url: "https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html" },
          { name: "Audible", url: "https://www.audible.com/pd/The-Four-Realms-of-Existence-Audiobook/B0C5NSNXDB?qid=1740345143&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=S3PH3MH5MM0FHJDSGNPW&plink=r1tHhVpZMhUxVrmP&pageLoadId=8uUftRqQb3lL0bnr&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1" },
          { name: "Amazon", url: "https://www.amazon.com/Four-Realms-Existence-Theory-Being/dp/0674261259" },
        ]
      }, {
        title: "Post-Traumatic Stress Disorder",
        subhead: "Using the brain to understand fear and anxiety",
        year: "2015",
        imageUrl: "/314_PTSD_Cover.webp",
        allCitationsDownload: "",
        citationsByPartDownload: "",
        notesDownload: "",
        synopsis:
          "Joseph LeDoux argues that ideas like the self are increasingly barriers to discovery and understanding. He offers a new framework, theorizing four realms of existence—bodily, neural, cognitive, and conscious. Together, these four realms operate continuously as an “ensemble of being” to make humans who and what we are.",
        reviews: [
          { content: "Neuroscientist LeDoux (The Deep History of Ourselves) presents a rigorously scientific yet eminently readable exploration of what it means to be human... the author delves into complex notions of personality and the self, the construction of internal narratives, and memory, elegantly making the case for the emergent properties of the mind without recourse to an undetectable soul or reducing the complexity of human existence to merely physical factors. The result is a finely wrought, thought-provoking feast for the mind. (Oct.)", 
              author: "Publishers Weekly", 
              reviewUrl: "https://www.publishersweekly.com/9780674261259" 
          },
          {
            content: "In The Four Realms of Existence LeDoux, a neuroscientist at New York University, suggests that there are four basic varieties of life on Earth: biological, neurobiological, cognitive and conscious. The book provides an in-depth description of these realms (I found the cognitive one especially thought-provoking) and describes how they evolved, in a way that is reminiscent of Mitchell’s approach. In this scheme, most living things occupy only the biological realm. Organisms with nervous systems are also neurobiological. Of these, some animals show model-based behaviour — using past experience to predict the future effects of their actions, and in doing so optimizing outcomes. These count as cognitive creatures.",
            author: "Liad Mudrik, Nature Book Review",
            reviewUrl: "https://www.nature.com/articles/d41586-023-03335-5"
          }
        ],
        advancedPraise: [
            {
              praise: "Joseph LeDoux is one of the most influential researchers and engaging writers in contemporary neuroscience. In The Four Realms of Existence, LeDoux takes the reader on an eye-opening journey into some of the most profound mysteries of mind and brain. Full of provocative ideas and startling insights, this captivating book is essential reading for anyone interested in understanding the basis of human experience..",
              author: "Daniel L. Schacter",
              role: "author of The Seven Sins of Memory: How the Mind Forgets and Remembers"
            }, 
            {
              praise: "Joe LeDoux is a leading light in the neuroscience of consciousness, and his new book is fascinating, engaging, and provocative. He proposes that consciousness is a kind of story that the brain tells itself, and he backs up this intriguing proposal with a wealth of evidence, including many discoveries of his own. Well worth reading.",
              author: "Anil Seth",
              role: "author of Being You: A New Science of Consciousness"
            },
            {
              praise: "LeDoux is a deep and synthetic thinker, aiming to advance our understanding of the mind in a way that is consistent with our best science and philosophy. His encyclopedic mastery of evolutionary biology, neurobiology, cognitive neuroscience, psychology, and the philosophy of mind allows him to build a theory of mind that does justice to the theory of evolution. A terrific book!",
              author: "Owen Flanagan",
              role: "author of How to Do Things with Emotions"
            },
            {
              praise: "One of our great scientific storytellers, Joe LeDoux deftly exposes the insufficiencies of current understandings of self and personality to capture the totality of who and what a person is in this fascinating and deeply researched book on what it means to be human.",
              author: "Daniel J. Levitin",
              role: "author of The Organized Mind and Successful Aging"
            }
        ],
        stores: [
          { name: "Barnes & Noble", url: "https://www.barnesandnoble.com/w/the-four-realms-of-existence-joseph-e-ledoux/1143014710?ean=9780674261259" },
          { name: "Strand", url: "https://www.strandbooks.com/the-four-realms-of-existence-a-new-theory-of-being-human-9780674261259.html" },
          { name: "Audible", url: "https://www.audible.com/pd/The-Four-Realms-of-Existence-Audiobook/B0C5NSNXDB?qid=1740345143&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=S3PH3MH5MM0FHJDSGNPW&plink=r1tHhVpZMhUxVrmP&pageLoadId=8uUftRqQb3lL0bnr&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1" },
          { name: "Amazon", url: "https://www.amazon.com/Four-Realms-Existence-Theory-Being/dp/0674261259" },
        ]
      }
  ];