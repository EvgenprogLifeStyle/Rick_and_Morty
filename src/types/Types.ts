export interface CharacterInt{
    id?: number;
    name?:string;
    status?:string;
    species?:string;
    type?:string;
    gender?:string;
    origin?:any[];
    location?:any[];
    image?:string;
    url?:string;
    created?:string;
}

export interface EpisodeInt{
    id: number;
    name:string;
    air_date: string;
    characters: any[];
    created: string;
    episode: string;
    url?:string
}

export interface LocationInt{
    id: number;
    name:string;
    type?: string;
    dimension?: string;
    residents?: any[string];
    url?:string;
    created?:string;
}
