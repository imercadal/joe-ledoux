export interface Publication {
    id: number;
    name: string;
    authors: string;
    year: number;
    journal: string;
    month: string;
    url: string;
}

export const publications : Publication[] = [{
    id: 123,
    name: "Metacognition as a window into subjective affective experience",
    authors: "Cody A. Cushing PhD, Hakwan Lau PhD, Stefan G. Hoffman PhD, Joseph E. LeDoux PhD, Vincent Taschereau-Dumouchel PhD",
    year: 2024,
    journal: "Psychiatry and Clinical Neurosciences",
    month: "June",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1111/pcn.13683"
}, {
    id: 234,
    name: " Consciousness, the affectome, and human life",
    authors: "Joseph E. LeDoux",
    year: 2024,
    journal: "Neuroscience & Behavioral Reviews",
    month: "April",
    url: "https://www.sciencedirect.com/science/article/pii/S0149763424000708"
}
]
