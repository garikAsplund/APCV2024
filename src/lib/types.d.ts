export interface Symposiums {
    number: string;
    title: string;
    organizers: string[];
    speakers: string[];
    abstracts: Abstracts[];
}

export interface Abstracts {
    title: string;
    authors: string;
    affiliation: string;
    abstract: string;
}