export interface Symposiums {
    number: string;
    title: string;
    organizers: string[];
    speakers: string[];
    abstract: string;
    abstracts: Abstracts[];
}

export interface Abstracts {
    title: string;
    authors: string;
    affiliation: string;
    abstract: string;
}

export interface SpeakerType {
    slot: number;
    time: string;
    name: string;
    affiliation: string;
    title: string;
    abstract: string;
    bio: string;
    moderator: string;
    photo: string;
}