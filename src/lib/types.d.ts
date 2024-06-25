export interface Symposiums {
    number: string;
    title: string;
    organizers: string[];
    speakers: {speaker: string, authors: string, title: string }[];
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
    school: string;
    title: string;
    abstract: string;
    bio: string;
    moderator: string;
    photo: string;
    link: string;
}