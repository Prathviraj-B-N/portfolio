interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Social extends SanityBody {
    _type: "social";
    title: string,
    url: string
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image
}

export interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    title: string;
    progress: number;
}

export interface Technology extends SanityBody{
    _type: "skill";
    image: Image;
    title: string;
    progress: number;
}

export interface Project extends SanityBody {
    _type: "project";
    projectTitle: string;
    technology: string;
    projectImage: Image;
    dateStarted: date;
    dateEnded: date;
    isOngoing: boolean;
    techStack: Technology[];
    points: string[];
    description: string;
}